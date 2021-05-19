# handshake-regex

> Regular expression for matching Handshake (HNS) wallet addresses



## Install

```sh
$ npm i handshake-regex
```



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



## Support

I don't drink coffee so if you like this module and want to support me, feel free to send some HNS to `hs1q98ddwl2lcpnnzfvvrqad80qu97w0q72cyq2uy3`!
