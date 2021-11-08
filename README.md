# handshake-regex

> Regular expression for matching Handshake (HNS) wallet addresses



## Install

```sh
$ npm i handshake-regex
```

## Notes

- Version 31 Handshake addresses are _technically_ valid but they are also unspendable. For the sake of this module, those addresses are deemed invalid.
- This module does not fully validate a Handshake address (that involves hashing and more). It is intended to show fairly quickly if an obviously incorrect address is indeed incorrect. For validation, you will want to use something like [hsd](https://github.com/handshake-org/hsd/blob/master/lib/primitives/address.js).



## Usage

```js
// Import the default export
import dap from "handshake-regex";

dap("hs1q98ddwl2lcpnnzfvvrqad80qu97w0q72cyq2uy3");
// ^ Returns true

dap("3MWvddmToBWnnPes3L45i1pRQDhPrLdznc");
// ^ Returns false
```

```js
// Or, export the named function
import { handshakeRegex } from "handshake-regex";

handshakeRegex("hs1q98ddwl2lcpnnzfvvrqad80qu97w0q72cyq2uy3");
// ^ Returns true

handshakeRegex("3MWvddmToBWnnPes3L45i1pRQDhPrLdznc");
// ^ Returns false
```



## API

### handshakeRegex(suppliedString)
#### suppliedString

Type: `string` (required)

- If nothing is supplied, an error is returned. Gotta love types.
- If you supply a nonsense string or non-Handshake wallet address, the response is `false`.



## Tests

```sh
# Run all tests, sequentially
$ npm test

# Test dependencies for latest versions
$ npm run test:dependencies

# Lint "src" directory
$ npm run test:typescript

# Test this module
$ npm run test:assert
```
