// document.getElementById('swap').onclick = async function () {
//     let manifest = new ManifestBuilder()

//         .callMethod(accountAddress, "withdraw", [
//             Address("resource_tdx_c_1q8ejmspq0fssru59mxhn7rcfudye8levkc79w6ul22dsxdjz4s"),
//             Decimal("50"),
//         ])
//         .takeFromWorktop("resource_tdx_c_1q8ejmspq0fssru59mxhn7rcfudye8levkc79w6ul22dsxdjz4s", "CAA")
//         .callMethod(accountAddress, "withdraw", [
//             Address("resource_tdx_c_1qxj34lxa4v5qk2hm94ux5u64u2yhc4nlz7lxgl89gvgslv62j3"),
//             Decimal("50"),
//         ])
//         .takeFromWorktop("resource_tdx_c_1qxj34lxa4v5qk2hm94ux5u64u2yhc4nlz7lxgl89gvgslv62j3", "CBB")
//         .callMethod(comadd, "add_liquidity", [Bucket("CAA"),Bucket("CBB")])
//         .callMethod(accountAddress, "deposit_batch", [Expression("ENTIRE_WORKTOP")])
//         .build()
//         .toString()
//     console.log("get price manifest", manifest)

//     // Send manifest to extension for signing
//     const result = await rdt
//         .sendTransaction({
//             transactionManifest: manifest,
//             version: 1,
//         })

//     if (result.isErr()) throw result.error

//     console.log("get_price sendTransaction Result: ", result)

//     // Fetch the transaction status from the Gateway SDK
//     let status = await transactionApi.transactionStatus({
//         transactionStatusRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     });
//     console.log('Get Price status', status)

//     // fetch commit reciept from gateway api
//     let commitReceipt = await transactionApi.transactionCommittedDetails({
//         transactionCommittedDetailsRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     })
//     console.log('get price commitReceipt', commitReceipt)

//     // Show the receipt on the DOM
//     // document.getElementById('lptoken').innerText = `Lp Tokens : ${JSON.stringify(commitReceipt.details.receipt.output[1].data_json.value)}`;

// }






// .callMethod(dAppId, "withdraw", [
//     Address("resource_tdx_c_1qxzswnels02ze8mhtgumjvsc703kgz2ur7v56pwn30lq643spn"),
//     Decimal("100"),
//   ])
//   .takeFromWorktop("resource_tdx_c_1qxzswnels02ze8mhtgumjvsc703kgz2ur7v56pwn30lq643spn", "coinA_bucket")
//   .callMethod(dAppId, "withdraw", [
//     Address("resource_tdx_c_1q82lch2w0urq30nqfdmga003kcpna2dnlnjfx9n45w2st22grv"),
//     Decimal("100"),
//   ])
//   .takeFromWorktop("resource_tdx_c_1q82lch2w0urq30nqfdmga003kcpna2dnlnjfx9n45w2st22grv", "coinB_bucket")

// details.receipt.events[3].data.data_json.fields[0]

