import { deleteToken, getToken, request, response, saveToken } from "./api";

export const loginAuth = async (email: string, password: string) => {
  try {
    const Request = request("POST", false, {
      email: email,
      password: password,
    });
    const result = await response("https://ltw-be.thaily.id.vn/login", Request);
    if (result === undefined) {
      console.error("Đăng nhập thất bại, không có phản hồi");
      return undefined;
    }
    saveToken(result.token, result.country_code);
    return result;
  } catch (error) {
    console.error("Lỗi trong loginAuth:", error);
    return undefined;
  }
};

export const checkAuth = async () => {
  try {
    const token = getToken();
    if (token) {
      const Request = request("GET", true, null);  // Sử dụng null cho body rỗng
      const result = await response("https://ltw-be.thaily.id.vn/info", Request);
      if (result === undefined) {
        console.error("Kiểm tra quyền thất bại, không có phản hồi");
        return undefined;
      }
      return result;
    } else {
      console.log("Không tìm thấy token");
      return undefined;
    }
  } catch (error) {
    console.error("Lỗi trong checkAuth:", error);
    return undefined;
  }
};

export const otpAuth = async (email: string) => {
  try {
    const Request = request("POST", false, {
      email: email
    })
    const result = await response("https://ltw-be.thaily.id.vn/otp", Request)
    if (result == undefined) {
      console.error("error get otp")
      return undefined
    }
    return result
  }catch (error) {
    console.error(error);
    return undefined
  }
}

export const registerAuth = async (username: string, email: string, password: string, otp: string) => {
  try {
    const Request = request("POST", false, {
      username: username,
      email: email,
      password: password,
      otp: otp
    })
    const result = await response("https://ltw-be.thaily.id.vn/register", Request)
    if (result == undefined) {
      console.error("error register")
      return undefined
    }
    saveToken(result.token, result.country_code)
    return result;
  }catch (error) {
    console.error(error)
    return undefined
  }
}

export const logoutAuth = () => {
  try{
    deleteToken();
    return true
  }catch (error) {
    console.log(error)
    return false
  }
}
