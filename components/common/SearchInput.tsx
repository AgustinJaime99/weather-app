import { useCustomDispatch, useCustomSelector } from '@/hooks';
import ArrowLeft from '@/public/icons/ArrowLeft';
import { useGetWeatherByNameQuery } from '@/redux/services/getApi';
import { changeCoord, changeNameCity } from '@/redux/store/slices/citySlice';
import React, { useEffect, useState } from 'react'

interface InputField {
  search: string;
}

interface Props {
  visible: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchInput = ({ visible, close }: Props) => {
  const dispatch = useCustomDispatch()
  const { mainCityName } = useCustomSelector((state) => state.cityDetail)
  const [dataForm, setDataForm] = useState<InputField>({ search: '' })
  const { data, isSuccess, isUninitialized } = useGetWeatherByNameQuery(mainCityName)

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeCoord({ lat: data[0]?.lat, lon: data[0]?.lon }))
    }
  }, [data, dispatch])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeNameCity(dataForm?.search))
    setDataForm({ search: '' })
    close(!visible)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [e?.currentTarget?.id]: e?.currentTarget?.value
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <ArrowLeft />
      <input className='input_search' placeholder='Search here' id='search' value={dataForm.search} onChange={(e) => handleChange(e)} />
    </form>

  )
}
