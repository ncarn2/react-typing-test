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

## TODO
increase specificity: 
```js
const MyStyledComponent = styled(AlreadyStyledComponent)`
  &&& {
    color: palevioletred;
    font-weight: bold;
  }
`
```

use a different font:
```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
```



## Roadmap

- [x] word count
- [x] language (untested)
- [x] themes
- [ ] refactor (the ongoing battle)
