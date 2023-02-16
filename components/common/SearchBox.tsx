import React, { useEffect, useState } from "react";
import { useCustomSelector } from "@/hooks";
//components
import { EmptyFav } from "./EmptyFav";
import { ListFav } from "./ListFav";
import { SearchInput } from "./SearchInput";

interface Props {
  visible: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBox = ({ visible, close }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const { favCities } = useCustomSelector((state: any) => state.cityDetail)
  return mounted ? (
    <>
      <div className={`modal ${visible ? 'active' : ''}`} onClick={() => close(!visible)} />
      <div className={`search_box ${visible ? 'active' : ''}`}>
        <SearchInput visible={visible} close={close} />
        {favCities && favCities.length ? <ListFav /> : <EmptyFav />}
      </div>
    </>
  ) : <div />
}
