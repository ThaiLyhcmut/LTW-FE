"use client";
import { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { useAuth } from "../../context/AuthContext";
import { getAlbum } from "../../api/album.api";


export default function Section_4() {
  const { auth } = useAuth()
  const [dataAlbum, setDataAlbum] = useState<any>(undefined)
  useEffect(() => {
    const getData = async () => {
      const DataAlbum = await getAlbum(1, 1, 10);
      setDataAlbum(DataAlbum)
    }
    getData()
  }, [auth])
  return (
    <>
      {!dataAlbum?.data?.length ? (
        <div>Loading...</div>
      ) :(
        <div className="mt-[30px]">
          <Title text={"Album Nổi Bật"} />
          <CardList data={dataAlbum.data} url="album" />
        </div>
      )}
        
    </>
  )
}