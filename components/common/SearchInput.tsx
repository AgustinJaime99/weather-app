import React, { useEffect, useState } from 'react'
//redux & hooks
import { useGetWeatherByNameQuery } from '@/redux/services/getApi';
import { changeCoord, changeNameCity } from '@/redux/store/slices/citySlice';
import { useCustomDispatch, useCustomSelector } from '@/hooks';

import ArrowLeft from '@/public/icons/ArrowLeft';

interface InputField {
  search: string;
}

interface Props {
  visible: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchInput = ({ visible, close }: Props) => {
  const [dataForm, setDataForm] = useState<InputField>({ search: '' })
  const dispatch = useCustomDispatch()
  const [shouldSkip, setShouldSkip] = useState(true);
  const { mainCityName } = useCustomSelector((state: any) => state.cityDetail)
  const { data, isSuccess } = useGetWeatherByNameQuery(mainCityName, { skip: shouldSkip })

  useEffect(() => {
    if (mainCityName !== 'Melbourne') {
      setShouldSkip(false)
    }
    if (isSuccess) {
      dispatch(changeCoord({ lat: data[0]?.lat, lon: data[0]?.lon }))
    }
  }, [data, dispatch, mainCityName, isSuccess])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeNameCity(dataForm?.search))
    setDataForm({ search: '' })
    setShouldSkip(false)
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
