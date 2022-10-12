var ContractABI =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_condition",
          "type": "string"
        }
      ],
      "name": "medRecordsUp",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getMedRecords",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_condition",
          "type": "string"
        }
      ],
      "name": "medRecords",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  var contractAddress = '0xB0C1bde8298C91f185F66332b415222785B192b5';
  


document.addEventListener('DOMContentLoaded', async() =>{
    if(typeof window.ethereum !== "undefined"){
        console.log("Metamask is installed")

        var accounts = await ethereum.request({method: 'eth_requestAccounts'})
        console.log(accounts);

        web3 = new Web3(window.ethereum);
        console.log("web3 is loaded", web3)
    } else{
        alert("install metamask immediately ")
    }
})