"use client";

import { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { useAuth } from "../../context/AuthContext";
import { getSinger } from "../../api/singer.api"
import { useSearchParams } from "next/navigation";
import Pagination from "../../components/pagination/pagination";
import Loading from "../../components/loading/loading";

export default function Section_1() {
  const { auth } = useAuth()
  const [ data, setData ] = useState<any>()
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    const getData = async () => {
      const Data = await getSinger(auth?.country_code || "US", page, 20);
      setData(Data)
    }
    getData()
  }, [auth])  
  if(!data) return <div><Loading/></div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Sách Ca Sĩ"}/>
        <CardList data={data.data} url="singer"/>
      </div>
      <Pagination currentPage={page} MaxPage={data.total_page} />
    </>
  )
}