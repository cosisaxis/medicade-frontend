document.addEventListener('DOMContentLoaded', async() =>{
    if(typeof window.ethereum !== "undefined"){
        console.log("Metamask is installed")

        var accounts = await ethereum.request({method: 'eth_requestAccounts'})
        console.log(accounts);
    } else{
        alert("install metamask immediately ")
    }
})