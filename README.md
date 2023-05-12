# MDSwapScrypto



### Installation of Rust and Scrypto : 

   [Install the Scrypto Toolchain :: Radix Documentation (radixdlt.com)](https://docs-babylon.radixdlt.com/main/scrypto/toolchain/install-scrypto.html)


### Install wallet app and extension of browser

  [Radix Wallet Installation and Usage :: Radix Documentation (radixdlt.com)](https://docs-babylon.radixdlt.com/main/getting-started-developers/wallet/wallet-and-connecter-installation.html)
	
  #### Apply for tester to get android app of radix wallet
  
  [android wallet - temporary form (typeform.com)](https://radixdlt.typeform.com/to/I5GMUSF2?typeform-source=www.google.com)


## How to Run FrontEnd
```

>> git clone https://github.com/MD-RanaHardik/MDSwapScrypto.git

>> cd MDSwapFrontEnd
	
>> npm i
	
>> npm run dev

```

> Connect wallet and link with mobile app and approve transaction from mobile app
	
> To swap coins first you need CoinA and CoinB


## How to Run BackEnd

### Building the Scrypto code

1. Enter the scrypto directory in a terminal: cd MDSwapBackEnd
2. Build the code: scrypto build
3. Two important files (MDSwapScrypto.schema and MDSwapScrypto.wasm) will be generated in MDSwapBackEnd/target/wasm32-unknown-unknown/release/. You will need them for the next step.

### Deploy the package to RCnet

1. Go to the [RCnet Dashboard Website](https://rcnet-dashboard.radixdlt.com/)
2. Connect the Wallet Via the Connect Button
3. Navigate to Deploy Package & choose an account and badge or have one created for you if you don't have one yet using the link below. (Which appears once you have selected an account)
4. Upload both MDSwapScrypto.schema and MDSwapScrypto.wasm
5. Click on "publish package"
6. The wallet should open up and ask you to approve the transaction
7. On the wallet click on "sign transaction"
8. The deployed package address should get displayed. You will need it for the next step.
