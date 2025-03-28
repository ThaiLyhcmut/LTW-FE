import { HTTP_URL, request, response } from "./api";

export const getSingerSong = async (singer_id: string, page: number, limit: number) => {
  try {
    const Request = request("POST", false, {
      "singer_id": singer_id,
    })
    const result = await response(`${HTTP_URL}/song/data?page=${page}&limit=${limit}`, Request)
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

export const getAlbumSong = async(album_id: string, page: number, limit: number) => {
  try {
    const Request = request("POST", false, {
      "album_id": album_id
    })
    const result = await response(`${HTTP_URL}/song/data?page=${page}&limit=${limit}`, Request)
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

export const getTopicSong = async(topic_id: string, page: number, limit: number) => {
  try {
    const Request = request("POST", false, {
      "topic_id": topic_id
    })
    const result = await response(`${HTTP_URL}/song/data?page=${page}&limit=${limit}`, Request)
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

export const getSong = async (page: number | null, limit: number | null) => {
  try {
    const Request = request("POST", false, null)
    const result = await response(`${HTTP_URL}/song/data?page=${page}&limit=${limit}`, Request)
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

export const getDetailSong = async (id: string) => {
  try {
    const Request = request("GET", false, null)
    const result = await response(`${HTTP_URL}/song/detail?id=${id}`, Request)
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