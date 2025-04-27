# @ucdjs/ucd-fields

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

UCD (Unicode Character Database) fields for JavaScript.

## Installation

```bash
npm install @ucdjs/ucd-fields
```

## Usage

```ts
import { ArabicShaping, BidiBrackets } from "@ucdjs/ucd-fields/v16.0.0";

console.log(ArabicShaping); // { "0": "No Arabic Shaping", "1": "Arabic Shaping" }
console.log(BidiBrackets); // { "0": "No Bidi Brackets", "1": "Bidi Brackets" }

```

## 📄 License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ucdjs/ucd-fields?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@ucdjs/ucd-fields
[npm-downloads-src]: https://img.shields.io/npm/dm/@ucdjs/ucd-fields?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@ucdjs/ucd-fields
