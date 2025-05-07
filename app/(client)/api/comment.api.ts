import { HTTP_URL, request, response } from "./api";

export const createComment = async (song_id: string, content: string) => {
  try {
    const Request = request("POST", true, {
      song_id: song_id,
      content: content
    })
    const result = await response(`${HTTP_URL}/comment`, Request)
    if (result === undefined) {
      console.error("Kiểm tra quyền thất bại, không có phản hồi");
      return undefined;
    }
    return result;
  } catch (error) {
    console.error("error getdetail comment")
    return undefined;
  }
}

export const getComment = async (song_id: string) => {
  try {
    const Request = request("POST", true, {
      song_id: song_id
    })
    const result = await response(`${HTTP_URL}/comment/data`, Request)
    if (result === undefined) {
      console.error("Kiểm tra quyền thất bại, không có phản hồi");
      return undefined;
    }
    return result;
  } catch (error) {
    console.error("error getdetail comment")
    return undefined;
  }
}
