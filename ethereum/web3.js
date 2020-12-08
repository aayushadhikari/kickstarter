import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // in the browser with metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //on the server or user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/e16f532b14614258a53dee02fd6d82ac"
  );

  web3 = new Web3(provider);
}

export default web3;
