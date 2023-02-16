import React, { useEffect, useState } from "react";
//Redux & hooks
import { formatTemperature } from "@/utils/formatTemperature";
import { changeNameCity } from "@/redux/store/slices/citySlice";
import { useCustomDispatch, useCustomSelector } from "@/hooks"

import LocationIcon from "@/public/icons/Location";

interface City {
  name: string;
  id: number;
  maxTemp: number;
  minTemp: number;
}

export const ListFav = () => {
  const [name, setName] = useState<string>('')
  const dispatch = useCustomDispatch()
  const { favCities } = useCustomSelector((state: any) => state.cityDetail)
  const handleSelectName = (name: string) => {
    setName(name)
  }
  useEffect(() => {
    if (name !== '') {
      dispatch(changeNameCity(name))
    }
  }, [dispatch, name])


  return (
    <ul className="fav_list">
      {favCities?.map((city: City) =>
        <li key={city.id} onClick={(e) => handleSelectName(city.name)}>
          <div className="name">
            <LocationIcon fill='#444E72' />
            <p>{city.name}</p>
          </div>
          <div>
            <p className="temp_text">{formatTemperature(city.maxTemp)}º / {formatTemperature(city.minTemp)}º</p>
          </div>
        </li>
      )}
    </ul>
  )
}

