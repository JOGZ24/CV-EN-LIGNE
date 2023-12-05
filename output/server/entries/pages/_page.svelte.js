import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1k7pcoi.svelte-1k7pcoi{display:flex;justify-content:center;margin-left:30%;margin-right:30%;padding:10px;opacity:0.9;border-bottom:1px solid #ff3e00}nav.svelte-1k7pcoi>svg.svelte-1k7pcoi{margin:0 70px}svg.svelte-1k7pcoi.svelte-1k7pcoi{fill:white !important}svg.svelte-1k7pcoi.svelte-1k7pcoi:hover{fill:#ff3e00 !important}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer data-svelte-h="svelte-1sua0ue"><nav class="svelte-1k7pcoi"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="svelte-1k7pcoi"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="svelte-1k7pcoi"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="svelte-1k7pcoi"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></nav> </footer>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1m6pg8z{box-sizing:border-box;position:absolute;top:24%;color:white;font-size:2.5vw;opacity:0.8;text-decoration:underline;display:flex;width:70%;left:14%}body{background:black;color:white;width:100%;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;max-width:100%;margin:0 auto;overflow-x:hidden}footer.svelte-1m6pg8z{position:absolute;bottom:0;width:100%;height:100px}.presentation.svelte-1m6pg8z{text-align:center;box-sizing:border-box;display:flex;flex-wrap:wrap}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body><div class="presentation svelte-1m6pg8z" data-svelte-h="svelte-1e55agh"><p class="svelte-1m6pg8z">👋🏻  Salut, je suis Julien Bouin, un étudiant de 19 ans en 2ème année de BUT Informatique. 💻 Spécialisé dans le développement d&#39;applications, je suis actuellement à la recherche de stages dans ce domaine. Ma force réside dans la programmation et la résolution de problèmes. Explorez mes réalisations et voyons comment nous pouvons collaborer.🤝</p></div> <footer class="svelte-1m6pg8z">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer> </body>`;
});
export {
  Page as default
};
