require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name radar situate coach just forum fortune giggle'; 
let testAccounts = [
"0xead11157e0134ade565870ce275f662cd7037b7135405ccd0ee3b9f98469ce66",
"0xe942d26bfd9b7d3e2e4d86126f538e9eb5ff97216fe2b40fbf578f3df20cd326",
"0xbfa62150c87027829f570806a7cb15a66dfe78660d6eead156a125ad82a54b2f",
"0xd601dad074c1f40f2b1df69ebd87451e9b28ae3572c53a1328eab2a6c09986b8",
"0x9c7427001a0c1a6522286f4405a292294dbe05727cd66aff8bbb02c1e9a36a93",
"0xf39a805bcbe4570fdcbd90900eecbe8aff8f977d6acd2d8fdacc2de13a069615",
"0x72b0f3f8e5a6568dbcccc6736e62d79f217fcad6299e4895e27ab3fefe4e7e89",
"0x992261744866544e1a267777b8dc33f5ac1a62f2055ce22339f9cb916f14ff5b",
"0x8bd862f1c790640a1544d40627aabf92a45ac4a66f9afc5e64d29f6a8a82b60d",
"0xafe1a1f4ce9b5d14cafd95c12de21db8aa0b461908c42355d6a8b2e471e1650f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

