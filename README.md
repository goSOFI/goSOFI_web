## Installation

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```
2. Run the terminal command:
`
testrpc
`

3. Compile and migrate the contracts.
    ```
    truffle compile
    truffle migrate
    ```

4. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```
    npm run start
    ```

5. To test with Jest and to test the smart contract functionality
    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

6. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```
