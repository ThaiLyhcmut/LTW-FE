"use client"
import { useEffect, useState } from "react";
import { getTopic } from "../../api/topic.api";
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { useAuth } from "../../context/AuthContext";

export default function Section_1() {
  const { auth } = useAuth()
  const [dataTopic, setDataTopic] = useState<any>(undefined)
  useEffect(() => {
    const getData = async () => {
      const DataTopic = await getTopic(auth?.country_code || "US", 1, 10);
      setDataTopic(DataTopic)
    }
    getData()
  }, [auth])
  if (!dataTopic) return <div>loading ...</div>
  return(
    <>
      <div className="mt-[30px]">
        <Title text={"Danh Mục Bài Hát"}/>
        <CardList data={dataTopic.data} url="categories"/>
      </div>
    </>
  )
}