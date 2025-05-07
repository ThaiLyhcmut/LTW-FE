import SongItem from "./SongItem";

export default function SongList(props: {
  data: any[];
}) {
  const { data } = props;
  return(
    <>
      <div className="grid grid-rows-3 gap-[7px]" song-list="">
        {data.map((item,index) => (
          <SongItem 
            key={index}
            id={item.id}
            image={item.cover_url}
            title={item.title}
            singer={item.name}
            audio={item.file_url}
          />
        ))}
      </div>
    </>
  )
}