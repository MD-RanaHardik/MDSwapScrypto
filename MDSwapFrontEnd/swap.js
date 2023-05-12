import {
    RadixDappToolkit,
    ManifestBuilder,
    Decimal,
    Bucket,
    Expression,
    Address,

} from "@radixdlt/radix-dapp-toolkit";




const dAppId = "account_tdx_c_1pxys3se8j9paykh7yfqrzgma7778d9aspyuvkpezmjdsxly6kw";
const package_address = "package_tdx_c_1qrtew5t8ewucs9ezgm766cejt7sy03tsyw7r2rv5au3se96wwk";
const component_address = "component_tdx_c_1qwdt7hgc2gw6v63anzd4yl3hvequlx4ml6c2sxfunnuskxvx9l";
let accountAddress;


let coins1selection = document.getElementById("Coins");
let coins2selection = document.getElementById("Coins2");
let swapbtn = document.getElementById("swapbtn");
let coinAinput = document.getElementById("coinAinput");
let msg = document.getElementById("msg");




const rdt = RadixDappToolkit(
    { dAppDefinitionAddress: dAppId, dAppName: "MDSwap" },
    (requestData) => {
        requestData({
            accounts: { quantifier: "atLeast", quantity: 1 },
        }).map(({ data: { accounts } }) => {
            // add accounts to dApp application state
            // console.log("account data: ", accounts);
            // document.getElementById("accountName").innerText = accounts[0].label;
            // document.getElementById("accountAddress").innerText = accounts[0].address;
            accountAddress = accounts[0].address;
        });
    },
    {
        networkId: 12, // 12 is for RCnet 01 for Mainnet
        onDisconnect: () => {
            // clear your application state
        },
        onInit: ({ accounts }) => {
            // set your initial application state
            console.log("onInit accounts: ", accounts);
            // if (accounts.length > 0) {
            //     document.getElementById(
            //         "accountName"
            //     ).innerText = `Account Name : ${accounts[0].label}`;
            //     document.getElementById(
            //         "accountAddress"
            //     ).innerText = `Account Address : ${accounts[0].address}`;
            accountAddress = accounts[0].address;
            // }
        },
    }
);


// console.log("dApp Toolkit: ", rdt)

// There are four classes exported in the Gateway-SDK These serve as a thin wrapper around the gateway API
// API docs are available @ https://betanet-gateway.redoc.ly/
// https://kisharnet-gateway.radixdlt.com/swagger/index.html

import {
    TransactionApi,
    StateApi,
    StatusApi,
    StreamApi,
    Configuration,
} from "@radixdlt/babylon-gateway-api-sdk";

// Instantiate Gateway SDK
const transactionApi = new TransactionApi();
const stateApi = new StateApi();
const statusApi = new StatusApi();
const streamApi = new StreamApi();



// document.getElementById("instantiateComponent").onclick = async function () {

//     let manifest = new ManifestBuilder()
//         .callMethod(accountAddress, "withdraw", [
//             Address("resource_tdx_c_1q8ejmspq0fssru59mxhn7rcfudye8levkc79w6ul22dsxdjz4s"),
//             Decimal("10000"),
//         ])
//         .takeFromWorktop("resource_tdx_c_1q8ejmspq0fssru59mxhn7rcfudye8levkc79w6ul22dsxdjz4s", "CAA")
//         .callMethod(accountAddress, "withdraw", [
//             Address("resource_tdx_c_1qxj34lxa4v5qk2hm94ux5u64u2yhc4nlz7lxgl89gvgslv62j3"),
//             Decimal("10000"),
//         ])
//         .takeFromWorktop("resource_tdx_c_1qxj34lxa4v5qk2hm94ux5u64u2yhc4nlz7lxgl89gvgslv62j3", "CBB")
//         .callFunction(packadd, "MDSwap", "instantiate_pool", [Bucket("CAA"), Bucket("CBB"), Decimal("100000000"), '"MDLPTN3"', '"MDLPTokenNew3"', '"https://blog.lpntoken.io/wp-content/uploads/2021/07/1_xfHIDQh_C5H_HQhb1-9d4w-300x300.png"', Decimal("0.1")])
//         .callMethod(accountAddress, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
//         .build()
//         .toString();
//     console.log("Instantiate Manifest: ", manifest);
//     // Send manifest to extension for signing
//     const result = await rdt.sendTransaction({
//         transactionManifest: manifest,
//         version: 1,
//     });

