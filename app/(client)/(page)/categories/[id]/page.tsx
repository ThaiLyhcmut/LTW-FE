"use client"
import CardInfo from "@/app/(client)/components/Card/CardInfo";
import Section_2 from "./Section_2";
import { getDetaiTopic } from "@/app/(client)/api/topic.api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SongsByCategoriesPage() {
  const { id } = useParams();
  const [data, setData] = useState<any>()
  useEffect(() => {
    const getData = async () => {
      const Data = await getDetaiTopic(id as string);
      if(Data !== undefined) {
        setData(Data)
      }
    }
    getData()
  },[data])
  if (!data) return <div>Loading...</div>
  return(
    <>
     <CardInfo 
      image={data.image_url}
      title={data.name}
      desc={data.description}
     />
     <Section_2 id={id as string} name={data.name}/>
     
    </>
  )
}