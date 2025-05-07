"use client";

import { useEffect, useState } from "react";
import { getTopic } from "../../api/topic.api";
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { useAuth } from "../../context/AuthContext";
import { useSearchParams } from "next/navigation";
import Pagination from "../../components/pagination/pagination";
import Loading from "../../components/loading/loading";

export default function Section_1() {
  const { auth } = useAuth()
  const [dataTopic, setDataTopic] = useState<any>(undefined)
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    const getData = async () => {
      const DataTopic = await getTopic(auth?.country_code || "US", page, 20);
      setDataTopic(DataTopic)
    }
    getData()
  }, [auth])
  if (!dataTopic) return <div><Loading/></div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Mục Bài Hát"}/>
        <CardList data={dataTopic.data} url="categories"/>
      </div>
      <Pagination currentPage={page} MaxPage={dataTopic.total_page} />
    </>
  )
}