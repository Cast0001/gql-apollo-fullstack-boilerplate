import React from 'react'
import { useForm } from 'react-hook-form'

import Input from 'components/forms/Input/Input'

import s from './Calculator.scss'


const required = (value) => !value && 'Это поле обязательно'

const resolve = (resolvesShape, data) => {
  let errors = {}

  Object.keys(resolvesShape).forEach((name) => {
    const value = data[name]
    const resolvers = resolvesShape[name]

    if (value === undefined) {
      console.error(`Form field with name "${name}" not found!`)
      return
    }

    const error = resolvers
      .map((resolver) => resolver(value))
      .find(Boolean)

    if (error) {
      errors[name] = error
    }
  })

  return errors
}

const createResolver = (resolves) => (data) => ({
  values: data,
  errors: resolve(resolves, data),
})

const handleLogic = (values) => {
  const { salary, basePercentage, additionalPercentage, additionalFactor, months } = values

  const percent = (salary / 100)
  const myTotal = percent * (100 - basePercentage - additionalPercentage)
  const baseSave = percent * basePercentage * months * 74

  const additionalSave = Array(+months).fill(0).reduce((acc) => {
    const money = acc + (percent * additionalPercentage * 74)
    const per = money / 100
    return per * (additionalFactor / 12) + money
  }, 0)

  console.log('Средства в месяц', myTotal)
  console.log('Отложенно', Intl.NumberFormat('ru-RU').format(baseSave))
  console.log('Дополнительно отложено', Intl.NumberFormat('ru-RU').format(additionalSave))
}

const Calculator = () => {
  const { register, getValues, handleSubmit, errors } = useForm({
    resolver: createResolver({
      salary: [ required ],
      basePercentage: [ required ],
      additionalPercentage: [ required ],
      additionalFactor: [],
      months: [ required ],
    }),
  })

  return (
    <div>
      <form onSubmit={handleSubmit((values) => handleLogic(values))}>
        <div className={s.box}>
          <Input
            name="salary"
            type="number"
            ref={register}
            errors={errors}
            label="Бюджет на месяц"
            getValues={getValues}
          />
        </div>
        <div className={s.box}>
          <Input
            name="basePercentage"
            type="number"
            ref={register}
            errors={errors}
            label="% на покупки"
            getValues={getValues}
          />
        </div>
        <div className={s.box}>
          <Input
            name="additionalPercentage"
            type="number"
            ref={register}
            errors={errors}
            label="% на пенсию"
            getValues={getValues}
          />
        </div>
        <div className={s.box}>
          <Input
            name="additionalFactor"
            type="number"
            ref={register}
            errors={errors}
            label="% от влклада на пенсию"
            getValues={getValues}
          />
        </div>
        <div className={s.box}>
          <Input
            name="months"
            type="number"
            ref={register}
            errors={errors}
            label="Кол-во месяцев"
            getValues={getValues}
          />
        </div>
        <button>GO</button>
      </form>
      <div onClick={() => console.log('getValues', getValues('salary'))}>
        get
      </div>
    </div>
  )
}


export default Calculator
