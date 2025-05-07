"use client"

import { useAppKitProvider } from "@reown/appkit/react";
import { formatEther } from "ethers";
import { BrowserProvider } from "ethers";
import { useEffect, useState } from "react";
import { getHistory } from "../../api/history.api";
import { TransactionResponse } from "ethers";
import Loading from "../../components/loading/loading";


export default function historyPage() {
  const { walletProvider }: any = useAppKitProvider('eip155')
  const [history, setHistory] = useState<any[]>([]);
  useEffect(() => {
    try {
      console.log(walletProvider)
      if (walletProvider) {
        const fecthData = async () => {
          const ethersProvider = new BrowserProvider(walletProvider)
          const data: any[] = await getHistory()
          const listEvent = [];
          for (let item of data) {
            const tx: TransactionResponse | null = await ethersProvider.getTransaction(item.txhash);
            if (tx != null) {
              const eventObj = {
                id: item.id,
                blockNumber: tx.blockNumber,
                txHash: item.txhash,
                value: formatEther(tx.value)
              }
              listEvent.push(eventObj)
            }
          }
          listEvent.reverse()
          setHistory(listEvent)
        }
        fecthData()

      }
    } catch (error) {
      alert("error buy Vip MusicThaiLy Plase Contacting Us to help")
    }
  }, [walletProvider])
  if (history.length == 0) return <div><Loading /></div>
  return (
    <div className="p-6 rounded-lg shadow-lg mt-[80px] bg-gray-500">
      <h2 className="text-2xl font-bold mb-4 text-center text-amber-100">Transaction History</h2>
      {history.map((item, index) => (
        <div key={index} className="bg-[#212121] p-4 mb-4 rounded-lg shadow-md border border-gray-50">
          <p className="text-white"><strong>ID:</strong> {item.id}</p>
          <p className="text-white"><strong>Block:</strong> {item.blockNumber}</p>
          <p className="text-white"><strong>Transaction:</strong>
            <a href={`https://sepolia.etherscan.io/tx/${item.txHash}`} target="_blank" className="text-sky-200 hover:underline">
              {item.txHash}
            </a>
          </p>
          <p className="text-green-600 font-semibold"><strong>Value:</strong> {item.value} ETH</p>
        </div>
      ))}
    </div>
  )
}