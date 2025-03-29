"use client";
import { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { useAuth } from "../../context/AuthContext";
import { getSinger } from "../../api/singer.api";
import Loading from "../../components/loading/loading";


export default function Section_3() {
  const { auth } = useAuth()
  const [dataSinger, setDataSinger] = useState<any>(undefined)
  useEffect(() => {
    const getData = async () => {
      const DataTopic = await getSinger(auth?.country_code || "US", 1, 10);
      setDataSinger(DataTopic)
    }
    getData()
  }, [auth])
  return (
    <>
      {!dataSinger?.data?.length ? (
        <div><Loading/></div>
      ) :(
        <div className="mt-[30px]">
          <Title text={"Ca Sĩ Nổi Bật"} />
          <CardList data={dataSinger.data} url="singer" />
        </div>
      )}
        
    </>
  )
}