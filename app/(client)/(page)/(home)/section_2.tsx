"use client"
import CardList from "../../components/Card/CardList";
import Title from "../../components/Title/Title";
import { getTopic } from "../../api/topic.api";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";

export default function Section_2() {
  const { auth } = useAuth()
  const [dataTopic, setDataTopic] = useState<any>(undefined)
  useEffect(() => {
    const getData = async () => {
      const DataTopic = await getTopic(auth?.country_code || "US", 1, 10);
      setDataTopic(DataTopic)
    }
    getData()
  }, [auth])


  return (
    <>
      {!dataTopic?.data?.length ? (
        <div><Loading/></div>
      ) : (
        <div className="mt-[30px]">
          <Title text={"Danh Mục Nổi Bật"} />
          <CardList data={dataTopic.data} url="categories" />
        </div>
      )}


    </>
  )
}