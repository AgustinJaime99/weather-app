import { useCustomDispatch } from '@/hooks';
import { useGetWeatherByNameQuery } from '@/services/getApi';
import { changeCoord } from '@/slices/testSlice';
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
  const [dataForm, setDataForm] = useState<InputField>({ search: '' })
  const [dataSend, setDataSend] = useState('')
  const { data, isSuccess } = useGetWeatherByNameQuery(dataSend)

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeCoord({ lat: data[0]?.lat, lon: data[0]?.lon }))
    }
  }, [data])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDataSend(dataForm?.search)
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
      <input className='input_search' placeholder='Search here' id='search' value={dataForm.search} onChange={(e) => handleChange(e)} />
    </form>

  )
}
