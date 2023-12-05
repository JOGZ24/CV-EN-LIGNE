import { c as create_ssr_component, e as each, b as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-jc3vmm.svelte-jc3vmm{text-decoration:none;color:white}h1.svelte-jc3vmm.svelte-jc3vmm{opacity:0.8}p.svelte-jc3vmm.svelte-jc3vmm{opacity:0.5}h1.svelte-jc3vmm.svelte-jc3vmm,p.svelte-jc3vmm.svelte-jc3vmm,button.svelte-jc3vmm.svelte-jc3vmm{margin-left:20px}.main.svelte-jc3vmm.svelte-jc3vmm{display:flex;flex-wrap:wrap;background-color:#111;margin:20px}div.svelte-jc3vmm>div.svelte-jc3vmm{flex:0 1 100%;border-bottom:1px solid rgb(255, 255, 255,0.2);width:100%}button.svelte-jc3vmm.svelte-jc3vmm{background-color:black;text-decoration:none;width:150px;height:35px;border:1px solid rgb(255, 255, 255,0.8);color:white;margin-bottom:20px}body{background:black;color:white;width:100%;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;max-width:100%;margin:0 auto;overflow-x:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    { id: 1, label: "Github", url: "" },
    { id: 2, label: "Linkedin", url: "" },
    { id: 3, label: "Discord", url: "" }
  ];
  $$result.css.add(css);
  return `<div class="main svelte-jc3vmm">${each(data, (item) => {
    return `<div class="svelte-jc3vmm"><h1 class="svelte-jc3vmm">${escape(item.label)}</h1> <p class="svelte-jc3vmm" data-svelte-h="svelte-bhhs8b">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputate mauris sodales ipsum auctor, lacinia placerat libero ultricies. Duis imperdiet eu orci in pellentesque. Donec at nisl id urna hendrerit imperdiet. Suspendisse et semper nibh.</p> <button class="svelte-jc3vmm" data-svelte-h="svelte-30twsz"><a href="/" class="svelte-jc3vmm">URL</a></button> </div>`;
  })} </div>`;
});
export {
  Page as default
};
