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
import type { ArabicShaping, BidiBrackets } from "@ucdjs/ucd-fields/v16";
import { ARABIC_SHAPING_FIELDS, BIDI_BRACKETS_FIELDS } from "@ucdjs/ucd-fields/v16";

console.log(ARABIC_SHAPING_FIELDS);
// => [
//     "code_point",
//     "schematic_name",
//     "joining_type",
//     "joining_group"
// ]

console.log(BIDI_BRACKETS_FIELDS);
// => [
//   "code_point",
//   "bidi_paired_bracket",
//   "bidi_paired_bracket_type"
// ]
```

## 📄 License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@ucdjs/ucd-fields?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@ucdjs/ucd-fields
[npm-downloads-src]: https://img.shields.io/npm/dm/@ucdjs/ucd-fields?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@ucdjs/ucd-fields
