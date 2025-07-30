# Node & Typescript

## Installation

```
npm install @gladhost/tlds
```

## Functions

- `getTlds(): string[]`
- `isValidTld(tld:string): boolean`
- `hasDomainValidTld(domain:string): boolean`

## Examples

```
import * as tlds from '@gladhost/tlds';

console.log(tlds.getTlds());
console.log(tlds.isValidTld("com")
console.log(tlds.hasDomainValidTld("example.com")
```

expected results:

- `['com', 'fr', ...]`
- `true`
- `true`
