/* eslint-disable @next/next/no-img-element */
import React, { ReactEventHandler, useContext, useState } from 'react'
import ReactCrop, {
   Crop,
   PixelCrop,
   centerCrop,
   makeAspectCrop,
} from 'react-image-crop'

import EditableSection from 'components/EditableSection'
import Modal from 'components/mui/Modal'
import classNames from 'classnames'
import ProfileContext from 'context/ProfileContext'
import Button from 'components/mui/Button'
import Input from 'components/mui/Input'
import { imgPreview } from 'lib/image-crop/imgPreview'
import usePutProfile from 'hooks/api/usePutProfile'

const ProfileImage = ({ className }) => {
   const { profile, setProfile } = useContext(ProfileContext)
   const [modalOpen, setModalOpen] = useState(false)
   const [crop, setCrop] = useState<Crop>({
      unit: '%', // Can be 'px' or '%'
      x: 0,
      y: 0,
      width: 100,
      height: 100,
   })
   const [image, setImage] = useState(`/api/profile/photo/${profile._id}`)
   const [imageRef, setImageRef] = useState<HTMLImageElement>()
   const [putProfile] = usePutProfile()
   const [loadingSave, setLoadingSave] = useState(false)

   function onImageLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
      const { naturalWidth: width, naturalHeight: height } = e.currentTarget

      const crop = centerCrop(
         makeAspectCrop(
            {
               // You don't need to pass a complete crop into
               // makeAspectCrop or centerCrop.
               unit: '%',
               width: 100,
            },
            1,
            width,
            height
         ),
         width,
         height
      )

      setCrop(crop)
   }

   return (
      <EditableSection
         className={classNames('w-[300px] h-[300px]', className)}
         hideDelete
         onEditClick={() => setModalOpen(true)}
      >
         <div className="bg-gray-200 w-full h-full">
            <img
               className="rounded-sm object-cover object-top"
               alt="Profile Photo"
               src={`/api/profile/photo/${
                  profile._id
               }?${+profile.photoUpdatedAt}`}
            />
         </div>
         <Modal
            className="min-w-[400px] min-h-[400px]"
            open={modalOpen}
            onClose={() => setModalOpen(false)}
         >
            <div className="flex flex-col gap-4">
               <ReactCrop
                  className="self-center"
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  aspect={1}
                  minWidth={300}
                  minHeight={300}
               >
                  <img
                     ref={(ref) => setImageRef(ref)}
                     className="rounded-sm"
                     alt="Profile Photo"
                     src={image}
                     onLoad={onImageLoad}
                  />
               </ReactCrop>
               <Input
                  type="file"
                  onChange={function (evt) {
                     const reader = new FileReader()
                     reader.addEventListener('load', () => {
                        //RECIEVE THE ORIGINAL IMAGE
                        const uploadedImage = reader.result
                        const canvas = document.createElement('canvas')
                        const context2d = canvas.getContext('2d')
                        const image = new Image()
                        image.src = uploadedImage as string
                        image.onload = () => {
                           //RESIZE TO MAX WIDTH 300
                           canvas.width = 300
                           canvas.height =
                              (image.naturalHeight / image.naturalWidth) * 300
                           context2d.drawImage(
                              image,
                              0,
                              0,
                              canvas.width,
                              canvas.height
                           )
                           setImage(`${canvas.toDataURL('image/png')}`)
                        }
                     })
                     reader.readAsDataURL(evt.target.files[0])
                  }}
               />
               <div className="flex-1 flex justify-end gap-4">
                  <div className="flex gap-4">
                     <Button
                        className="block"
                        variant="outline"
                        onClick={() => setModalOpen(false)}
                     >
                        Cancel
                     </Button>

                     <Button
                        className="block"
                        variant="contained"
                        loading={loadingSave}
                        onClick={() => {
                           setLoadingSave(true)
                           imgPreview(imageRef, crop as PixelCrop, 1, 0).then(
                              async (dataUrl) => {
                                 const newProfile = {
                                    ...profile,
                                    photo: dataUrl.split(',')[1],
                                    photoUpdatedAt: new Date(),
                                 }
                                 await putProfile(newProfile)
                                 setProfile(newProfile)
                                 setLoadingSave(false)
                                 setModalOpen(false)
                              }
                           )
                        }}
                     >
                        Save
                     </Button>
                  </div>
               </div>
            </div>
         </Modal>
      </EditableSection>
   )
}

export default ProfileImage
