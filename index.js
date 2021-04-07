class EndBreakError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

const pBreak = async value => {
	throw new EndBreakError(value);
};

pBreak.end = async error => {
	if (error instanceof EndBreakError) {
		return error.value;
	}

	throw error;
};

export default pBreak;
