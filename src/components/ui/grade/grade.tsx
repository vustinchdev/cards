import { StarIcon } from '@/assets/icons/star'
import { StarOutlineIcon } from '@/assets/icons/star-outline'

type Props = {
  maxGrade: number
  onChangeGrade: (value: number) => void
  value: number
}

export const Grade = ({ maxGrade, onChangeGrade, value }: Props) => {
  const stars = Array.from({ length: maxGrade }, (_, i) => i + 1)

  const handleClick = (value: number) => {
    onChangeGrade(value)
  }

  return (
    <div>
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
  const handleClick = () => onClick(value)

  return <span onClick={handleClick}>{selected ? <StarIcon /> : <StarOutlineIcon />}</span>
}
