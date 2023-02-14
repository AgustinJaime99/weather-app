import { useCustomDispatch, useCustomSelector } from "@/hooks";
import AddFavIcon from "@/public/icons/AddFav";
import RemoveFavIcon from "@/public/icons/RemoveFav"
import { addCity, removeCity } from "@/slices/testSlice";
import React, { useEffect } from "react";

interface Props {
  city: CityFav
}


interface CityFav {
  id?: number;
  name?: string;
  maxTemp?: number;
  minTemp?: number;
}

export const Favorite = ({ city }: Props) => {
  const { favCities, lat, lon } = useCustomSelector((state) => state.cityDetail)
  const index = favCities.findIndex((item: any) => item.id === city.id)
  const dispatch = useCustomDispatch()

  console.log(favCities, lat, lon)
  const addToFav = (city: CityFav) => {
    const cityObj: CityFav = {
      id: city.id,
      name: city.name,
      maxTemp: city.maxTemp,
      minTemp: city.minTemp
    }
    dispatch(addCity(cityObj))
  }

  const removeToFav = (id: number) => {
    dispatch(removeCity(id))
  }

  useEffect(() => { }, [dispatch])


  return (
    <>
      {
        index >= 0 ? <RemoveFavIcon onClick={() => removeToFav(city.id)} /> : <AddFavIcon onClick={() => addToFav(city)} />
      }
    </>
  )
}
