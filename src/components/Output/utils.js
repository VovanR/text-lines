function formatText(text) {
	const out = text
		.split('\n')
		.sort()
		.reduce((a, b) => {
			const line = b.trim();
			if (line !== '' && !a.includes(line)) {
				a.push(line);
			}
			return a;
		}, [])
		.join('\n');

	return out;
}

export {
  formatText,
}
