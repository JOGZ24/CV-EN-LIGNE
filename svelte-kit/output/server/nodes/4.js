

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ContactMe/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.164cfd10.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f1556a7a.js","_app/immutable/chunks/each.54dfade7.js"];
export const stylesheets = ["_app/immutable/assets/4.429f5397.css"];
export const fonts = [];
