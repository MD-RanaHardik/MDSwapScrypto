

import {
  RadixDappToolkit,
  ManifestBuilder,
  Decimal,
  Bucket,
  Expression,
  Address
} from '@radixdlt/radix-dapp-toolkit'

const dAppId = 'account_tdx_c_1pyr8y7mma8zwywtrr6qwu39fcwamgcw5u6t6d48zenasxmmq64'


const rdt = RadixDappToolkit(
  { dAppDefinitionAddress: dAppId, dAppName: 'CoinVault' },
  (requestData) => {
    requestData({
      accounts: { quantifier: 'atLeast', quantity: 1 },
    }).map(({ data: { accounts } }) => {
      // add accounts to dApp application state
      console.log("account data: ", accounts)
      document.getElementById('accountName').innerText = accounts[0].label
      document.getElementById('accountAddress').innerText = accounts[0].address
      accountAddress = accounts[0].address
    })
  },
  {
    networkId: 12, // 12 is for RCnet 01 for Mainnet
    onDisconnect: () => {
      // clear your application state
    },
    onInit: ({ accounts }) => {
      // set your initial application state
      console.log("onInit accounts: ", accounts)
      if (accounts.length > 0) {
        document.getElementById('accountName').innerText = `Account Name : ${accounts[0].label}`
        document.getElementById('accountAddress').innerText = `Account Address : ${accounts[0].address}`
        accountAddress = accounts[0].address
      }
    },
  }
)
// console.log("dApp Toolkit: ", rdt)


// There are four classes exported in the Gateway-SDK These serve as a thin wrapper around the gateway API
// API docs are available @ https://betanet-gateway.redoc.ly/
// https://kisharnet-gateway.radixdlt.com/swagger/index.html
import { TransactionApi, StateApi, StatusApi, StreamApi, Configuration } from "@radixdlt/babylon-gateway-api-sdk";

// Instantiate Gateway SDK
const transactionApi = new TransactionApi()
const stateApi = new StateApi();
const statusApi = new StatusApi();
const streamApi = new StreamApi();

let accountAddress ;






document.getElementById('instantiateComponent').onclick = async function () {
  // let packageAddress = "package_tdx_c_1qqguv9gr6kpkxvn4amrjp2na6y0wyhzrl8saccfrgl2q5r4r8c"
  let packageAddress = "package_tdx_c_1qz5ws6d26ycncafvadvmtpyhc60mcfecycyjrq624u0stfwtda"
  
  

  let manifest = new ManifestBuilder()
    .callFunction(packageAddress, "CoinVault", "instantiate_coin", [])
    .callMethod(accountAddress, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
    .build()
    .toString();
  console.log("Instantiate Manifest: ", manifest)
  // Send manifest to extension for signing
  const result = await rdt
    .sendTransaction({
      transactionManifest: manifest,
      version: 1,
    })

  if (result.isErr()) throw result.error

  console.log("Intantiate WalletSDK Result: ", result.value)

  // ************ Fetch the transaction status from the Gateway API ************
  let status = await transactionApi.transactionStatus({
    transactionStatusRequest: {
      intent_hash_hex: result.value.transactionIntentHash
    }
  });
  console.log('Instantiate TransactionApi transaction/status:', status)

  // ************ Fetch component address from gateway api and set componentAddress variable **************
  let commitReceipt = await transactionApi.transactionCommittedDetails({
    transactionCommittedDetailsRequest: {
      intent_hash_hex: result.value.transactionIntentHash
    }
  })
  console.log('Instantiate Committed Details Receipt', commitReceipt)

  // ****** Set componentAddress variable with gateway api commitReciept payload ******
  componentAddress = commitReceipt.details.referenced_global_entities[0]
  document.getElementById('componentAddress').innerText = componentAddress;
  // ****** Set resourceAddress variable with gateway api commitReciept payload ******
  admin_badge = commitReceipt.details.referenced_global_entities[1]
  document.getElementById('gumAddress').innerText = admin_badge;

  console.log("first")
}






document.getElementById('getPriceA').onclick = async function () {
  let manifest = new ManifestBuilder()
    .callMethod("component_tdx_c_1qwzswnels02ze8mhtgumjvsc703kgz2ur7v56pwn30lqs5r7yg", "get_coina", [])
    .build()
    .toString()
  console.log("get price manifest", manifest)

  // Send manifest to extension for signing
  const result = await rdt
    .sendTransaction({
      transactionManifest: manifest,
      version: 1,
    })

  if (result.isErr()) throw result.error

  console.log("get_price sendTransaction Result: ", result)

  // Fetch the transaction status from the Gateway SDK
  let status = await transactionApi.transactionStatus({
    transactionStatusRequest: {
      intent_hash_hex: result.value.transactionIntentHash
    }
  });
  console.log('Get Price status', status)

  // fetch commit reciept from gateway api 
  let commitReceipt = await transactionApi.transactionCommittedDetails({
    transactionCommittedDetailsRequest: {
      intent_hash_hex: result.value.transactionIntentHash
    }
  })
  console.log('get price commitReceipt', commitReceipt)

  // Show the receipt on the DOM
  document.getElementById('priceA').innerText = `Price of coin A : : ${JSON.stringify(commitReceipt.details.receipt.output[1].data_json.value)}`;

}




document.getElementById('getPriceB').onclick = async function () {
  let manifest = new ManifestBuilder()
    .callMethod("component_tdx_c_1qwzswnels02ze8mhtgumjvsc703kgz2ur7v56pwn30lqs5r7yg", "get_coinb", [])
    .build()
    .toString()
  console.log("get price manifest", manifest)

  // Send manifest to extension for signing
  const result = await rdt
    .sendTransaction({
      transactionManifest: manifest,
      version: 1,
    })

  if (result.isErr()) throw result.error

  console.log("get_price sendTransaction Result: ", result)

  // Fetch the transaction status from the Gateway SDK
  let status = await transactionApi.transactionStatus({
    transactionStatusRequest: {
      intent_hash_hex: result.value.transactionIntentHash
    }
  });
  console.log('Get Price status', status)

  // fetch commit reciept from gateway api 
  let commitReceipt = await transactionApi.transactionCommittedDetails({
    transactionCommittedDetailsRequest: {
      intent_hash_hex: result.value.transactionIntentHash
    }
  })
  console.log('get price commitReceipt', commitReceipt)

  // Show the receipt on the DOM
  document.getElementById('priceB').innerText = `Price of coin B : : ${JSON.stringify(commitReceipt.details.receipt.output[1].data_json.value)}`;

}