//     if (result.isErr()) throw result.error;

//     console.log("Intantiate WalletSDK Result: ", result.value);

//     // ************ Fetch the transaction status from the Gateway API ************
//     let status = await transactionApi.transactionStatus({
//         transactionStatusRequest: {
//             intent_hash_hex: result.value.transactionIntentHash,
//         },
//     });
//     console.log("Instantiate TransactionApi transaction/status:", status);

//     // ************ Fetch component address from gateway api and set componentAddress variable **************
//     let commitReceipt = await transactionApi.transactionCommittedDetails({
//         transactionCommittedDetailsRequest: {
//             intent_hash_hex: result.value.transactionIntentHash,
//         },
//     });
//     console.log("Instantiate Committed Details Receipt", commitReceipt);

//     // ****** Set componentAddress variable with gateway api commitReciept payload ******
//     componentAddress = commitReceipt.details.referenced_global_entities[0];
//     document.getElementById("componentAddress").innerText = componentAddress;
//     // ****** Set resourceAddress variable with gateway api commitReciept payload ******
//     admin_badge = commitReceipt.details.referenced_global_entities[1];
//     document.getElementById("gumAddress").innerText = admin_badge;

//     console.log("first");
// };



async function SwapCoin(coin, value) {
    
    let manifest;
    if (coin == "CoinA") {
        
        manifest = new ManifestBuilder()
            .callMethod(accountAddress, "withdraw", [
                Address("resource_tdx_c_1q8ejmspq0fssru59mxhn7rcfudye8levkc79w6ul22dsxdjz4s"),
                Decimal(value),
            ])
            .takeFromWorktop("resource_tdx_c_1q8ejmspq0fssru59mxhn7rcfudye8levkc79w6ul22dsxdjz4s", "CAA")
            .callMethod(component_address, "swap", [Bucket("CAA")])
            .callMethod(accountAddress, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
            .build()
            .toString()
    }else if (coin == "CoinB") {
       
        manifest = new ManifestBuilder()
            .callMethod(accountAddress, "withdraw", [
                Address("resource_tdx_c_1qxj34lxa4v5qk2hm94ux5u64u2yhc4nlz7lxgl89gvgslv62j3"),
                Decimal(value),
            ])
            .takeFromWorktop("resource_tdx_c_1qxj34lxa4v5qk2hm94ux5u64u2yhc4nlz7lxgl89gvgslv62j3", "CBB")
            .callMethod(component_address, "swap", [Bucket("CBB")])
            .callMethod(accountAddress, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
            .build()
            .toString()
    }else{
        return false;
    }





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

    msg.innerText = `You get ${commitReceipt.details.receipt.events[3].data.data_json.fields[0].value} coin`;


}



coins1selection.addEventListener("change", (e) => {

    if (e.target.value == "CoinA") {

        coins2selection.innerHTML = `
          <option value="NotSelected" class="bg-slate-500 ">Select coin to take</option>
           <option value="CoinB" class="bg-slate-500 ">CoinB</option>
          `

    } else if (e.target.value == "CoinB") {

        coins2selection.innerHTML = `
          <option value="NotSelected" class="bg-slate-500 ">Select coin to take</option>
           <option value="CoinA" class="bg-slate-500 ">CoinA</option>`
    }

})

swapbtn.addEventListener("click", async (e) => {

    if (coins1selection.value != "NotSelected" && coins2selection.value != "NotSelected" && coinAinput.value != "0.0") {


        swapbtn.innerHTML = `Swap <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_EYReHf.json"  background="transparent"  speed="1" class="h-7 w-7 ml-3"  loop  autoplay></lottie-player>`;
        swapbtn.disabled = true;
        await SwapCoin(coins1selection.value, coinAinput.value);
        swapbtn.innerHTML = `Swap`;
        swapbtn.disabled = false;

    } else {

        msg.innerText = "Please fill valid input to swap";

    }

})









