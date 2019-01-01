# Hey There!

Great job making it through the Escrow module. We hope you're excited to get building!

## Client Application

You'll need [**Node/NPM**](https://nodejs.org/en/) for running installing dependencies and running your app

The client application resides in the top level of this project in a folder called app.

### Built with Parcel

This application is built with [Parcel](https://github.com/parcel-bundler/parcel).
Install it globally with `npm install -g parcel-bundler`.

### Install Dependencies

To start the application, open up a terminal and find your way into the app folder.

From the app folder, run `npm install` to install dependencies then `npm start` to run the application.

Or for short `npm i && npm start` :)

Once you've done that, installing [metamask](https://metamask.io/) will allow you to create escrow contracts on
your own local node or a public testnet like Rinkeby or Kovan.

### Choosing your Ethereum Network

When you've opened up Metamask you can choose which Ethereum Network you want to connect to.

If you have ether on any of the testnets you can use those. The easiest option would be to
install [ganache-cli](https://github.com/trufflesuite/ganache-cli) by running
`npm install -g ganache-cli`.

Once you have ganache-cli, you can simply run `ganache-cli` that runs on port 8545 by default.  
You can connect to this network with metamask and import one of the accounts with ether
that ganache-cli displays in the console when you run it.

## Truffle and the Escrow Contract

You'll notice at the top level there's a Truffle folder, inside this folder will be
contracts, migrations and tests. This is typical to a Truffle project, if you're
unfamiliar with how Truffle sets up its projects check out [The Truffle Documentation](http://truffleframework.com/docs/).

To get started with Truffle make sure to install it using `npm install -g truffle`.

If you open up the `truffle-config.js` you'll see that we've updated the route where the
contracts are being built. This will automatically write the necessary json file to where the React Application
expects it when you deploy your contracts by navigating to the truffle file path in your terminal
and running `truffle deploy`.
