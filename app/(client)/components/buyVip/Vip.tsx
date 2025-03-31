"use client";

import { useAppKitProvider } from "@reown/appkit/react"
import { BrowserProvider, parseEther } from "ethers"
import { contractABI, contractAddr } from "../connectWallet/contract/contractData"
import { Contract } from "ethers"
import { useEffect, useState } from "react";
import LoadingSmall from "../loading/loadingSmall";
import { shortenEthereumAddress } from "../connectWallet/lib/utils";
import { TransactionResponse } from "ethers";
import Loading from "../loading/loading";
import { getVips } from "../../api/vip.api";
import { saveHistory } from "../../api/history.api";

export default function VIP({ handleClose }: { handleClose: () => void }) {
	const [ data, setData ] = useState<any[]>([])
	const { walletProvider }: any = useAppKitProvider('eip155')
	const [isLoading, setIsLoading] = useState<boolean>()
	const [txHash, setTxHash] = useState<string | null>(null)
	const handleBuyVIP = async (amount: number, time: number, event: any) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			if (walletProvider) {
				// getbalance
				const ethersProvider = new BrowserProvider(walletProvider)
				// const contractBalance = await ethersProvider.getBalance(contractAddr)
				// console.log(formatEther(contractBalance))
				const singer = await ethersProvider.getSigner()
				const contract = new Contract(contractAddr, contractABI, singer)
				const tx: TransactionResponse = await contract.fund({
					value: parseEther(String(amount))
				})
				const hash = tx.hash
				console.log(hash)
				setTxHash(hash)
				await tx.wait();

				const save = await saveHistory(tx.hash, time);
				if (save == undefined) {
					console.warn("Transaction hash could not be saved to the database.");
				}
				handleClose()
			}
		} catch (error) {
			alert("error buy Vip MusicThaiLy Plase Contacting Us to help")
		} finally {
			setIsLoading(false);
		}
	}
	useEffect(() => {
		const getData = async () => {
			const Data = await getVips();
			if (Data !== undefined) {
				setData(Data)
			}
		}
		getData()
	}, [])
	if (data.length < 0) return <div><Loading/></div>
	return (
		<>
			{
				isLoading && txHash && (
					<div className="flex justify-between items-center mb-[20px]">
						<span>Transaction: </span>
						<a target="_blank" href={`http://sepolia.etherscan.io/tx/${txHash}`} className="cursor-pointer hover:underline">
							{shortenEthereumAddress(txHash)}
						</a>
					</div>
				)
			}
			<div className="space-y-4">

				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
					>
						{/* Nút chọn VIP */}
						{(!isLoading) ? (
							<button type="button" onClick={(event) => {
								const amount = (item.price) * (100 - item.discountPercent) / 100
								handleBuyVIP(amount, item.time, event);
							}} className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors font-medium cursor-pointer">
								{item.text}
							</button>
						) : (
							<LoadingSmall />
						)}
						{/* Mô tả gói VIP */}
						<div className="text-gray-600 text-lg">{item.description}</div>

						{/* Giá tiền và giảm giá */}
						<div className="text-lg font-semibold">
							{/* Giá gốc (nếu có giảm giá) */}
							{item.discountPercent > 0 && (
								<span className="text-gray-400 line-through mr-2">
									{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "ETH" }).format(
										item.price
									)}
								</span>
							)}
							{/* Giá đã giảm */}
							<span className="text-red-500">
								{new Intl.NumberFormat("vi-VN", { minimumFractionDigits: 6, style: "currency", currency: "ETH" }).format(
									(item.price) * (100 - item.discountPercent) / 100
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
		</>

	);
}