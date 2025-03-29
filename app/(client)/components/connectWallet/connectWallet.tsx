'use client'

import { createAppKit, useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia } from '@reown/appkit/networks'
import { shortenEthereumAddress } from './lib/utils' 
import { contractAddresses } from './lib/contracts/contractData' 
import { GoLinkExternal } from 'react-icons/go'

// 1. Get projectId at https://cloud.reown.com
const projectId = 'd95bd93a4380fce4958e677a463f5ff6'

// 2. Create a metadata object
const metadata = {
  name: 'web3',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [sepolia],
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function ConnectWallet() {
    const { open, close } = useAppKit()
    const { address, caipAddress, isConnected } = useAppKitAccount();
    const handleConnect = async () => {
        try {
            await open()
        } catch (error) {
            console.error(error)
        }
    }

    
    return (
			<button onClick={handleConnect} className='bg-sky-500 text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition-colors'>
				{isConnected?`${shortenEthereumAddress(address)}`:`Connect Wallet`}
			</button> 
    )
  }
  