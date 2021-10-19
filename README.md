# case-town | What is this project?

Convert space separated string to camel case, pascal case, kebab case or snake case.

# Installation

```
npm i case-town
```

# Usage

```javascript
const caseTown = require('case-town')

let str = 'your*-,  striNg _HERE'

let convertedStr1 = caseTown.camel(str)
// returned: yourStringHere
let convertedStr2 = caseTown.pascal(str)
// returned: YourStringHere
let convertedStr3 = caseTown.kebab(str)
// returned: your-string-here
let convertedStr4 = caseTown.snake(str)
// returned: your_string_here
```
