

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3c800350.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f1556a7a.js","_app/immutable/chunks/singletons.e01db2e3.js"];
export const stylesheets = [];
export const fonts = [];
