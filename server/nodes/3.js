

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/AboutMe/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.981838e8.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f1556a7a.js","_app/immutable/chunks/each.54dfade7.js"];
export const stylesheets = ["_app/immutable/assets/3.4c713cca.css"];
export const fonts = [];
