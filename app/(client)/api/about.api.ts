import { HTTP_URL, request, response } from "./api";

export const getAbout = async () => {
  try {
    const Request = request("GET", false, null)
    const result = await response(`${HTTP_URL}/about`, Request)
    if (result === undefined) {
      console.error("Kiểm tra quyền thất bại, không có phản hồi");
      return undefined;
    }
    return result;
  }catch (error) {
    console.error("error get song")
    return undefined;
  }
}
