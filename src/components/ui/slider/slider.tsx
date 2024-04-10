import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Slider>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Slider>, SliderProps>(
  ({ defaultValue, value, ...rest }, ref) => {
    const classNames = {
      container: s.container,
      endSquare: s.square,
      range: s.range,
      slider: s.slider,
      startSquare: s.square,
      thumb: s.thumb,
      track: s.track,
    }

    const sliderValue = value || defaultValue

    return (
      <div className={classNames.container}>
        <span className={classNames.startSquare}>{sliderValue?.[0]}</span>
        <SliderPrimitive.Slider value={value} {...rest} className={classNames.slider} ref={ref}>
          <SliderPrimitive.Track className={classNames.track}>
            <SliderPrimitive.Range className={classNames.range} />
          </SliderPrimitive.Track>
          {sliderValue?.map((_, i) => (
            <SliderPrimitive.Thumb className={classNames.thumb} key={i} />
          ))}
        </SliderPrimitive.Slider>
        <span className={classNames.endSquare}>{sliderValue?.[1]}</span>
      </div>
    )
  }
)
