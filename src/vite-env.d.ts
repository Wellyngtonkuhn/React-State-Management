/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_MARVEL_PUBLIC_KEY: string;
	readonly VITE_PRIVATE_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
