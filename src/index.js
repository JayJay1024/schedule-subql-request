import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const endpoints = [
  "https://api.subquery.network/sq/JayJay1024/crab-nft",
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
  for (const uri of endpoints) {
    console.log(uri);
    const client = new ApolloClient({ uri, cache: new InMemoryCache() });

    try {
      const res = await client.query({
        query,
      });
      console.log(res);
    } catch (_) {}
  }
};

main();
