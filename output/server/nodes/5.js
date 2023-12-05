

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.79217987.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f1556a7a.js","_app/immutable/chunks/each.54dfade7.js"];
export const stylesheets = ["_app/immutable/assets/5.7c1ab0d4.css"];
export const fonts = [];
