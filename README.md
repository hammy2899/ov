![ov logo](logo.png)

# ov
ov is a object validation library which can be used in the browser or with [nodejs](https://nodejs.org/en/)

[![npm version](https://img.shields.io/npm/v/ov.svg)](https://www.npmjs.com/package/ov)
[![license](https://img.shields.io/github/license/hammy2899/ov.svg)](https://github.com/hammy2899/ov/blob/master/LICENSE.md)


### Installation
```
$ npm install --save ov
```

### Usage

#### NodeJS
```javascript
import { ov, Model, Blueprint } from 'ov';

const a = {
  name: 'Sean_',
  age: 19,
};

const b = new Blueprint({
  name: new Model()
    .string()
    .max(25)
    .alphanumeric(),
  age: new Model()
    .number()
    .integer()
    .min(16),
});

console.log('Valid', ov.validate(a, b));
```

Output
```text
Valid Result {
  valid: false,
  errors:
   [ ValidationError {
       message: '\'name\' can only contain a-z, A-Z and 0-9',
       path: 'name',
       value: 'Sean_',
       model: [StringModel],
       check: [Check] } ] }
```

#### Browser

index.html
```html
<script src="./dist/ov.js"></script>
```

script.js
```javascript
const { ov, Model, Blueprint } = OV;

const a = {
  name: 'Sean_',
  age: 19,
};

const b = new Blueprint({
  name: new Model()
    .string()
    .max(25)
    .alphanumeric(),
  age: new Model()
    .number()
    .integer()
    .min(16),
});

console.log('Valid', ov.validate(a, b));
```

Output
```text
Valid Result {
  valid: false,
  errors:
   [ ValidationError {
       message: '\'name\' can only contain a-z, A-Z and 0-9',
       path: 'name',
       value: 'Sean_',
       model: [StringModel],
       check: [Check] } ] }
```
