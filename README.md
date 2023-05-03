# @deezy-inc/web-ai

AI in the browser, powered by micropayments

## Installation

```bash
npm install @deezy-inc/web-ai # or yarn add @deezy-inc/web-ai
```

## Usage

For a live demo, see: https://github.com/deezy-inc/web-ai-demo-site

NodeJs & Browser

```js
import { openai, payouts } from '@deezy-inc/web-ai'

payouts.setPayoutLightningAddress('deezy@getalby.com') // Optional

const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{
        "role": "system",
        "content": "You are Web AI - a version of ChatGPT gated by lightning micropayments"
    }]
})
```

## Developing

1. Install [`just`](https://just.systems/)
2. `just -l`

## License

Public domain.
