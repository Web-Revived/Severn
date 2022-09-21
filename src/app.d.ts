// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	interface Locals {
		cartId: string;
	}
	interface Session {
		cartId?: string;
	}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	// interface Stuff {}
}
