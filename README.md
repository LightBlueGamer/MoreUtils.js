## About

MoreUtils.js is a simple package aimed to add more functionality to JavaScript that can be useful to have at hand.

## Installation

```sh-session
npm i moreutils.js
```

## Example usage

```js
// Without destructuring
const moreutils = require('moreutils.js');

const emptyObject = {};
const filledObject = {
  string: "This is a string";
};

moreutils.empty(emptyObject); // Returns true
moreutils.empty(filledObject); // Returns false

// With destructuring
const { empty } = require('moreutils.js');

const emptyObject = {};
const filledObject = {
  string: "This is a string";
};

empty(emptyObject); // Returns true
empty(filledObject); // Returns false
```