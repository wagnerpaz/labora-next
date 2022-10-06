import { PixelCrop } from 'react-image-crop'
import { canvasPreview } from './canvasPreview'

// Returns an image source you should set to state and pass
// `{previewSrc && <img alt="Crop preview" src={previewSrc} />}`
export async function imgPreview(
   image: HTMLImageElement,
   crop: PixelCrop,
   scale = 1,
   rotate = 0
) {
   return new Promise<string>((resolve, reject) => {
      const canvas = document.createElement('canvas')
      canvasPreview(image, canvas, crop, scale, rotate)
      const croppedDataUrl = canvas.toDataURL()

      const resizeCanvas = document.createElement('canvas')
      const resizeContext = resizeCanvas.getContext('2d')
      resizeCanvas.width = 300
      resizeCanvas.height = 300

      const cropped = new Image()
      cropped.src = croppedDataUrl
      cropped.onload = function () {
         resizeContext.drawImage(
            cropped,
            0,
            0,
            resizeCanvas.width,
            resizeCanvas.height
         )
         resolve(resizeCanvas.toDataURL())
      }
   })
}
