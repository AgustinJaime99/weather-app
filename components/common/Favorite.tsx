import { useCustomDispatch, useCustomSelector } from "@/hooks";
import AddFavIcon from "@/public/icons/AddFav";
import RemoveFavIcon from "@/public/icons/RemoveFav"
import { addCity, removeCity } from "@/redux/store/slices/citySlice";
import React, { useEffect } from "react";

interface Props {
  city: CityFav
}


interface CityFav {
  id: number;
  name?: string;
  maxTemp?: number;
  minTemp?: number;
}

export const Favorite = ({ city }: Props) => {
  const { favCities } = useCustomSelector((state) => state.cityDetail)
  console.log(favCities)
  let index = favCities?.findIndex((item: any) => item.id === city.id)

  const dispatch = useCustomDispatch()

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
