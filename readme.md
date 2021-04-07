# p-break

> Break out of a promise chain

See ["How do I break out of a promise chain?"](https://github.com/sindresorhus/promise-fun#how-do-i-break-out-of-a-promise-chain) for a better way.

## Install

```
$ npm install p-break
```

## Usage

Here the `onlyRunConditional` promises are skipped if `conditional` is falsy:

```js
import pBreak from 'p-break';

alwaysRun1()
	.then(() => alwaysRun2())
	.then(conditional => conditional || pBreak('🦄'))
	.then(() => onlyRunConditional1())
	.then(() => onlyRunConditional2())
	.then(() => onlyRunConditional3())
	.then(() => onlyRunConditional4())
	.catch(pBreak.end)
	.then(console.log);
	//=> '🦄'
```

## API

### pBreak([value])

Starts the break. Any `.then()`'s between here and `pBreak.end()` are skipped.

### value

Value to pass down the chain after `pBreak.end()`.

### pBreak.end

Ends the break. Make sure not to have any other `.catch()` handlers between `pBreak()` and here.

## Related

- [p-if](https://github.com/sindresorhus/p-if) - Conditional promise chains
- [More…](https://github.com/sindresorhus/promise-fun)
