const   path = require('path');
const   fs =  require('fs');
const   solc = require('solc');

const   DeDonationsPath = path.join(__dirname, '../DeDonations.sol');
const   code = fs.readFileSync(DeDonationsPath, 'utf8');

const   imput =
{
    language : 'Solidity';
    sources :
    {
        'DeDonations.sol':
        {
            content : code
        }
    }
    settings : 
    {
        outputSelection: 
        {
            '*':
            {
                '*': ['*']
            }
        }
    }
};

 const  output = JSON.parse(solc.compile(JSON.stringify(imput)));

console.log(output)

 module.exports = 
 {
    abi: output.contracts['DeDonations.sol'].DeDonations.abi,
    bytecode: output.contracts['DeDonations.sol'].DeDonations.evm.bytecode.object
 }