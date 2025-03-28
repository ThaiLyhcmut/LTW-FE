"use client"
import FormButton from "../../../components/form/FormButton";
import FormInput from "../../../components/form/FormInput";
import Title from "../../../components/Title/Title";
import { useRouter } from "next/navigation";
import { checkAuth, otpAuth, registerAuth } from "@/app/(client)/api/auth.api";
import { useAuth } from "@/app/(client)/context/AuthContext";

export default function RegisterPage() {
  const { login } = useAuth()
  const Navigation = useRouter()
  const handleGetOtp = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const check = await otpAuth(email)
    if (check != undefined) {
      alert("gui otp thanh cong")
    }else {
      alert("gui otp khong thanh cong")
    }
  }
  const handleRegister = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const fullName = event.target.fullName.value;
    const password = event.target.password.value;
    const otp = event.target.otp.value;
    const register = await registerAuth(fullName, email, password, otp)
    if (register == undefined) {
      alert("Đăng ký không thành công")
    }else {
      alert("Dang Ky Thanh Cong")
      const data = await checkAuth()
      login(data)
      Navigation.push("/")
    }
  }
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="text-center">
          <Title
            text="Đăng Ký Tài Khoản" 
          />
        </div>
        <form className="" onSubmit={handleRegister}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <button
            type="button"
            className="w-full h-[50px] bg-[#00ADEF] rounded-[6px] text-white text-center text-[16px] font-[700] mb-[20px]"
            onClick={handleGetOtp}
          >
            GET OTP
          </button>
          <FormInput
            label="Họ Tên"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Ví dụ: Le Van A"
            required={true}
          />
          <FormInput
            label="Mật Khẩu"
            type="password"
            name="password"
            id="password"
            required={true}
          />
          <FormInput
            label="OTP"
            type="otp"
            name="otp"
            id="otp"
            required={true}
          />
          <FormButton text="Đăng Ký" />
            

        </form>
      </div>
    </>
  );
}