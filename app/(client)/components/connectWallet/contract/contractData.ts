export const contractAddr = "0x3b24f12244d2F48416CC2be35db331D6A3Eb5BCA";

export const contractABI = [
	{
		"inputs": [],
		"name": "NoAvailabelAmount",
		"type": "error"
	}, {
		"anonymous": false,
		"inputs": [{
			"indexed": true,
			"internalType": "address",
			"name": "funder",
			"type": "address"
		}, {
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}],
		"name": "Funded",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}, {
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}],
		"name": "Withdrawn",
		"type": "event"
	}, {
		"stateMutability": "payable",
		"type": "fallback"
	}, {
		"inputs": [],
		"name": "fund",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}, {
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "funders",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "getBalance",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "i_owner",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
			"internalType": "address",
			"name": "funder",
			"type": "address"
		}],
		"name": "isFunders",
		"outputs": [{
			"internalType": "bool",
			"name": "isFunded",
			"type": "bool"
		}, {
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"stateMutability": "payable",
		"type": "receive"
	}
]

