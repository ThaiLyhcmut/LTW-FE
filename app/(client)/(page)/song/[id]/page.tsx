"use client"
import { useParams } from "next/navigation"; 
import { getDetailSong } from "@/app/(client)/api/song.api";
import CardInfo from "@/app/(client)/components/Card/CardInfo";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import { useEffect, useState } from "react";

export default function SongDetailPage() {
  const { id } = useParams(); // Lấy params từ URL
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchData = async () => {
      const result = await getDetailSong(id as string);
      if(result !== undefined) {
        setData(result);
      }
    };
    fetchData();
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <CardInfo image={data.cover_url} title={data.title} desc={""} />
      <Section_2 lyric={data.lyric} />
      <Section_3 id={id as string} />
    </>
  );
}