// {
//     "ledger_state": {
//         "network": "kisharnet",
//         "state_version": 12765416,
//         "proposer_round_timestamp": "2023-05-12T07:34:17.481Z",
//         "epoch": 7186,
//         "round": 1407
//     },
//     "transaction": {
//         "state_version": 12765394,
//         "transaction_status": "CommittedSuccess",
//         "payload_hash_hex": "6a868b9cf91759d0eb06dc466704581fbcd69d8f2f1fb2cc85110a3b2f2187c1",
//         "intent_hash_hex": "151e84935f3d4bc6c00e361a3a8d87036d1df897f8c1dd1111e6360addec08bf",
//         "fee_paid": {
//             "value": "0.278681",
//             "address": "resource_tdx_c_1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq40v2wv"
//         },
//         "confirmed_at": "2023-05-12T07:34:13.439Z"
//     },
//     "details": {
//         "raw_hex": "4d21022102210221090701070c0a121c0000000000000a1c1c0000000000000aadffffffffffffff220101200720efad2bcbd2227accc7626ad573dd1518a924d66d2007d7633c3d364a06f914e401000900e1f50508000021022022052103800906727b7be9c4e239631e80ee44a9c3bbb461d4e697a6d4e2ccfb0c086c6f636b5f6665652101850000e8890423c78a0000000000000000000000000000000000000000000000002103800906727b7be9c4e239631e80ee44a9c3bbb461d4e697a6d4e2ccfb0c08776974686472617721028001f32dc0207a6101f285d9af3f0f09e34993ff2cb63c576b9f529b850000e8890423c78a00000000000000000000000000000000000000000000000000018001f32dc0207a6101f285d9af3f0f09e34993ff2cb63c576b9f529b210380039abf5d18521da66a3d989b527e376641cf9abbfeb0a8193c9cf90c0473776170210181000000002103800906727b7be9c4e239631e80ee44a9c3bbb461d4e697a6d4e2ccfb0c0d6465706f7369745f6261746368210183002020002022010102200720efad2bcbd2227accc7626ad573dd1518a924d66d2007d7633c3d364a06f914e421012007408d3ea4eb8b234508534c4687db888861548dee49899cb699c2be52e3f8b16515588dd60816c12a8d3fbbb68e27856941b601a4f1133052bc4fbf6f5797b2b60022010121012007408bda2f1d95add7455dfaad59b972d5e274d24cde3eaacf6c5229be21ecccad259f75727d54f76eff9c19d31922c706ce4ab7cc6134a530c0472cfa89f66ea004",
//         "receipt": {
//             "events": [
//                 {
//                     "data": {
//                         "data_hex": "5c2101a00000e8890423c78a000000000000000000000000000000000000000000000000",
//                         "data_json": {
//                             "kind": "Tuple",
//                             "fields": [
//                                 {
//                                     "kind": "Decimal",
//                                     "value": "10"
//                                 }
//                             ]
//                         }
//                     },
//                     "type": {
//                         "emitter": {
//                             "type": "Method",
//                             "entity": {
//                                 "entity_type": "Vault",
//                                 "entity_id_hex": "0e96fc487478da39387af360c2b8ab8bb586f7f1bf74cebdaea48b07000000"
//                             },
//                             "module_type": "Self"
//                         },
//                         "local_type_index": {
//                             "kind": "SchemaLocal",
//                             "index": 26
//                         }
//                     }
//                 },
//                 {
//                     "data": {
//                         "data_hex": "5c220001a00000e8890423c78a000000000000000000000000000000000000000000000000",
//                         "data_json": {
//                             "kind": "Enum",
//                             "fields": [
//                                 {
//                                     "kind": "Decimal",
//                                     "value": "10"
//                                 }
//                             ],
//                             "variant_id": 0
//                         }
//                     },
//                     "type": {
//                         "emitter": {
//                             "type": "Method",
//                             "entity": {
//                                 "entity_type": "Vault",
//                                 "entity_id_hex": "0e8ef5c0e7dde3f580f0bde17638c18bedc8437039758d13dc672002000000"
//                             },
//                             "module_type": "Self"
//                         },
//                         "local_type_index": {
//                             "kind": "SchemaLocal",
//                             "index": 27
//                         }
//                     }
//                 },
//                 {
//                     "data": {
//                         "data_hex": "5c220001a00000e8890423c78a000000000000000000000000000000000000000000000000",
//                         "data_json": {
//                             "kind": "Enum",
//                             "fields": [
//                                 {
//                                     "kind": "Decimal",
//                                     "value": "10"
//                                 }
//                             ],
//                             "variant_id": 0
//                         }
//                     },
//                     "type": {
//                         "emitter": {
//                             "type": "Method",
//                             "entity": {
//                                 "entity_type": "Vault",
//                                 "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3711000000"
//                             },
//                             "module_type": "Self"
//                         },
//                         "local_type_index": {
//                             "kind": "SchemaLocal",
//                             "index": 28
//                         }
//                     }
//                 },
//                 {
//                     "data": {
//                         "data_hex": "5c220001a0d1518a4def1b9e7b000000000000000000000000000000000000000000000000",
//                         "data_json": {
//                             "kind": "Enum",
//                             "fields": [
//                                 {
//                                     "kind": "Decimal",
//                                     "value": "8.907587827597464017"
//                                 }
//                             ],
//                             "variant_id": 0
//                         }
//                     },
//                     "type": {
//                         "emitter": {
//                             "type": "Method",
//                             "entity": {
//                                 "entity_type": "Vault",
//                                 "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3712000000"
//                             },
//                             "module_type": "Self"
//                         },
//                         "local_type_index": {
//                             "kind": "SchemaLocal",
//                             "index": 27
//                         }
//                     }
//                 },
//                 {
//                     "data": {
//                         "data_hex": "5c220001a0d1518a4def1b9e7b000000000000000000000000000000000000000000000000",
//                         "data_json": {
//                             "kind": "Enum",
//                             "fields": [
//                                 {
//                                     "kind": "Decimal",
//                                     "value": "8.907587827597464017"
//                                 }
//                             ],
//                             "variant_id": 0
//                         }
//                     },
//                     "type": {
//                         "emitter": {
//                             "type": "Method",
//                             "entity": {
//                                 "entity_type": "Vault",
//                                 "entity_id_hex": "0eb97633c1919645bd41ca94f2ee9beff3ff926b9c4f5b7c1ff8fa02000000"
//                             },
//                             "module_type": "Self"
//                         },
//                         "local_type_index": {
//                             "kind": "SchemaLocal",
//                             "index": 28
//                         }
//                     }
//                 }
//             ],
//             "output": [
//                 {
//                     "data_hex": "5c2100",
//                     "data_json": {
//                         "kind": "Tuple",
//                         "fields": []
//                     }
//                 },
//                 {
//                     "data_hex": "5c90000d6a868b9cf91759d0eb06dc466704581fbcd69d8f2f1fb2cc851101000000",
//                     "data_json": {
//                         "kind": "Own",
//                         "value": "0d6a868b9cf91759d0eb06dc466704581fbcd69d8f2f1fb2cc851101000000"
//                     }
//                 },
//                 {
//                     "data_hex": "5c2100",
//                     "data_json": {
//                         "kind": "Tuple",
//                         "fields": []
//                     }
//                 },
//                 {
//                     "data_hex": "5c90000d6a868b9cf91759d0eb06dc466704581fbcd69d8f2f1fb2cc851102000000",
//                     "data_json": {
//                         "kind": "Own",
//                         "value": "0d6a868b9cf91759d0eb06dc466704581fbcd69d8f2f1fb2cc851102000000"
//                     }
//                 },
//                 {
//                     "data_hex": "5c2100",
//                     "data_json": {
//                         "kind": "Tuple",
//                         "fields": []
//                     }
//                 }
//             ],
//             "status": "Succeeded",
//             "next_epoch": null,
//             "fee_summary": {
//                 "tip_percentage": 0,
//                 "cost_unit_limit": 100000000,
//                 "cost_unit_price": "0.0000001",
//                 "xrd_total_tipped": "0",
//                 "xrd_vault_payments": [
//                     {
//                         "xrd_amount": "0.278681",
//                         "vault_entity": {
//                             "entity_type": "Vault",
//                             "entity_id_hex": "0e96fc487478da39387af360c2b8ab8bb586f7f1bf74cebdaea48b07000000"
//                         }
//                     }
//                 ],
//                 "cost_units_consumed": 2786810,
//                 "xrd_royalty_receivers": [],
//                 "xrd_total_royalty_cost": "0",
//                 "xrd_total_execution_cost": "0.278681",
//                 "cost_unit_execution_breakdown": {
//                     "Invoke": 25390,
//                     "RunWasm": 1772075,
//                     "DropLock": 228000,
//                     "DropNode": 10000,
//                     "RunNative": 127500,
//                     "RunSystem": 12500,
//                     "CreateNode": 10000,
//                     "TxBaseCost": 50000,
//                     "LockSubstate": 230500,
//                     "ReadSubstate": 164460,
//                     "TxPayloadCost": 2885,
//                     "WriteSubstate": 53500,
//                     "TxSignatureVerification": 100000
//                 }
//             },
//             "error_message": null,
//             "state_updates": {
//                 "created_substates": [],
//                 "deleted_substates": [],
//                 "updated_substates": [
//                     {
//                         "version": 2,
//                         "substate_id": {
//                             "entity_type": "NormalComponent",
//                             "module_type": "Self",
//                             "entity_id_hex": "039abf5d18521da66a3d989b527e376641cf9abbfeb0a8193c9cf9",
//                             "substate_type": "ComponentState",
//                             "substate_key_hex": "5c220101220000",
//                             "substate_key_type": "ComponentState"
//                         },
//                         "substate_hex": "5c22060121068001acd98ae1d7edef22be7ad4f82991dd7c07a099eead85b3bd8f9f90020eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be371000000090020eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be371100000090020eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3712000000a000008a5d78456301000000000000000000000000000000000000000000000000a087053d2d61f0cc0d000000000000000000000000000000000000000000000000",
//                         "substate_data": {
//                             "data_struct": {
//                                 "struct_data": {
//                                     "data_hex": "5c21068001acd98ae1d7edef22be7ad4f82991dd7c07a099eead85b3bd8f9f90020eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be371000000090020eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be371100000090020eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3712000000a000008a5d78456301000000000000000000000000000000000000000000000000a087053d2d61f0cc0d000000000000000000000000000000000000000000000000",
//                                     "data_json": {
//                                         "kind": "Tuple",
//                                         "fields": [
//                                             {
//                                                 "kind": "Address",
//                                                 "value": "resource_tdx_c_1qxkdnzhp6lk77g470t20s2v3m47q0gyea6kctvaa370skmn22z"
//                                             },
//                                             {
//                                                 "kind": "Own",
//                                                 "value": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3710000000"
//                                             },
//                                             {
//                                                 "kind": "Own",
//                                                 "value": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3711000000"
//                                             },
//                                             {
//                                                 "kind": "Own",
//                                                 "value": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3712000000"
//                                             },
//                                             {
//                                                 "kind": "Decimal",
//                                                 "value": "0.1"
//                                             },
//                                             {
//                                                 "kind": "Decimal",
//                                                 "value": "0.994433917903504775"
//                                             }
//                                         ]
//                                     }
//                                 },
//                                 "owned_entities": [
//                                     {
//                                         "entity_type": "Vault",
//                                         "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3710000000"
//                                     },
//                                     {
//                                         "entity_type": "Vault",
//                                         "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3711000000"
//                                     },
//                                     {
//                                         "entity_type": "Vault",
//                                         "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3712000000"
//                                     }
//                                 ],
//                                 "referenced_entities": [
//                                     {
//                                         "global_address": "resource_tdx_c_1qxkdnzhp6lk77g470t20s2v3m47q0gyea6kctvaa370skmn22z",
//                                         "entity_reference": {
//                                             "entity_type": "FungibleResource",
//                                             "entity_id_hex": "01acd98ae1d7edef22be7ad4f82991dd7c07a099eead85b3bd8f9f"
//                                         },
//                                         "global_address_hex": "01acd98ae1d7edef22be7ad4f82991dd7c07a099eead85b3bd8f9f"
//                                     }
//                                 ]
//                             },
//                             "substate_type": "ComponentState"
//                         },
//                         "substate_data_hash": "0e17093c8a7c32a2755e913daf883a313d73ee7c865d04937834a5397a128658"
//                     },
//                     {
//                         "version": 3,
//                         "substate_id": {
//                             "entity_type": "Vault",
//                             "module_type": "Self",
//                             "entity_id_hex": "0e8ef5c0e7dde3f580f0bde17638c18bedc8437039758d13dc672002000000",
//                             "substate_type": "VaultFungible",
//                             "substate_key_hex": "5c220501220100",
//                             "substate_key_type": "VaultFungible"
//                         },
//                         "substate_hex": "5c220f012101a000006865deb31d901a0000000000000000000000000000000000000000000000",
//                         "substate_data": {
//                             "amount": "490",
//                             "substate_type": "VaultFungible"
//                         },
//                         "substate_data_hash": "373b07af0f5cc5f52a7cf0c368957b475ec22b24238e657fbec155b3a043a990"
//                     },
//                     {
//                         "version": 11,
//                         "substate_id": {
//                             "entity_type": "Vault",
//                             "module_type": "Self",
//                             "entity_id_hex": "0e96fc487478da39387af360c2b8ab8bb586f7f1bf74cebdaea48b07000000",
//                             "substate_type": "VaultFungible",
//                             "substate_key_hex": "5c220501220100",
//                             "substate_key_type": "VaultFungible"
//                         },
//                         "substate_hex": "5c220f012101a0003843399fb05cf71d0200000000000000000000000000000000000000000000",
//                         "substate_data": {
//                             "amount": "9997.5128595",
//                             "substate_type": "VaultFungible"
//                         },
//                         "substate_data_hash": "8a3ef2c893b38163ed6a48730c7787148106c17603c7acc6a28ef509d08f8056"
//                     },
//                     {
//                         "version": 3,
//                         "substate_id": {
//                             "entity_type": "Vault",
//                             "module_type": "Self",
//                             "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3711000000",
//                             "substate_type": "VaultFungible",
//                             "substate_key_hex": "5c220501220100",
//                             "substate_key_type": "VaultFungible"
//                         },
//                         "substate_hex": "5c220f012101a00000389fec4a6f10240200000000000000000000000000000000000000000000",
//                         "substate_data": {
//                             "amount": "10110",
//                             "substate_type": "VaultFungible"
//                         },
//                         "substate_data_hash": "bf44d60549b80bb2f8421d21de898857be23cca4154c67a27aeab5f2d7cd90d3"
//                     },
//                     {
//                         "version": 3,
//                         "substate_id": {
//                             "entity_type": "Vault",
//                             "module_type": "Self",
//                             "entity_id_hex": "0eb671134d8fd46cd45be4851a473d264cc7f054aa4db38538be3712000000",
//                             "substate_type": "VaultFungible",
//                             "substate_key_hex": "5c220501220100",
//                             "substate_key_type": "VaultFungible"
//                         },
//                         "substate_hex": "5c220f012101a05e515922cee66ee61d0200000000000000000000000000000000000000000000",
//                         "substate_data": {
//                             "amount": "9996.29300652604295203",
//                             "substate_type": "VaultFungible"
//                         },
//                         "substate_data_hash": "1a01b14410829bec7476b72286d0cee63a78cbca83d2c16d8c506d1bd86f9766"
//                     },
//                     {
//                         "version": 3,
//                         "substate_id": {
//                             "entity_type": "Vault",
//                             "module_type": "Self",
//                             "entity_id_hex": "0eb97633c1919645bd41ca94f2ee9beff3ff926b9c4f5b7c1ff8fa02000000",
//                             "substate_type": "VaultFungible",
//                             "substate_key_hex": "5c220501220100",
//                             "substate_key_type": "VaultFungible"
//                         },
//                         "substate_hex": "5c220f012101a0a2ae46e2fc171eba200000000000000000000000000000000000000000000000",
//                         "substate_data": {
//                             "amount": "603.70699347395704797",
//                             "substate_type": "VaultFungible"
//                         },
//                         "substate_data_hash": "aba2036d5e973a77d05e8ce8e61827bb76eceb78906e9df74936f0257781b7ac"
//                     }
//                 ],
//                 "new_global_entities": []
//             }
//         },
//         "referenced_global_entities": [
//             "component_tdx_c_1qwdt7hgc2gw6v63anzd4yl3hvequlx4ml6c2sxfunnuskxvx9l"
//         ]
//     }
// }


