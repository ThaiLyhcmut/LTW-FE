"use client"

import { checkAuth, logoutAuth } from "@/app/(client)/api/auth.api"
import { useAuth } from "@/app/(client)/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function InfoPage() {
  const router = useRouter()
  const { logout } = useAuth()
  const [ auth, setAuth ] = useState<any>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getInfo = async () => {
      const data = await checkAuth()
      if (data != undefined) {
        setAuth(data)
        setLoading(false)
      }
    }
    getInfo()
    
  }, [])
  console.log(auth)
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
    <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Thông tin người dùng</h2>
      {auth ? (
        <div>
          <p><strong>ID:</strong> {auth.id}</p>
          <p><strong>Name:</strong> {auth.name}</p>
          <p><strong>Email:</strong> {auth.email}</p>
          <p><strong>Image:</strong> <img src={auth.image} alt="Avatar" className="w-16 h-16 rounded-full mt-2" /></p>
          <p><strong>Date of Birth:</strong> {auth.dateOfBirth}</p>
          <p><strong>Country:</strong> {auth.country}</p>

          <button 
            onClick={handleLogout} 
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Đang đăng xuất..." : "Đăng xuất"}
          </button>
        </div>
      ) : (
        <p>Bạn chưa đăng nhập.</p>
      )}
    </div>
  )
}
