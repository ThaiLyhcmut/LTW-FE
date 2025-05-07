"use client";

import { getTopicSong } from "@/app/(client)/api/song.api";
import Loading from "@/app/(client)/components/loading/loading";
import SongList_2 from "@/app/(client)/components/song/SongList_2";
import Title from "@/app/(client)/components/Title/Title"; 
import { useEffect, useState } from "react";

export default function Section_2(props: {
  id: string
  name: string
}){
  const { id, name } = props
  const [data, setData] = useState<any>()
  useEffect(() => {
    const getData = async() => {
      const Data = await getTopicSong(id, 1, 10);
      if (Data !== undefined) {
        setData(Data)
      }
    }
    getData()
  }, [])
  if (!data) return <div><Loading/></div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={`Danh Sách Bài Hát Trong Topic ${name}`}/>
        <SongList_2 data={data.data}/>
      </div>
    </>
  )
}