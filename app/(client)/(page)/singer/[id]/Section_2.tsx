"use client";

import { getSingerSong } from "@/app/(client)/api/song.api";
import SongList_2 from "@/app/(client)/components/song/SongList_2";
import Title from "@/app/(client)/components/Title/Title";
import { useEffect, useState } from "react";

export default function Section_2(props: {
  singer_id: string,
  name: string
}){
  const { singer_id, name } = props;
  const [ data, setData ] = useState<any>()
  useEffect(() => {
    const getData = async() => {
      const Data = await getSingerSong(singer_id, 1, 10);
      setData(Data)
    }
    getData()
  }, [])
  if (!data) return <div>Loading...</div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={`Danh Sách Bài Hát Cua Singer ${name}`}/>
        <SongList_2 data={data.data}/>
      </div>
    </>
  )
}