"use client"
import CardInfo from "@/app/(client)/components/Card/CardInfo";
import Section_2 from "./Section_2";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDetaiAlbum } from "@/app/(client)/api/album.api";
import Loading from "@/app/(client)/components/loading/loading";


export default function SongsByAlbumPage() {
  const { id } = useParams();
  const [data, setData] = useState<any>()
  useEffect(() => {
    const getData = async () => {
      const Data = await getDetaiAlbum(id as string);
      if(Data !== undefined) {
        setData(Data)
      }
    }
    getData()
  },[data])
  if (!data) return <div><Loading/></div>
  return(
    <>
     <CardInfo 
      image={data.cover_url}
      title={data.title}
      desc={`singer: ${data.name} | release: ${data.release_year}`}
     />
     <Section_2 id={id as string}/>
     
    </>
  )
}