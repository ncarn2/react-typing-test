# React Typing Test

![example workflow](https://github.com/ncarn2/react-typing-test/actions/workflows/node.js.yml/badge.svg)

## Usage

``` 
npm install react-typing-test
```

``` js 
// something.js

import { TypingTest } from 'react-typing-test';

const Something = (props) => {
    return (
        <TypingTest language="english" wordLimit={120} />
    )
}

export default Something;

```

## Available Props

```js 
wordLimit: {
    type: Number
    default: 50
}
```

```js 
language: {
    type: String
    default: 'english'
}
```

```js
theme: {
    type: String
    default: 'Purpleish'
}
```
## TODO

Fix the themes:
- main text color and input color should be different
- correct vs incorrect colors aren't always great
- maybe some gradients

## Roadmap

- [x] word count
- [x] language (untested)
- [x] themes
- [ ] Clean and Refactor ...