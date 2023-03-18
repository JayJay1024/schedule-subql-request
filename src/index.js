import { request, gql } from "graphql-request";

const endpoints = [
  "https://api.subquery.network/sq/hhhx2048/crab-nft",
  "https://api.subquery.network/sq/JayJay1024/darwinia-nft",
];

const query = gql`
  query {
    remarkedNftAddresses(first: 2) {
      totalCount
      nodes {
        id
        signer
        value
        addressValue
      }
    }
  }
`;

const main = async () => {
  for (const endpoint of endpoints) {
    console.log(endpoint);
    try {
      const response = await request(endpoint, query);
      console.log('totalCount:', response?.remarkedNftAddresses?.totalCount);
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }
};

main();
