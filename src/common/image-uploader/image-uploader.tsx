import { ChangeEvent, useState } from 'react'

import { ImageOutline, defaultImage } from '@/assets'
import { Deck } from '@/services'

type ImageUploaderProps = {
  deck?: Deck
  handleChangeFile: (file: File | null) => void
  imageKey: 'cover'
}

export const ImageUploader = ({ deck, handleChangeFile, imageKey }: ImageUploaderProps) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileLoading = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      setFile(file)
      handleChangeFile(file)
    }
  }

  const createSrc = () => {
    if (file) {
      return URL.createObjectURL(file)
    }
    if (deck && typeof deck[imageKey] === 'string') {
      return deck[imageKey]
    }

    return defaultImage
  }

  return (
    <div>
      <div>
        <img src={createSrc()} />
      </div>
      <label htmlFor={imageKey}>
        <ImageOutline />
        Upload Image
      </label>
      <input id={imageKey} onChange={handleFileLoading} type={'file'} />
    </div>
  )
}
