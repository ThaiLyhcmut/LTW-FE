"use client"; // Nếu đang dùng App Router trong Next.js 13+

import { useRouter } from "next/navigation";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export default function Pagination({ currentPage, MaxPage }: { currentPage: number; MaxPage: number }) {
  const router = useRouter();

  // Hàm điều hướng khi bấm vào trang
  const goToPage = (page: number) => {
    if (page >= 1 && page <= MaxPage) {
      router.push(`?page=${page}`);
    }
  };

  return (
    <div className="flex space-x-2 justify-center items-center mt-10">
      {currentPage !== 1 && (
				<>
					<button onClick={() => goToPage(currentPage - 1)} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl cursor-pointer">
						<GrFormPrevious/>
					</button>
					<button onClick={() => goToPage(1)} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl cursor-pointer">
						1
					</button>
				</>
				
      )}

      {currentPage > 3 && <span className="px-4 py-2 text-gray-500">...</span>}

      {currentPage > 2 && (
        <button onClick={() => goToPage(currentPage - 1)} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl cursor-pointer">
          {currentPage - 1}
        </button>
      )}

      <button className="px-4 py-2 bg-blue-800 text-white font-bold rounded-xl cursor-default">
        {currentPage}
      </button>

      {currentPage < MaxPage - 1 && (
        <button onClick={() => goToPage(currentPage + 1)} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl cursor-pointer">
          {currentPage + 1}
        </button>
      )}

      {currentPage < MaxPage - 2 && <span className="px-4 py-2 text-gray-500">...</span>}


      {MaxPage > 1 && currentPage !== MaxPage && (
				<>
					<button onClick={() => goToPage(MaxPage)} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl cursor-pointer">
						{MaxPage}
					</button>
					<button onClick={() => goToPage(currentPage +1)} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl cursor-pointer">
						<MdNavigateNext />
					</button>
				</>
        
      )}
    </div>
  );
}
