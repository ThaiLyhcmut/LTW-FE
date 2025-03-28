import { getTopicSong } from "../../api/song.api";
import BannerHome from "../../components/Banner/BannerHome";
// import SongList from "@/app/components/Song/SingList";
import Title from "../../components/Title/Title";
import SongList from "../song/SingList";
// import { dbFB } from "@/app/FirebaseConfig";
// import { onValue, ref } from "firebase/database";


// Onval mất 1 khoảng thời gian để lấy dâta thì phải sử dụng hamf Promise để lưu data lại
export default async function Section_1() {
  const DataSongList:any = await getTopicSong(1, 1, 3);
  return(
    <>
      <div className="flex items-start flex-wrap">
        <div className="xl:w-[534px] w-[full]">
          <BannerHome/>
          
        </div>
        <div className="xl:flex-1 xl:ml-[20px] ml-[0px]">
          <Title text={"Nghe Nhieu"}/>
          <SongList data={DataSongList.data}/>
        </div>
      </div>
    </>
  )
}