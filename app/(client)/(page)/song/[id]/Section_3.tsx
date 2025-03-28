"use client"
import { getSong } from "@/app/(client)/api/song.api";
import SongList_2 from "@/app/(client)/components/song/SongList_2";
import Title from "@/app/(client)/components/Title/Title";
import { useEffect, useState } from "react";
// import { getSongList } from "@/app/helper/getSong";

export default function Section_3(props: any){
  const { id } = props
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const Data = await getSong(1,10);
      if (Data !== undefined) {
        setData(Data);
      }
    }
    getData()
  }, [])
  if (!data) return <p>Loading...</p>;
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát"/>
        <SongList_2 data={data.data}/>
      </div>
    </>
  )
}