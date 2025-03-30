"use client";

import { useAppKitProvider } from "@reown/appkit/react"
import { BrowserProvider, parseEther } from "ethers"
import { contractABI, contractAddr } from "../connectWallet/contract/contractData"
import { Contract } from "ethers"

export default function VIP({ data, handleClose  }: { data: any[], handleClose: () => void }) {
	const { walletProvider } : any = useAppKitProvider('eip155')

	const handleBuyVIP = async(amount: number, event: any) => {
		event.preventDefault();
		console.log(amount)
		if (walletProvider) {
			// getbalance
			const ethersProvider = new BrowserProvider(walletProvider)
			// const contractBalance = await ethersProvider.getBalance(contractAddr)
			// console.log(formatEther(contractBalance))
			const singer = await ethersProvider.getSigner()
			const contract = new Contract(contractAddr, contractABI, singer)
			const tx = await contract.fund({
				value: parseEther(String(amount))
			})
			console.log(tx);
			handleClose()
		}
	}

	return (
		<div className="space-y-4">
			{data.map((item, index) => (
				<div
					key={index}
					className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
				>
					{/* Nút chọn VIP */}
					<button type="button" onClick={(event) => {
						const amount = (item.price) * (100 - item.discountPersent) / 100
						handleBuyVIP(amount, event);
					}} className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors font-medium">
						{item.text}
					</button>

					{/* Mô tả gói VIP */}
					<div className="text-gray-600 text-lg">{item.desc}</div>

					{/* Giá tiền và giảm giá */}
					<div className="text-lg font-semibold">
						{/* Giá gốc (nếu có giảm giá) */}
						{item.discountPersent > 0 && (
							<span className="text-gray-400 line-through mr-2">
								{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "ETH" }).format(
									item.price
								)}
							</span>
						)}
						{/* Giá đã giảm */}
						<span className="text-red-500">
							{new Intl.NumberFormat("vi-VN", { minimumFractionDigits: 6,style: "currency", currency: "ETH" }).format(
								(item.price) * (100 - item.discountPersent) / 100
							)}
						</span>

						{/* Phần trăm giảm giá */}
						{item.discountPersent > 0 && (
							<span className="ml-2 bg-green-500 text-white px-2 py-1 text-sm rounded-md">
								-{item.discountPersent}%
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	);
}