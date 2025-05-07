"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPost } from "../../api/post.api";
import Pagination from "../../components/pagination/pagination";
import { useSearchParams } from "next/navigation";
import Loading from "../../components/loading/loading";

const posts = [
  {
    id: 1,
    img: "https://inanaz.com.vn/wp-content/uploads/2020/02/mau-poster-ca-nhac-5.jpg",
    title: "Sự kiện âm nhạc 2025",
    desc: "Hội nghị âm nhạc lớn nhất năm với sự góp mặt của nhiều nghệ sĩ hàng đầu.",
  },
  {
    id: 2,
    img: "https://inanaz.com.vn/wp-content/uploads/2020/02/mau-poster-ca-nhac-7.jpg",
    title: "Sự kiện âm nhạc 2026",
    desc: "Hội nghị âm nhạc lớn nhất năm với sự góp mặt của nhiều nghệ sĩ hàng đầu.",
  },
  {
    id: 3,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-club-party-ads-design-template-0420c2c55af72d97f408fc321085732b_screen.jpg?ts=1662367893",
    title: "Sự kiện âm nhạc 2027",
    desc: "Hội nghị âm nhạc lớn nhất năm với sự góp mặt của nhiều nghệ sĩ hàng đầu.",
  },
];

const EventPosts = () => {
  const [post, setPost] = useState<any>()
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    const getData = async () => {
      const data = await getPost(page, 10)
      setPost(data)
    }
    getData()
  }, [])
  if (!post) return <div><Loading/></div>
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Sự Kiện Nổi Bật</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <motion.div key={post.id} whileHover={{ scale: 1.05 }}>
              <Link href={`/event/${post.id}`} className="block">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer">
                  <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.desc}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Pagination currentPage={page} MaxPage={post.total_page} />
    </>

  );
};

export default EventPosts;