// document.getElementById('getPriceA').onclick = async function () {
//     let manifest = new ManifestBuilder()
//         .callMethod(comadd, "get_coina", [])
//         .build()
//         .toString()
//     console.log("get price manifest", manifest)

//     // Send manifest to extension for signing
//     const result = await rdt
//         .sendTransaction({
//             transactionManifest: manifest,
//             version: 1,
//         })

//     if (result.isErr()) throw result.error

//     console.log("get_price sendTransaction Result: ", result)

//     // Fetch the transaction status from the Gateway SDK
//     let status = await transactionApi.transactionStatus({
//         transactionStatusRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     });
//     console.log('Get Price status', status)

//     // fetch commit reciept from gateway api
//     let commitReceipt = await transactionApi.transactionCommittedDetails({
//         transactionCommittedDetailsRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     })
//     console.log('get price commitReceipt', commitReceipt)

//     // Show the receipt on the DOM
//     document.getElementById('priceA').innerText = `Price of coin A : : ${JSON.stringify(commitReceipt.details.receipt.output[1].data_json.value)}`;

// }

// document.getElementById('getPriceB').onclick = async function () {
//     let manifest = new ManifestBuilder()
//         .callMethod(comadd, "get_coinb", [])
//         .build()
//         .toString()
//     console.log("get price manifest", manifest)

