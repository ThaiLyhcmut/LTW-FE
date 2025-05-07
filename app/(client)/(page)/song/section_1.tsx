"use client";

import { getSong } from "@/app/(client)/api/song.api";
import SongList_2 from "@/app/(client)/components/song/SongList_2";
import Title from "@/app/(client)/components/Title/Title";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/pagination";
import Loading from "../../components/loading/loading";

export default function Section_1(){
  const [data, setData] = useState<any>();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    const getData = async () => {
      const Data = await getSong(page,1);
      if (Data !== undefined) {
        setData(Data);
      }
    }
    getData()
  }, [page])
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