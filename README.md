# case-town

Convert space separated string to diffrent cases (camel case, pascal case, etc.).

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

let convertedStr5 = caseTown.url(str)
// returned: your/strin/here

let convertedStr6 = caseTown.title(str)
// returned: Your String Here

let convertedStr7 = caseTown.windowsPath(str)
// returned: your\string\here
```
