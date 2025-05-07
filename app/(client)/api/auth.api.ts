import { deleteToken, getToken, HTTP_URL, request, requestFormData, response, saveToken } from "./api";

export const loginAuth = async (email: string, password: string) => {
  try {
    const Request = request("POST", false, {
      email: email,
      password: password,
    });
    const result = await response(`${HTTP_URL}/login`, Request);
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
      const result = await response(`${HTTP_URL}/info`, Request);
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
    const result = await response(`${HTTP_URL}/otp`, Request)
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

export const registerAuth = async (username: string, email: string, password: string, otp: string, country_code: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('otp', otp);
    formData.append('country_code', country_code)
    formData.append('file', file)
    const Request = requestFormData(false, formData);
    const result = await response(`${HTTP_URL}/register`, Request);
    if (result == undefined) {
      console.error("error register");
      return undefined;
    }
    saveToken(result.token, result.country_code);
    return result;

  } catch (error) {
    console.error(error);
    return undefined;
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
