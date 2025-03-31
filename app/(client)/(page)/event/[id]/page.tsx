"use client";

import { useParams } from "next/navigation";

const posts = [
  {
    id: 1,
    img: "https://inanaz.com.vn/wp-content/uploads/2020/02/mau-poster-ca-nhac-5.jpg",
    title: "Sự kiện âm nhạc 2025",
    desc: "Hội nghị âm nhạc lớn nhất năm với sự góp mặt của nhiều nghệ sĩ hàng đầu.",
    content: "Nội dung chi tiết về sự kiện âm nhạc 2025...",
  },
  {
    id: 2,
    img: "https://inanaz.com.vn/wp-content/uploads/2020/02/mau-poster-ca-nhac-7.jpg",
    title: "Sự kiện âm nhạc 2025",
    desc: "Hội nghị âm nhạc lớn nhất năm với sự góp mặt của nhiều nghệ sĩ hàng đầu.",
    content: "Nội dung chi tiết về sự kiện âm nhạc 2025...",
  },
  {
    id: 3,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-club-party-ads-design-template-0420c2c55af72d97f408fc321085732b_screen.jpg?ts=1662367893",
    title: "Sự kiện âm nhạc 2025",
    desc: "Hội nghị âm nhạc lớn nhất năm với sự góp mặt của nhiều nghệ sĩ hàng đầu.",
    content: "Nội dung chi tiết về sự kiện âm nhạc 2026...",
  },
];

export default function EventDetail() {
  const params = useParams();
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) return <h1 className="text-center text-2xl mt-10">Bài viết không tồn tại!</h1>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <img src={post.img} alt={post.title} className="w-full h-60 object-cover my-4 rounded-xl" />
      <p className="text-gray-600">{post.desc}</p>
      <div className="mt-4 text-lg">{post.content}</div>
    </div>
  );
}
