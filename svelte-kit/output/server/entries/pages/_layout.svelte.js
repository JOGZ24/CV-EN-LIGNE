import { c as create_ssr_component, e as each, b as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{fill:white !important}svg.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj:hover{fill:#ff3e00 !important}nav.svelte-y7f1vj>ul.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{position:relative;display:inline-flex;text-decoration:none;color:white}li.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{list-style-type:none}.home.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{border-bottom:3px solid #ff3e00}.navlong.svelte-y7f1vj>ul.svelte-y7f1vj>li.svelte-y7f1vj.svelte-y7f1vj{display:block;margin-bottom:5px;list-style-type:none}.navlong.svelte-y7f1vj>ul.svelte-y7f1vj>li.svelte-y7f1vj>a.svelte-y7f1vj{text-decoration:none;color:white;margin-right:50px;padding:5px}a.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj:not(.homeshort):hover{border-bottom:2px solid #ff3e00;color:#ff3e00}a.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{text-decoration:none;color:white}.navlong.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{text-align:center;font-size:23px;margin-top:25px;opacity:0.7}.navshort.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{display:none}@media(max-width: 768px){.navlong.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{display:none}.navshort.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj.svelte-y7f1vj{display:block;opacity:0.7;font-size:23px;background-color:#111}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      id: 1,
      label: "About Me",
      url: "/AboutMe"
    },
    {
      id: 2,
      label: "Projects",
      url: "/Projects"
    },
    {
      id: 3,
      label: "Experiences",
      url: "/Experience"
    },
    {
      id: 4,
      label: "Contact Me",
      url: "/ContactMe"
    }
  ];
  $$result.css.add(css);
  return `<div><nav class="navshort svelte-y7f1vj"><ul class="svelte-y7f1vj"><li class="svelte-y7f1vj"><a href="" class="homeshort svelte-y7f1vj" data-svelte-h="svelte-1whsw7x"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="svelte-y7f1vj"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"></path><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"></path></svg></a></li> <li class="svelte-y7f1vj">${``}</li></ul></nav> <nav class="navlong svelte-y7f1vj"><ul class="svelte-y7f1vj"><li class="svelte-y7f1vj" data-svelte-h="svelte-q47scd"><a href="/" class="home svelte-y7f1vj"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" class="svelte-y7f1vj"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"></path></svg></a></li> ${each(data, (item) => {
    return `<li class="${"li" + escape(item.id, true) + " svelte-y7f1vj"}"><a${add_attribute("href", item.url, 0)} class="svelte-y7f1vj">${escape(item.label)}</a> </li>`;
  })}</ul></nav> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
