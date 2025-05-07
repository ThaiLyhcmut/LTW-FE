"use client";

import { getSong } from "@/app/(client)/api/song.api";
import Loading from "@/app/(client)/components/loading/loading";
import Pagination from "@/app/(client)/components/pagination/pagination";
import SongList_2 from "@/app/(client)/components/song/SongList_2";
import Title from "@/app/(client)/components/Title/Title";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { getSongList } from "@/app/helper/getSong";

export default function Section_3(props: any){
  const { id } = props
  const [data, setData] = useState<any>();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    const getData = async () => {
      const Data = await getSong(page,10);
      if (Data !== undefined) {
        setData(Data);
      }
    }
    getData()
  }, [])
  if (!data) return <div><Loading/></div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát"/>
        <SongList_2 data={data.data}/>
      </div>
      <Pagination currentPage={page} MaxPage={data.total_page} />
    </>
  )
}