//     // Send manifest to extension for signing
//     const result = await rdt
//         .sendTransaction({
//             transactionManifest: manifest,
//             version: 1,
//         })

//     if (result.isErr()) throw result.error

//     console.log("get_price sendTransaction Result: ", result)

//     // Fetch the transaction status from the Gateway SDK
//     let status = await transactionApi.transactionStatus({
//         transactionStatusRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     });
//     console.log('Get Price status', status)

//     // fetch commit reciept from gateway api
//     let commitReceipt = await transactionApi.transactionCommittedDetails({
//         transactionCommittedDetailsRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     })
//     console.log('get price commitReceipt', commitReceipt)

//     // Show the receipt on the DOM
//     document.getElementById('priceB').innerText = `Price of coin B : : ${JSON.stringify(commitReceipt.details.receipt.output[1].data_json.value)}`;

// }


// document.getElementById('getLpToken').onclick = async function () {
//     let manifest = new ManifestBuilder()
//         .callMethod("component_tdx_c_1qvmlxvevscef37phegmldhst608gwfmfmsus9q8d2u4qzet6cm", "get_lp_mint_badge", [])
//         .build()
//         .toString()
//     console.log("get price manifest", manifest)

//     // Send manifest to extension for signing
//     const result = await rdt
//         .sendTransaction({
//             transactionManifest: manifest,
//             version: 1,
//         })

//     if (result.isErr()) throw result.error

//     console.log("get_price sendTransaction Result: ", result)

//     // Fetch the transaction status from the Gateway SDK
//     let status = await transactionApi.transactionStatus({
//         transactionStatusRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     });
//     console.log('Get Price status', status)

//     // fetch commit reciept from gateway api
//     let commitReceipt = await transactionApi.transactionCommittedDetails({
//         transactionCommittedDetailsRequest: {
//             intent_hash_hex: result.value.transactionIntentHash
//         }
//     })
//     console.log('get price commitReceipt', commitReceipt)

//     // Show the receipt on the DOM
//     document.getElementById('lptoken').innerText = `Lp Tokens : ${JSON.stringify(commitReceipt.details.receipt.output[1].data_json.value)}`;

// }