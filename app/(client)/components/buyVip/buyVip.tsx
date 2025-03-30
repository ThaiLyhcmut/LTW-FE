"use client";

import { useState } from "react";
import VIP from "./Vip";


export default function Buy() {
	const vip = [
		{
			text: "VIP1",
			desc: "goi 1 thang",
			discountPersent: 10,
			price: 0.025,
		},
		{
			text: "VIP2",
			desc: "goi 6 thang",
			discountPersent: 20,
			price: 0.15,
		},
		{
			text: "VIP3",
			desc: "goi 1 nam",
			discountPersent: 40,
			price: 0.3,
		},
		{
			text: "VIP4",
			desc: "goi 3 nam",
			discountPersent: 60,
			price: 0.9,
		}
	]
	const [isBuy, setIsBuy] = useState<boolean>();
	const handleBuyClick = () => {
		setIsBuy(true); // Khi bấm nút, mở modal
	};

	const handleClose = () => {
		setIsBuy(false); // Đóng modal
	};
	return (
		<>
			{!isBuy ? (
				<button onClick={handleBuyClick} className='bg-sky-500 text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition-colors'>
					BUY VIP
				</button>
			) : (
				<div className='inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black absolute z-[1000]'>
					<div className='bg-white p-6 rounded-lg shadow-lg w-[50%]'>
						<div className="flex justify-between items-center">
							<h2 className='text-lg font-bold mb-4'>Thanh Toán VIP</h2>
							<button onClick={handleClose} className='mt-4 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600'>
								Đóng
							</button>
						</div>
						
						<VIP data={vip} handleClose={handleClose}/>
						
					</div>
				</div>
			)}
		</>
	);
}