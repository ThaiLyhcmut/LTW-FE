import CardItem from "./CardItem";

export default function CardList(props: {
  data: any[]
  url: string
}) {
  const {data, url} = props
  return(
    <>
      <div className="grid sm:grid-cols-5 grid-cols-3 gap-[20px]">
        {data.map((item,index) => (
          <CardItem
            key={index}
            image={item.image_url || item.avatar_url || item.cover_url || "/default.png"}
            title={item.name || item.title}
            link={`${url}/${item.id}`}
            id={item.id}
            desc={ item.description?item.description:(item.release_year?`Release: ${item.release_year}`:"") }
          />
        ))}
      </div>
    </>
  )
}