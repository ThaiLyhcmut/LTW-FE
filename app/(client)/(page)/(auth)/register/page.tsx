"use client"
import FormButton from "../../../components/form/FormButton";
import FormInput from "../../../components/form/FormInput";
import Title from "../../../components/Title/Title";
import { useRouter } from "next/navigation";
import { checkAuth, otpAuth, registerAuth } from "@/app/(client)/api/auth.api";
import { useAuth } from "@/app/(client)/context/AuthContext";

export default function RegisterPage() {
  const { login } = useAuth();
  const Navigation = useRouter();
  const handleGetOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailInput = event.currentTarget.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput?.value;
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }
    const check = await otpAuth(email);
    if (check) {
      alert("Gửi OTP thành công");
    } else {
      alert("Gửi OTP không thành công");
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fullName = (form.elements.namedItem("username") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const otp = (form.elements.namedItem("otp") as HTMLInputElement).value;
    const country_code = (form.elements.namedItem("country_code") as HTMLInputElement).value;
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) {
      alert("Vui lòng them Avatar");
      return;
    }
    // Get email from the OTP form or a shared state if needed
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const email = emailInput?.value;
    if (!email) {
      alert("Vui lòng nhập email và lấy OTP trước");
      return;
    }
    const register = await registerAuth(fullName, email, password, otp, country_code, file);
    if (!register) {
      alert("Đăng ký không thành công");
    } else {
      alert("Đăng ký thành công");
      const data = await checkAuth();
      login(data);
      Navigation.push("/");
    }
  };

  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <div className="text-center">
          <Title text="Đăng Ký Tài Khoản" />
        </div>
        <form onSubmit={handleGetOtp}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <button
            type="submit"
            className="w-full h-[50px] bg-[#00ADEF] rounded-[6px] text-white text-center text-[16px] font-[700] mb-[20px] cursor-pointer"
          >
            GET OTP
          </button>
        </form>
        <form className="" onSubmit={handleRegister}>
          <FormInput
            label="Họ Tên"
            type="text"
            name="username"
            id="username"
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
            type="text"
            name="otp"
            id="otp"
            required={true}
          />

          <FormInput
            label="Country"
            type="text"
            name="country_code"
            id="country_code"
            placeholder="VD: VN"
            required={true}
          />

          <input
            type="file"
            name="file"
            id="file"
            required={true}
            className="cursor-pointer my-[20px]"
          />
          <FormButton text="Đăng Ký" />
        </form>
      </div>
    </>
  );
}