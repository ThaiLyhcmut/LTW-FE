"use client"

import { logoutAuth } from "@/app/(client)/api/auth.api"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LogoutPage() {
  const Navigation = useRouter()
  useEffect(() => {
    const logout = logoutAuth()
    if (logout) {
      Navigation.push("/login")
    }
  })
  return(
    <>
      Dang Dang Xuat
    </>
  )
}