"use client"

import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { getAlbum } from "../../api/album.api"
import Title from "../../components/Title/Title"
import CardList from "../../components/Card/CardList"


export default function Section_1() {
  const { auth } = useAuth()
  const [data, setData] = useState<any>(undefined)
  useEffect(() => {
    const getData = async () => {
      const Data = await getAlbum(1, 10);
      setData(Data)
    }
    getData()
  }, [auth])
  if (!data) return <div>loading ...</div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Album Bài Hát"}/>
        <CardList data={data.data} url="album"/>
      </div>
    </>
  )
}