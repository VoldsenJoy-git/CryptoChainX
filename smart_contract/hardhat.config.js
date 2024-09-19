// require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     ropsten: {
//       url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
//       accounts: ['6e8be580680261f1aa63b3fca92c1e457b585f9c52fc0c50ecd90c41466f2c9a'],
//     },
//   },
// };
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/LZoAWC2ZBiuMI4oMO6lOqqEqUkozpji2',
      accounts: ['6e8be580680261f1aa63b3fca92c1e457b585f9c52fc0c50ecd90c41466f2c9a'],
    },
  },
};

