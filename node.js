/***
 * 1. start dev server: npm start
 * 2. open another terminal
 * 3. run this script: node node.js
 * 4. see stdout in terminals
 */
const ky = require('ky-universal');
const clientSearchParams = ky.create({
  prefixUrl: 'http://localhost:3000',
  searchParams: { a: 'a' },
});

const clientJSON = ky.create({
  prefixUrl: 'http://localhost:3000',
  json: { x: 'x' },
});

(async() => {
  const result1 = await clientSearchParams.get('api').json();
  console.log('result1', result1);
  /**
    { method: 'GET', query: { a: 'a' }, body: {} }
   */

  const result2 = await clientSearchParams.get('api', { searchParams: { b: 'b' } }).json();
  console.log('result2', result2);
  /**
    {
      method: 'GET',
      query: { a: 'a', headers: '[object Object]', b: 'b' },
                       ^^^^^^^^^^^^^^^^^^^^^^^^^
      body: {}
    }
   */

  const result3 = await clientJSON.post('api').json();
  console.log('result3', result3);
  /**
   { method: 'POST', query: {}, body: { x: 'x' } }
   */

  const result4 = await clientJSON.post('api', { json: { y: 'y' } }).json();
  console.log('result4', result4);
  /**
   { method: 'POST', query: {}, body: { x: 'x', headers: {}, y: 'y' } }
                                                ^^^^^^^^^^^
   */
})()
