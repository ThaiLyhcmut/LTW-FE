import { ISongItem_2 } from "./SongInterface";
import SongItem_2 from "./SongItem_2";

export default function SongList_2(props: {
  data: any[]
}){
  const { data } = props
  return(
    <>
      <div className="grid grid-cols-1 gap-[10px]" song-list="">
        {data.map((item,index) => (
          <SongItem_2
            id={item.id}
            key={index}
            image={item.cover_url}
            title={item.title}
            singer={item.name}
            time={item.time}
            audio={item.file_url}
            wishlist={item.wishlist}
          />
        ))}
        
      </div>
    </>
  )
}