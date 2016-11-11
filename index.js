'use strict';

class EndBreakError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

module.exports = val => Promise.reject(new EndBreakError(val));

module.exports.end = err => err instanceof EndBreakError ? err.value : Promise.reject(err);
