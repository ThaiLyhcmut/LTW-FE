"use client"
import { loginAuth } from "@/app/(client)/api/auth.api";
import FormButton from "../../../components/form/FormButton";
import FormInput from "../../../components/form/FormInput";
import Title from "../../../components/Title/Title";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const Navigation = useRouter()
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const login = async (email: string, password: string) => {
      const result = await loginAuth(email, password)
      if (result !== undefined) {
        alert("Dang nhap thanh cong")
        Navigation.push("/")
      }
      else {
        alert("dang nhap khong chinh xac")
      }
    }
    login(email, password)
  }
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="text-center">
          <Title
            text="Đăng Nhập Tài Khoản" 
          />
        </div>
        <form className="" onSubmit={handleLogin}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Mật Khẩu"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormButton text="Đăng Nhập" />
        </form>
      </div>
    </>
  );
}