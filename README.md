# React Typing Test

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

## Roadmap

- [x] word count
- [x] language (untested)
- [ ] timer
- [ ] themes
- [ ] refactor (the ongoing battle)