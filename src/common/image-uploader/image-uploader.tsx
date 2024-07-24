import { ChangeEvent, useState } from 'react'

import { ImageOutline, defaultImage } from '@/assets'
import { Typography } from '@/components'
import { CardResponse, Deck } from '@/services'

import s from './image-uploader.module.scss'

type ImageUploaderProps = {
  card?: CardResponse
  deck?: Deck
  handleChangeFile: (file: File | null) => void
  imageKey: 'answerImg' | 'cover' | 'questionImg'
}

export const ImageUploader = ({ card, deck, handleChangeFile, imageKey }: ImageUploaderProps) => {
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
    if (
      card &&
      (imageKey === 'answerImg' || imageKey === 'questionImg') &&
      typeof card[imageKey] === 'string'
    ) {
      return card[imageKey]
    }

    if (deck && imageKey === 'cover' && typeof deck[imageKey] === 'string') {
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
