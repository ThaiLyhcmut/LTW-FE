import { request, response } from "./api";

export const getSinger = async (country_code: string, page: number | null, limit: number | null) => {
  try {
    const Request = request("POST", false, {
      country_code: country_code
    })
    const result = await response(`https://ltw-be.thaily.id.vn/singer/data?page=${page}&limit=${limit}`, Request)
    if (result === undefined) {
      console.error("Kiểm tra quyền thất bại, không có phản hồi");
      return undefined;
    }
    return result;
  } catch (error) {
    console.error("error get topic")
    return undefined;
  }
}