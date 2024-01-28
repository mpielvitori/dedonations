const   HDWalletProvider = require('truffle-hdwallet-provider');
const   Web3 = require('web3');
const   {abi, bytecode } = require('./compile');

const   mnemonic =  //'creo que aqui iria la wallet vottun la semilla';
const   provider = new HDWalletProvider(mnemonic, // faltan los nodos) //' acceso a todas las addres

const   web3 = new Web3(provider);

const   deploy = async () =>
{
    const   accounts = await web3.eth.getAccounts();

    const   argumentsConstructor = [
        /* ejemplo de los valores
        "DeDonations",
        "DeDo",
        18,
        21000000 */
    ]
    const   result = await new web3.eth.Contract(abi)
        .deploy({ Data: bytecode, arguments: argumentsConstructor})
        .send({ gas: gasEstimate, from: accounts[0]})//permite firmaar la transaccion
}