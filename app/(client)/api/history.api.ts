import { HTTP_URL, request, response } from "./api";

export const getHistory = async () => {
  try {
    const Request = request("GET", true, null)
    const result = await response(`${HTTP_URL}/history`, Request)
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
export const saveHistory = async (txHash: string, time: number) => {
  try {
    const Request = request("POST", true, {
      txhash: txHash,
      time: time
    })
    const result = await response(`${HTTP_URL}/history`, Request)
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