# Story Book 1

---

## Introduction

Interactive UI component dev & test

## Pre Installation

already install via `create-react-app`

## Installation

1. go to project path via CLI
2. run this `npm install @storybook/react --save-dev` to install storybook library for react

3. add NPM script on our `package.json`
```sh
{
    "scripts": {
        "storybook": "start-storybook -p 9001 -c .storybook"
    }
}
```

4. Create folder `.storybook` & `stories`. In `.storybook` create file named `config.js`. In `stories` folder create file named `index.js`
   
5. in `config.js` file, write code like this.

```js
import { configure } from '@storybook/react';
function loadStories() {
    require('../stories/index.js');
    // we can require as many stories as we need.
}

configure(loadStories, module);
```

6. On `index.js` file. write code like this.

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('with text', () => (
        <Buton>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ))
```

7. Run on your CLI with this command. `npm run storybook`. After that it will show us what address & port should we look via browser.
   
   ![](./assets/storybook.png)