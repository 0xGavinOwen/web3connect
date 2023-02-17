# KL Mini Hack

This project is used for hackathon

## How to run

```bash
yarn install

yarn dev
```

- In consts/yourDetails.js -> change it into your own contract address and domain name
- In a `.env.local` file called `PRIVATE_KEY`, add youe waller private key, example:

```text title=".env.local"
THIRDWEB_AUTH_PRIVATE_KEY=your-wallet-private-key
```

# What this project do
When first run, this project will go to a landing page, and it shows some content creator. When you click a content creator, you can see the contents, but its limited. When you subscribe, you will need to connect the metamask wallet and buy an NFT that is requierd to see the creator's full content.
