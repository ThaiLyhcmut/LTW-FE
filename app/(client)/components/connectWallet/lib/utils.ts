export function shortenEthereumAddress(address: string | undefined): string | undefined {
    if (!address)
        return undefined
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}