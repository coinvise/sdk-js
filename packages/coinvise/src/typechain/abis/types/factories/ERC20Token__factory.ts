/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, BigNumberish, Contract, ContractFactory, Overrides } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import type { ERC20Token, ERC20TokenInterface } from "../ERC20Token"

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a0a38038062001a0a833981016040819052620000349162000465565b8383838383838160049080519060200190620000529291906200030c565b508051620000689060059060208401906200030c565b50506006805460ff1916905550620000818183620000cb565b5062000095925060009150339050620001c3565b620000c17f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620001c3565b505050506200056e565b6001600160a01b038216620001275760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200013560008383620001cf565b8060036000828254620001499190620004f6565b90915550506001600160a01b0382166000908152600160205260408120805483929062000178908490620004f6565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35b5050565b620001bf8282620001ec565b620001e78383836200028c60201b620008901760201c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620001bf576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002483390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b620002a4838383620001e760201b620005191760201c565b60065460ff1615620001e75760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016200011e565b8280546200031a906200051b565b90600052602060002090601f0160209004810192826200033e576000855562000389565b82601f106200035957805160ff191683800117855562000389565b8280016001018555821562000389579182015b82811115620003895782518255916020019190600101906200036c565b50620003979291506200039b565b5090565b5b808211156200039757600081556001016200039c565b600082601f830112620003c3578081fd5b81516001600160401b0380821115620003e057620003e062000558565b604051601f8301601f19908116603f011681019082821181831017156200040b576200040b62000558565b8160405283815260209250868385880101111562000427578485fd5b8491505b838210156200044a57858201830151818301840152908201906200042b565b838211156200045b57848385830101525b9695505050505050565b600080600080608085870312156200047b578384fd5b84516001600160401b038082111562000492578586fd5b620004a088838901620003b2565b95506020870151915080821115620004b6578485fd5b50620004c587828801620003b2565b60408701516060880151919550935090506001600160a01b0381168114620004eb578182fd5b939692955090935050565b600082198211156200051657634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200053057607f821691505b602082108114156200055257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61148c806200057e6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80635c975abb116100c3578063a217fddf1161007c578063a217fddf146102c4578063a457c2d7146102cc578063a9059cbb146102df578063d547741f146102f2578063dd62ed3e14610305578063e63ab1e91461033e57600080fd5b80635c975abb1461025a57806370a082311461026557806379cc67901461028e5780638456cb59146102a157806391d14854146102a957806395d89b41146102bc57600080fd5b80632f2ff15d116101155780632f2ff15d146101f5578063313ce5671461020a57806336568abe14610219578063395093511461022c5780633f4ba83a1461023f57806342966c681461024757600080fd5b806301ffc9a71461015d57806306fdde0314610185578063095ea7b31461019a57806318160ddd146101ad57806323b872dd146101bf578063248a9ca3146101d2575b600080fd5b61017061016b3660046112a4565b610365565b60405190151581526020015b60405180910390f35b61018d61039c565b60405161017c9190611341565b6101706101a8366004611241565b61042e565b6003545b60405190815260200161017c565b6101706101cd366004611206565b610444565b6101b16101e036600461126a565b60009081526020819052604090206001015490565b610208610203366004611282565b6104f3565b005b6040516012815260200161017c565b610208610227366004611282565b61051e565b61017061023a366004611241565b61059c565b6102086105d8565b61020861025536600461126a565b61066d565b60065460ff16610170565b6101b16102733660046111ba565b6001600160a01b031660009081526001602052604090205490565b61020861029c366004611241565b61067a565b6102086106fb565b6101706102b7366004611282565b61078c565b61018d6107b5565b6101b1600081565b6101706102da366004611241565b6107c4565b6101706102ed366004611241565b61085d565b610208610300366004611282565b61086a565b6101b16103133660046111d4565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101b17f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60006001600160e01b03198216637965db0b60e01b148061039657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600480546103ab90611405565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790611405565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b600061043b3384846108f6565b50600192915050565b6000610451848484610a1a565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156104db5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6104e885338584036108f6565b506001949350505050565b60008281526020819052604090206001015461050f8133610bf5565b6105198383610c59565b505050565b6001600160a01b038116331461058e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104d2565b6105988282610cdd565b5050565b3360008181526002602090815260408083206001600160a01b0387168452909152812054909161043b9185906105d3908690611374565b6108f6565b6106027f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361078c565b6106635760405162461bcd60e51b815260206004820152602c60248201527f4552433230546f6b656e3a206d75737420686176652070617573657220726f6c60448201526b6520746f20756e706175736560a01b60648201526084016104d2565b61066b610d42565b565b6106773382610dd5565b50565b60006106868333610313565b9050818110156106e45760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016104d2565b6106f183338484036108f6565b6105198383610dd5565b6107257f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361078c565b6107845760405162461bcd60e51b815260206004820152602a60248201527f4552433230546f6b656e3a206d75737420686176652070617573657220726f6c6044820152696520746f20706175736560b01b60648201526084016104d2565b61066b610f2f565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600580546103ab90611405565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156108465760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104d2565b61085333858584036108f6565b5060019392505050565b600061043b338484610a1a565b6000828152602081905260409020600101546108868133610bf5565b6105198383610cdd565b60065460ff16156105195760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016104d2565b6001600160a01b0383166109585760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104d2565b6001600160a01b0382166109b95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104d2565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610a7e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104d2565b6001600160a01b038216610ae05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104d2565b610aeb838383610faa565b6001600160a01b03831660009081526001602052604090205481811015610b635760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104d2565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610b9a908490611374565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610be691815260200190565b60405180910390a35b50505050565b610bff828261078c565b61059857610c17816001600160a01b03166014610fb5565b610c22836020610fb5565b604051602001610c339291906112cc565b60408051601f198184030181529082905262461bcd60e51b82526104d291600401611341565b610c63828261078c565b610598576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610c993390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610ce7828261078c565b15610598576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60065460ff16610d8b5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104d2565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610e355760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104d2565b610e4182600083610faa565b6001600160a01b03821660009081526001602052604090205481811015610eb55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104d2565b6001600160a01b0383166000908152600160205260408120838303905560038054849290610ee49084906113ab565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60065460ff1615610f755760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104d2565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610db83390565b610519838383610890565b60606000610fc483600261138c565b610fcf906002611374565b67ffffffffffffffff811115610ff557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561101f576020820181803683370190505b509050600360fc1b8160008151811061104857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061108557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006110a984600261138c565b6110b4906001611374565b90505b6001811115611148576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106110f657634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061111a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93611141816113ee565b90506110b7565b5083156111975760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104d2565b9392505050565b80356001600160a01b03811681146111b557600080fd5b919050565b6000602082840312156111cb578081fd5b6111978261119e565b600080604083850312156111e6578081fd5b6111ef8361119e565b91506111fd6020840161119e565b90509250929050565b60008060006060848603121561121a578081fd5b6112238461119e565b92506112316020850161119e565b9150604084013590509250925092565b60008060408385031215611253578182fd5b61125c8361119e565b946020939093013593505050565b60006020828403121561127b578081fd5b5035919050565b60008060408385031215611294578182fd5b823591506111fd6020840161119e565b6000602082840312156112b5578081fd5b81356001600160e01b031981168114611197578182fd5b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516113048160178501602088016113c2565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516113358160288401602088016113c2565b01602801949350505050565b60208152600082518060208401526113608160408501602087016113c2565b601f01601f19169190910160400192915050565b6000821982111561138757611387611440565b500190565b60008160001904831182151516156113a6576113a6611440565b500290565b6000828210156113bd576113bd611440565b500390565b60005b838110156113dd5781810151838201526020016113c5565b83811115610bef5750506000910152565b6000816113fd576113fd611440565b506000190190565b600181811c9082168061141957607f821691505b6020821081141561143a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203daa09895bffe01da73712a0eb77871f0286a3eea87f32bd238392a7087f878364736f6c63430008040033"

export class ERC20Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Token> {
    return super.deploy(name, symbol, initialSupply, minter, overrides || {}) as Promise<ERC20Token>
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, initialSupply, minter, overrides || {})
  }
  attach(address: string): ERC20Token {
    return super.attach(address) as ERC20Token
  }
  connect(signer: Signer): ERC20Token__factory {
    return super.connect(signer) as ERC20Token__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC20TokenInterface {
    return new utils.Interface(_abi) as ERC20TokenInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20Token {
    return new Contract(address, _abi, signerOrProvider) as ERC20Token
  }
}
