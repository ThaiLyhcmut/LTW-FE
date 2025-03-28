"use client"

import { getAlbumSong } from "@/app/(client)/api/song.api";
import SongList_2 from "@/app/(client)/components/song/SongList_2";
import Title from "@/app/(client)/components/Title/Title"; 
import { useEffect, useState } from "react";

export default function Section_2(props: {
  id: string
}){
  const { id } = props
  const [data, setData] = useState<any>()
  useEffect(() => {
    const getData = async() => {

      console.log(id)
      const Data = await getAlbumSong(id, 1, 10);
      console.log(Data)
      if (Data !== undefined) {
        setData(Data)
      }
    }
    getData()
  }, [])
  if (!data) return <div>loading...</div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát"/>
        <SongList_2 data={data.data}/>
      </div>
    </>
  )
}