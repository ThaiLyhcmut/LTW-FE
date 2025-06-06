import Link from "next/link";
import { motion } from "framer-motion";
export default function CardItem(props: any) {
  const { id = "", image = "", title = "", link = "", desc = "" } = props;
  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }}>
      <div className="">
        <Link href={link}>
          <div className="w-full aspect-square rounded-[15px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] my-[10px] line-clamp-1">
            {title}
          </div>
          <div className="text-[#FFFFFF80]l ine-clamp-1 text-[12px] line-clamp-1">
            {desc}
          </div>
        </Link>
      </div>
      </motion.div>
    </>
  );
}
