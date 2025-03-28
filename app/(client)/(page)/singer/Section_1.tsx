"use client";

import { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { useAuth } from "../../context/AuthContext";
import { getSinger } from "../../api/singer.api"

export default function Section_1() {
  const { auth } = useAuth()
  const [ data, setData ] = useState<any>()
  useEffect(() => {
    const getData = async () => {
      const Data = await getSinger(auth?.country_code || "US", 1, 10);
      setData(Data)
    }
    getData()
  }, [auth])  
  if(!data) return <div>Loading...</div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Sách Ca Sĩ"}/>
        <CardList data={data.data} url="singer"/>
      </div>
    </>
  )
}