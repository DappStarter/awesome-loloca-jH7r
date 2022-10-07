require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note random unique hunt brand equal genre'; 
let testAccounts = [
"0xb60aa76502274918b45083df8dca54acef733b405a42b1937574ec3c4cd9cfbb",
"0xe77329f4558f65f5242687b7a9fa476b275c337f82bdfa25a3ab3d5a91e0746b",
"0xdb0a82fce1a5c8ea164ef2d2c44f0df71c3134f7cdfd2d98021c00438444a99a",
"0x3811a356feee1c74f7e15ad4aa0c7faa1a4c5c50b2f1d449d36d3b3885f491ba",
"0xf4c970a2ef9c8c693c5297b2187772f3d2bf20ce55f82ddca20b098b5a0e75c9",
"0x53939669027a578e21a68a7018e3196869b2427a69f80eb85b8f887963939dcf",
"0x196134b142b66cbc83bdc888ea6d5e56163d73221870f8c7d6d095d4a0358db8",
"0x4dfb3dc9e8b230a74818a83ce90d018296a211fe27e4fc1cb3ac072cad06386a",
"0x61bd842c865c7d6861cf8eb66baec29abd73a609daf75e5a15469ec203747afa",
"0xac2a7bb9574d620fc7c26fd7013accbf93d8c15d6c9c9c7cf0d1b0e7c9e98cd9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


