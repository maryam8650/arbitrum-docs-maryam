/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  introSidebar: [
    {
      type: "doc",
      id: "intro/intro",
      label: "A Gentle Introduction"
    },
    {
      type: "doc",
      id: "getting-started-users",
      label: "Get Started"
    },
    {
      type: "category",
      label: "FAQs",
      items: [
        {
          type: "doc",
          id: "faqs/anytrust-vs-rollup",
          label: "Rollup vs. AnyTrust"
        },
        {
          type: "doc",
          id: "faqs/how-fees",
          label: "Fees"
        },
        {
          type: "doc",
          id: "faqs/what-if-dispute",
          label: "Disputes and L2 Reorgs?"
        },
        {
          type: "doc",
          id: "faqs/seq-or-val",
          label: "Sequencers vs. Validators"
        },
        {
          type: "doc",
          id: "faqs/beta-status",
          label: "Decentralization Status"
        }
      ]
    },
    {
      type: "doc",
      id: "intro/glossary",
      label: "Glossary"
    },
    {
      type: "doc",
      id: "mainnet-beta",
      label: "Mainnet Beta Status"
    }
  ],
  devsSideBar: [
    {
      type: "category",
      label: "Running Nodes",
      items: [
        {
          type: "doc",
          id: "node-running/running-a-node",
          label: "Run an Arbitrum Node"
        },
        {
          type: "doc",
          id: "node-running/node-providers",
          label: "Node Providers"
        },
        {
          type: "doc",
          id: "das/daserver-instructions",
          label: "Data Availability Server"
        }
      ]
    },
    {
      type: "category",
      label: "BUIDLing on Arbitrum",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Start Building",
          id: "getting-started-devs"
        },
        {
          type: "category",
          label: "Arbitrum/Ethereum Differences",
          items: [
            {
              type: "doc",
              label: "Arbitrum vs. Ethereum",
              id: "arb-specific-things"
            },
            {
              type: "doc",
              label: "Solidity Support",
              id: "solidity-support"
            },
            {
              type: "doc",
              label: "Block Numbers and Time",
              id: "time"
            }
          ]
        },
        {
          type: "doc",
          label: "Cross-chain Messaging",
          id: "for-devs/cross-chain-messsaging"
        },
        {
          type: "doc",
          label: "Token Bridge",
          id: "asset-bridging"
        },
        {
          type: "category",
          label: "Precompiles",
          items: [
            {
              type: "doc",
              label: "Common Precompiles",
              id: "arbos/common-precompiles"
            },
            {
              type: "doc",
              label: "All Precompiles",
              id: "arbos/precompiles"
            }
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Classic-to-Nitro Migration",
      items: [
        {
          type: "doc",
          label: "Dapp Migration",
          id: "migration/dapp_migration"
        },
        {
          type: "doc",
          label: "State Migration",
          id: "migration/state-migration"
        }
      ]
    },
    {
      type: "doc",
      label: "Public Chains",
      id: "public-chains"
    },
    {
      type: "doc",
      label: "Useful Addresses",
      id: "useful-addresses"
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "link",
          label: "Tutorials",
          href: "https://github.com/OffchainLabs/arbitrum-tutorials"
        },
        {
          type: "link",
          label: "SDK",
          href: "/sdk"
        },
        {
          type: "link",
          label: "Github",
          href: "https://github.com/OffchainLabs"
        }
      ]
    }
  ],

  howItWorksSidebar: [
    {
      type: "doc",
      id: "tx-lifecycle",
      label: "Overview: Transaction Lifecycle"
    },
    {
      type: "doc",
      id: "arbos/arbos",
      label: "ArbOS"
    },
    {
      type: "category",
      label: "Fault Proofs",
      items: [
        {
          type: "doc",
          id: "proving/challenge-manager",
          label: "Interactive Challenges"
        },
        {
          type: "doc",
          id: "proving/wasm-to-wavm",
          label: "Wasm To WAVM"
        },
        {
          type: "doc",
          id: "proving/wavm-custom-opcodes",
          label: "Custom WAVM Opcodes"
        },
        {
          type: "doc",
          id: "proving/wavm-floats",
          label: "WAVM Floats"
        },
        {
          type: "doc",
          id: "proving/wavm-modules",
          label: "WAVM Modules"
        }
      ]
    },

    {
      type: "doc",
      id: "arbos/geth",
      label: "Geth"
    },
    {
      type: "category",
      label: "Gas / Fees",
      items: [
        {
          type: "doc",
          id: "arbos/gas",
          label: "L2 Gas"
        },
        {
          type: "doc",
          id: "arbos/l1-pricing",
          label: "L1 Pricing"
        }
      ]
    },
    {
      type: "doc",
      id: "assertion-tree",
      label: "Assertion Tree Protocol"
    },
    {
      type: "doc",
      id: "arbos/l1-to-l2-messaging",
      label: "L1-to-L2 Messaging"
    },
    {
      type: "doc",
      id: "arbos/l2-to-l1-messaging",
      label: "L2-to-L1 Messaging"
    },
    {
      type: "doc",
      id: "sequencer",
      label: "The Sequencer"
    },

    {
      type: "doc",
      id: "why-nitro",
      label: "Why Nitro?"
    },
    {
      type: "doc",
      id: "inside-arbitrum-nitro/inside-arbitrum-nitro",
      label: "Deep Dive: Inside Arbitrum"
    },
    {
      type: "link",
      href:
        "https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf",
      label: "Deeper Dive: Whitepaper"
    },
    {
      type: "doc",
      id: "inside-anytrust",
      label: "Inside AnyTrust"
    }
  ]
};

module.exports = sidebars;
