import { request, response } from "./api";

export const getSingerSong = async (singer_id: number, page: number, limit: number) => {
  try {
    const Request = request("GET", false, {
      "singer_id": singer_id,
      "page": page,
      "limit": limit
    })
    const result = await response("https://ltw-be.thaily.id/song", Request)
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

export const getAlbumSong = async(album_id: number, page: number, limit: number) => {
  try {
    const Request = request("GET", false, {
      "album_id": album_id,
      "page": page,
      "limit": limit
    })
    const result = await response("https://ltw-be.thaily.id/song", Request)
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

export const getTopicSong = async (topic_id: number, page: number | null, limit: number | null) => {
  try {
    const Request = request("POST", false, {
      topic_id: topic_id
    })
    const result = await response(`https://ltw-be.thaily.id.vn/song/data?page=${page}&limit=${limit}`, Request)
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