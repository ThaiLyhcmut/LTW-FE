import { HTTP_URL, request, response } from "./api";

export const getPost = async (page: number | null, limit: number | null) => {
  try {
    const Request = request("GET", false, null)
    const result = await response(`${HTTP_URL}/post/data?page=${page}&limit=${limit}`, Request)
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

export const getDetailPost = async (id: string) => {
  try {
    const Request = request("GET", false, null)
    const result = await response(`${HTTP_URL}/post/detail?id=${id}`, Request)
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