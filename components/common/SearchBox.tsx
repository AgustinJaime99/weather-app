import React from "react";
import { SearchInput } from "./SearchInput";

interface Props {
  visible: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBox = ({ visible, close }: Props) => {
  return (
    <>
      <div className={`modal ${visible ? 'active' : ''}`} onClick={() => close(!visible)} />
      <div className={`search_box ${visible ? 'active' : ''}`}>
        <SearchInput visible={visible} close={close} />
      </div>
    </>
  )
}
