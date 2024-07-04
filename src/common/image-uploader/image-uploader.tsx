import { ChangeEvent, useState } from 'react'

import { ImageOutline, defaultImage } from '@/assets'
import { Typography } from '@/components'
import { Deck } from '@/services'

import s from './image-uploader.module.scss'

type ImageUploaderProps = {
  deck?: Deck
  handleChangeFile: (file: File | null) => void
  imageKey: 'cover'
}

export const ImageUploader = ({ deck, handleChangeFile, imageKey }: ImageUploaderProps) => {
  const classNames = {
    container: s.container,
    image: s.image,
    inputFile: s.inputFile,
    label: s.label,
  }

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
    <div className={classNames.container}>
      <div>
        <img className={classNames.image} src={createSrc()} />
      </div>
      <Typography
        as={'label'}
        className={classNames.label}
        htmlFor={imageKey}
        variant={'subtitle2'}
      >
        <ImageOutline />
        Upload Image
      </Typography>
      <input
        className={classNames.inputFile}
        id={imageKey}
        onChange={handleFileLoading}
        type={'file'}
      />
    </div>
  )
}
