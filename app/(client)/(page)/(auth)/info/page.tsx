"use client"

import { logoutAuth } from "@/app/(client)/api/auth.api"
import Loading from "@/app/(client)/components/loading/loading"
import { useAuth } from "@/app/(client)/context/AuthContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function InfoPage() {
  const router = useRouter()
  const { logout, auth } = useAuth()
  const [loading, setLoading] = useState(false)
  // Xử lý đăng xuất
  const handleLogout = async () => {
    setLoading(true)
    const success = await logoutAuth()
    if (success) {
      logout()
      router.push("/login")
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Thông tin người dùng</h2>
      {auth ? (
        <div>
          <div className="flex justify-center items-center">
          <img src={auth.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full mt-2" />
          </div>
          <p className="text-xl mb-[10px]"> <strong>ID:</strong>  {auth.id}</p>
          <p className="text-xl mb-[10px]"> <strong>Name:</strong>  {auth.username}</p>
          <p className="text-xl mb-[10px]"><strong>Email:</strong>  {auth.email}</p>
          <p className="text-xl mb-[10px]"><strong>Country:</strong>  {auth.country_code}</p>
          

          <button 
            onClick={handleLogout} 
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded cursor-pointer"
            disabled={loading}
          >
            {loading ? "Đang đăng xuất..." : "Đăng xuất"}
          </button>
        </div>
      ) : (
        <div><Loading/></div>
      )}
    </div>
  )
}
