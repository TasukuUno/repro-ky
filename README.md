# repro-ky
（ issue link: coming soon :smile: ）

## What's happened?

I wanted to set a search param by default using `ky.create()` like:

```js
const client = ky.create({
  prefixUrl: 'http://localhost:3000',
  searchParams: { a: 'a' },
});
```

and when I use the ky instance like:

```js
await client.get('api', { searchParams: { b: 'b' } }).json();
```

Unfortunately, the request URL looks like this....

```
http://localhost:3000/api?a=a&headers=%5Bobject+Object%5D&b=b
```

:dizzy_face:&nbsp;  < `headers=%5Bobject+Object%5D`

## How to reproduce?

### 1. set up

```
npm i
```

### 2. start dev server

```
npm start
```

This server helps us to know real request from ky client.

### 3. run example scripts

#### on Browser

1. open http://localhost:3000
2. see console

#### on Node.js

1. run `node.js`
```
npm run node
```
2. see stdout in terminals 
