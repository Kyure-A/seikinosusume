
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESS_TERMCAP_se: string;
	export const ZPLUG_ERROR_LOG: string;
	export const INSIDE_EMACS: string;
	export const npm_package_dev: string;
	export const ZPLUG_LOG_LOAD_FAILURE: string;
	export const USER: string;
	export const LESS_TERMCAP_ue: string;
	export const npm_config_user_agent: string;
	export const ZPLUG_THREADS: string;
	export const STARSHIP_SHELL: string;
	export const npm_node_execpath: string;
	export const npm_package_resolved: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const LESS: string;
	export const HOME: string;
	export const ASDF_DIR: string;
	export const OLDPWD: string;
	export const npm_package_optional: string;
	export const npm_package_json: string;
	export const npm_package_engines_node: string;
	export const FPATH: string;
	export const SUDO_EDITOR: string;
	export const ZPLUG_BIN: string;
	export const _ZPLUG_VERSION: string;
	export const LESS_TERMCAP_so: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const npm_package_integrity: string;
	export const ZPLUG_HOME: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const WSL_DISTRO_NAME: string;
	export const ZPLUG_FILTER: string;
	export const npm_config_save_dev: string;
	export const COLOR: string;
	export const npm_config_metrics_registry: string;
	export const EMACS_VTERM_PATH: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const _ZPLUG_URL: string;
	export const PERIOD: string;
	export const NAME: string;
	export const WSL_INTEROP: string;
	export const LESS_TERMCAP_us: string;
	export const PULSE_SERVER: string;
	export const ZPLUG_LOADFILE: string;
	export const TERM: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const npm_config_cache: string;
	export const ZPLUG_LOG_LOAD_SUCCESS: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const LESSCHARSET: string;
	export const ZPLUG_CACHE_DIR: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const _ZPLUG_PREZTO: string;
	export const _ZPLUG_OHMYZSH: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const npm_lifecycle_script: string;
	export const STARSHIP_CONFIG: string;
	export const SHELL: string;
	export const _ZPLUG_AWKPATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const ZPLUG_PROTOCOL: string;
	export const ZPLUG_REPOS: string;
	export const LESS_TERMCAP_mb: string;
	export const npm_package_dev_optional: string;
	export const LESS_TERMCAP_md: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const npm_package_peer: string;
	export const PWD: string;
	export const LESS_TERMCAP_me: string;
	export const GIT_MERGE_AUTOEDIT: string;
	export const npm_execpath: string;
	export const npm_config_global_prefix: string;
	export const STARSHIP_SESSION_KEY: string;
	export const ZPLUG_USE_CACHE: string;
	export const npm_command: string;
	export const HOSTTYPE: string;
	export const ZPLUG_ROOT: string;
	export const EDITOR: string;
	export const NPM_CONFIG_PREFIX: string;
	export const WSLENV: string;
	export const INIT_CWD: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESS_TERMCAP_se: string;
		ZPLUG_ERROR_LOG: string;
		INSIDE_EMACS: string;
		npm_package_dev: string;
		ZPLUG_LOG_LOAD_FAILURE: string;
		USER: string;
		LESS_TERMCAP_ue: string;
		npm_config_user_agent: string;
		ZPLUG_THREADS: string;
		STARSHIP_SHELL: string;
		npm_node_execpath: string;
		npm_package_resolved: string;
		SHLVL: string;
		npm_config_noproxy: string;
		LESS: string;
		HOME: string;
		ASDF_DIR: string;
		OLDPWD: string;
		npm_package_optional: string;
		npm_package_json: string;
		npm_package_engines_node: string;
		FPATH: string;
		SUDO_EDITOR: string;
		ZPLUG_BIN: string;
		_ZPLUG_VERSION: string;
		LESS_TERMCAP_so: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		npm_package_integrity: string;
		ZPLUG_HOME: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		WSL_DISTRO_NAME: string;
		ZPLUG_FILTER: string;
		npm_config_save_dev: string;
		COLOR: string;
		npm_config_metrics_registry: string;
		EMACS_VTERM_PATH: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		_ZPLUG_URL: string;
		PERIOD: string;
		NAME: string;
		WSL_INTEROP: string;
		LESS_TERMCAP_us: string;
		PULSE_SERVER: string;
		ZPLUG_LOADFILE: string;
		TERM: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		npm_config_cache: string;
		ZPLUG_LOG_LOAD_SUCCESS: string;
		npm_config_node_gyp: string;
		PATH: string;
		LESSCHARSET: string;
		ZPLUG_CACHE_DIR: string;
		NODE: string;
		npm_package_name: string;
		_ZPLUG_PREZTO: string;
		_ZPLUG_OHMYZSH: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		npm_lifecycle_script: string;
		STARSHIP_CONFIG: string;
		SHELL: string;
		_ZPLUG_AWKPATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		ZPLUG_PROTOCOL: string;
		ZPLUG_REPOS: string;
		LESS_TERMCAP_mb: string;
		npm_package_dev_optional: string;
		LESS_TERMCAP_md: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		npm_package_peer: string;
		PWD: string;
		LESS_TERMCAP_me: string;
		GIT_MERGE_AUTOEDIT: string;
		npm_execpath: string;
		npm_config_global_prefix: string;
		STARSHIP_SESSION_KEY: string;
		ZPLUG_USE_CACHE: string;
		npm_command: string;
		HOSTTYPE: string;
		ZPLUG_ROOT: string;
		EDITOR: string;
		NPM_CONFIG_PREFIX: string;
		WSLENV: string;
		INIT_CWD: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
