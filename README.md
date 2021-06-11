# Flat try

An abstraction to handle exceptions without the need of new code blocks, improving readability (IMO)

Works for both sync and async functions

## Install

```shell
npm i --save flat-try
```

## Usage

**Functions:**

```js
const Try = require('flat-try')

const [err, result] = Try(() => myDangerousFunc(arg1))

if (err) {
    // handle it
}

// use the result
```

**Promises/Async:**

```js
const Try = require('flat-try')

const [err, result] = await Try.promise(myDangerousFuncThatReturnsAPromise(arg1))

if (err) {
    // handle it
}

// use the result
```

___

**Inspired by**: [safe-await](https://www.npmjs.com/package/safe-await)

**Shout-out to**: [BPatinho](https://github.com/BPatinho)
