import { getSong } from "../../api/song.api";
import BannerHome from "../../components/Banner/BannerHome";
import Title from "../../components/Title/Title";
import SongList from "../../components/song/SingList";

export default async function Section_1() {
  const DataSongList:any = await getSong(1, 3);
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