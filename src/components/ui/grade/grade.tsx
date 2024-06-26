import { StarIcon } from '@/assets/icons/star'
import { StarOutlineIcon } from '@/assets/icons/star-outline'

import s from './grade.module.scss'

type Props = {
  maxGrade: number
  onChangeGrade: (value: number) => void
  value: number
}

export const Grade = ({ maxGrade, onChangeGrade, value }: Props) => {
  const classNames = {
    grade: s.grade,
  }
  const stars = Array.from({ length: maxGrade }, (_, i) => i + 1)

  const handleClick = (value: number) => {
    onChangeGrade(value)
  }

  return (
    <div className={classNames.grade}>
      {stars.map(star => (
        <Star key={star} onClick={handleClick} selected={value >= star} value={star} />
      ))}
    </div>
  )
}

type StarProps = {
  onClick: (value: number) => void
  selected: boolean
  value: number
}

const Star = ({ onClick, selected, value }: StarProps) => {
  const classNames = {
    star: s.star,
  }
  const handleClick = () => onClick(value)

  return (
    <span className={classNames.star} onClick={handleClick}>
      {selected ? <StarIcon /> : <StarOutlineIcon />}
    </span>
  )
}
