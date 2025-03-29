"use client"

import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { getAlbum } from "../../api/album.api"
import Title from "../../components/Title/Title"
import CardList from "../../components/Card/CardList"
import { useSearchParams } from "next/navigation"
import Pagination from "../../components/pagination/pagination"
import Loading from "../../components/loading/loading"


export default function Section_1() {
  const { auth } = useAuth()
  const [data, setData] = useState<any>(undefined)
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    const getData = async () => {
      const Data = await getAlbum(page, 10);
      setData(Data)
    }
    getData()
  }, [auth])
  if (!data) return <div><Loading/></div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Album Bài Hát"}/>
        <CardList data={data.data} url="album"/>
      </div>
      <Pagination currentPage={page} MaxPage={data.total_page} />
    </>
  )
}