export const debouncer = () => {
	let timeoutId: unknown;

	return function () {
		return new Promise<void>((resolve) => {
			// Limpa o timeout anterior se houver
			clearTimeout(timeoutId);

			// Configura um novo timeout para aguardar 500ms
			timeoutId = setTimeout(() => {
				resolve(); // Resolve a Promise após o atraso
			}, 500);
		});
	};
};
