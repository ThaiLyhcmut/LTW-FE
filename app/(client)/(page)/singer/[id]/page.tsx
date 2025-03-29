"use client";

import CardInfo from "@/app/(client)/components/Card/CardInfo";
import Section_2 from "./Section_2";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDetailSinger } from "@/app/(client)/api/singer.api";
import Loading from "@/app/(client)/components/loading/loading";

export default function SingerDetailPage() {
  const { id } = useParams()
  const [ data, setData ] = useState<any>();
  useEffect(() => {
    const getData = async() => {
      const Data = await getDetailSinger(id as string)
      console.log(Data)
      setData(Data)
    }
    getData()
  }, [id])
  if(!data) return <div><Loading/></div>
  return(
    <>
      <CardInfo 
      image={data.avatar_url}
      title={data.name}
      desc={`country: ${data.country_code}`}
     />
     <Section_2 singer_id = {id as string} name={data.name}/>
    </>
  )
}