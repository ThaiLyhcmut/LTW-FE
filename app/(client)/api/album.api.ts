import { request, response } from "./api";

export const getAlbum = async (singer_id: number, page: number | null, limit: number | null) => {
  try {
    const Request = request("POST", false, {
      singer_id: singer_id
    })
    const result = await response(`https://ltw-be.thaily.id.vn/album/data?page=${page}&limit=${limit}`, Request)
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