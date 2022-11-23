import React from 'react'

import Button from './Button'
import Modal from './Modal'

const ConfirmModal: React.FC<Props> = ({
   ref,
   children,
   acceptText = 'Yes',
   rejectText = 'No',
   onAccept,
   onReject,
   ...props
}) => {
   return (
      <Modal ref={ref} {...props}>
         <div>
            {children}
            <div className="flex flex-row justify-end gap-2 border-t-[1px] border-primary pt-4 mt-4">
               <Button variant="outline" onClick={onReject}>
                  {rejectText}
               </Button>
               <Button variant="contained" onClick={onAccept}>
                  {acceptText}
               </Button>
            </div>
         </div>
      </Modal>
   )
}

interface Props extends React.ComponentPropsWithRef<typeof Modal> {
   acceptText?: string
   rejectText?: string
   onAccept: () => void
   onReject: () => void
}

export default ConfirmModal
