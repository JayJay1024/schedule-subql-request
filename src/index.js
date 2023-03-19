import { request, gql } from "graphql-request";

const endpoints = [
  "https://api.subquery.network/sq/hhhx2048/crab-nft",
  "https://api.subquery.network/sq/JayJay1024/darwinia-nft",
];

const query = gql`
  query {
    remarkedNftAddresses(first: 99) {
      totalCount
      nodes {
        id
        signer
        value
        addressValue
        blockNumber
        extrinsicIndex
        extrinsicHash
        extrinsicTimestamp
      }
    }
  }
`;

const main = async () => {
  for (const endpoint of endpoints) {
    console.log(endpoint);
    for (let i = 0; i < 60; i++) {
      try {
        const response = await request(endpoint, query);
        // console.log('totalCount:', response?.remarkedNftAddresses?.totalCount);
      } catch (err) {
        console.error(`#${i} An error occurred:`, err);
      }
    }
  }
};

main();
