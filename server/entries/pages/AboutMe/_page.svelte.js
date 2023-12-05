import { c as create_ssr_component, e as each, b as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1hvwte0.svelte-1hvwte0{border-radius:5%;margin:10px}.photo.svelte-1hvwte0.svelte-1hvwte0{margin:0;width:400px}.presentation.svelte-1hvwte0.svelte-1hvwte0{display:flex;text-align:left;margin-left:15%;margin-right:15%}.timeline.svelte-1hvwte0.svelte-1hvwte0{position:relative;height:340px;border-left:2px solid white;font-size:28px;margin:10%}.event.svelte-1hvwte0.svelte-1hvwte0{opacity:0.5}.description.svelte-1hvwte0.svelte-1hvwte0{opacity:0.7;font-size:9px}.presentation.svelte-1hvwte0>.svelte-1hvwte0{margin:30px}.timeline.svelte-1hvwte0>.svelte-1hvwte0{margin-left:20px}@media(max-width: 768px){.presentation.svelte-1hvwte0.svelte-1hvwte0{flex-direction:column}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let events = [
    {
      year: 2023,
      event: "BUT Informatique 2ème année "
    },
    {
      year: 2021,
      event: "Baccalauréat Générale"
    }
  ];
  $$result.css.add(css);
  return `<div class="presentation svelte-1hvwte0"><div class="photo svelte-1hvwte0" data-svelte-h="svelte-1rzdxny"><img src="https://scontent-cdg4-2.xx.fbcdn.net/v/t1.15752-9/401019699_318677844278801_1073867897395010095_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=x6cucBPnkWoAX806AvK&_nc_ht=scontent-cdg4-2.xx&oh=03_AdSWGTWTmXxNTaG6XEFMH1_1mWVzeJ3FSXHPuEw1J0yejw&oe=659115AF" width="400" height="auto" alt="/" class="svelte-1hvwte0"></div> <div class="all svelte-1hvwte0"><div class="timeline svelte-1hvwte0">${each(events, ({ year, event }) => {
    return `<div class="label svelte-1hvwte0" style="${"left: " + escape(year, true) + "px; top: -20px;"}"><p>-${escape(year)}</p></div> <div class="event svelte-1hvwte0" style="${"left: " + escape(year, true) + "px; top: 50%;"}">${escape(event)}</div> <p class="description svelte-1hvwte0" data-svelte-h="svelte-10atgrm">tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a</p>`;
  })}</div> <div class="pres" data-svelte-h="svelte-1f3soiv"><p>tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a</p></div></div></div>`;
});
export {
  Page as default
};
