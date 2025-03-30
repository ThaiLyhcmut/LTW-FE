import { HTTP_URL, request, response } from "./api";


export const getVips = async () => {
  try {
    const Request = request("GET", false, null)
    const result = await response(`${HTTP_URL}/vip`, Request)
    if (result === undefined) {
      console.error("Kiểm tra quyền thất bại, không có phản hồi");
      return undefined;
    }
    return result;
  }catch (error) {
    console.error("error getdetail song")
    return undefined;
  }
}