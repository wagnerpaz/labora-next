import React, { useCallback } from 'react'
import classNames from 'classnames'
import { MdAdd } from 'react-icons/md'
import { useFieldArray, useForm } from 'react-hook-form'

import { IEmploymentItem, IProfile } from 'models/Profile'
import Button from 'components/mui/Button'
import Input from 'components/mui/Input'
import LabeledInputController from 'components/mui/form-hooks-controllers/LabeledInputController'
import ArrayFieldsControl from './components/ArrayFieldsControl'
import ArrayFieldItemControl from './components/ArrayFieldItemControl'

const EmploymentItemForm: React.FC<Props> = ({
   className,
   employmentItem,
   onCancel,
   onSave,
}) => {
   const { control, register, handleSubmit } = useForm<IEmploymentItem>({
      defaultValues: {
         role: employmentItem.role || '',
         employer: employmentItem.employer || '',
         start: employmentItem.start || '',
         end: employmentItem.end || '',
         achievements: employmentItem.achievements || [],
         knowledge: employmentItem.knowledge || [],
      },
   })
   const {
      fields: achievementFields,
      prepend: achievementPrepend,
      remove: achievementRemove,
      swap: achievementSwap,
   } = useFieldArray({
      control,
      name: 'achievements',
   })

   const {
      fields: knowledgeFields,
      append: knowledgeAppend,
      remove: knowledgeRemove,
      swap: knowledgeSwap,
   } = useFieldArray({
      control,
      name: 'knowledge',
   })

   const onFindAchievement = useCallback(
      (id: string) => {
         const achievement = achievementFields.filter(
            (c) => `${c.id}` === id
         )[0]
         return {
            achievement,
            index: achievementFields.indexOf(achievement),
         }
      },
      [achievementFields]
   )

   const onDropAchievement = useCallback(
      (id: string, atIndex: number) => {
         const { index } = onFindAchievement(id)
         achievementSwap(index, atIndex)
      },
      [achievementSwap, onFindAchievement]
   )

   const onFindKnowledge = useCallback(
      (id: string) => {
         const knowlegde = knowledgeFields.filter((c) => `${c.id}` === id)[0]
         return {
            knowlegde,
            index: knowledgeFields.indexOf(knowlegde),
         }
      },
      [knowledgeFields]
   )

   const onDropKnowledge = useCallback(
      (id: string, atIndex: number) => {
         const { index } = onFindKnowledge(id)
         knowledgeSwap(index, atIndex)
      },
      [knowledgeSwap, onFindKnowledge]
   )

   return (
      <form
         className={classNames(className)}
         onSubmit={handleSubmit((result, evt) => {
            onSave(result)
         })}
      >
         <h3 className="text-lg font-bold mb-2">General</h3>
         <LabeledInputController control={control} label="Role" name="role" />
         <LabeledInputController
            control={control}
            label="Employer"
            name="employer"
         />
         <div className="flex gap-4">
            <LabeledInputController
               className="flex-1"
               control={control}
               label="Start"
               name="start"
            />
            <LabeledInputController
               className="flex-1"
               control={control}
               label="End"
               name="end"
            />
         </div>
         <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2 mb-2">
               <h3 className="text-lg font-bold">Achievements</h3>
               <MdAdd
                  className="fill-secondary-dark"
                  onClick={() => achievementPrepend({ description: '' })}
               />
            </div>
            <ArrayFieldsControl className="mb-4" array={achievementFields}>
               {(item, index: number) => (
                  <ArrayFieldItemControl
                     id={item.id}
                     originalIndex={index}
                     inputProps={{
                        ...register(`achievements.${index}.description`),
                        multiline: true,
                        rows: 4,
                     }}
                     onFind={onFindAchievement}
                     onDrop={onDropAchievement}
                     onClose={() => achievementRemove(index)}
                  />
               )}
            </ArrayFieldsControl>
            <div className="flex flex-col">
               <div className="flex flex-row gap-2 items-center mb-2">
                  <h3 className="text-lg font-bold">Skills</h3>
                  <MdAdd
                     className="cursor-pointer fill-secondary-dark"
                     onClick={() => knowledgeAppend({ description: '' })}
                  />
               </div>
               <ArrayFieldsControl
                  className="grid grid-cols-4 mb-4"
                  array={knowledgeFields}
               >
                  {(item, index: number) => (
                     <ArrayFieldItemControl
                        id={item.id}
                        originalIndex={index}
                        inputProps={{
                           ...register(`knowledge.${index}.description`),
                        }}
                        onFind={onFindKnowledge}
                        onDrop={onDropKnowledge}
                        onClose={() => knowledgeRemove(index)}
                     />
                  )}
               </ArrayFieldsControl>
            </div>
         </div>
         <div className="text-end">
            <Button
               variant="outline"
               className="inline-block"
               onClick={onCancel}
            >
               Cancel
            </Button>
            <Button
               type="submit"
               variant="contained"
               className="inline-block ml-2"
            >
               Save
            </Button>
         </div>
      </form>
   )
}

type Props = {
   className?: string
   employmentItem: IEmploymentItem
   onCancel: () => void
   onSave: (newEmploymentItem: IEmploymentItem) => void
}

export default EmploymentItemForm
