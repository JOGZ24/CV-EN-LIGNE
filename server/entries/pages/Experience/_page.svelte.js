import { c as create_ssr_component, e as each, b as escape, d as add_attribute } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1m8nfji>div.svelte-1m8nfji.svelte-1m8nfji{position:relative}div.svelte-1m8nfji>div.svelte-1m8nfji>span.svelte-1m8nfji{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:18px;color:white}img.svelte-1m8nfji.svelte-1m8nfji.svelte-1m8nfji{margin:30px}body{background:black;color:white;width:100%;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;max-width:100%;margin:0 auto;overflow-x:hidden}.main.svelte-1m8nfji.svelte-1m8nfji.svelte-1m8nfji{display:flex;flex-wrap:wrap}div.svelte-1m8nfji>div.svelte-1m8nfji.svelte-1m8nfji{margin-top:50px;flex:0 0 20%;margin-left:30px;margin-right:30px ;background-color:#111;text-align:center;border-radius:15px}div.svelte-1m8nfji>div.svelte-1m8nfji.svelte-1m8nfji:hover{border:1px solid rgb(255, 62, 0,0.3)}@media(max-width: 768px){.main.svelte-1m8nfji.svelte-1m8nfji.svelte-1m8nfji{flex-direction:column}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      id: 1,
      niveau: "",
      label: "svelte",
      url: "https://imgs.search.brave.com/XMKRyYpA1n75pckJPcxeojR9cgqlIY8DvZNLfk9aVIg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFiL1N2ZWx0ZV9M/b2dvLnN2Zw.svg"
    },
    {
      id: 2,
      niveau: "",
      label: "Java",
      url: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/643px-Java_Logo.svg.png?20061227215918"
    },
    {
      id: 3,
      niveau: "",
      label: "HTML",
      url: "https://imgs.search.brave.com/7zCAX_ito1ifrA8Dy6FPqy7PccoSStu4ioNxr7HdV1o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OC8wNS8xMS8xNi9s/b2dvLTI1ODI3NDhf/MTI4MC5wbmc"
    },
    {
      id: 4,
      niveau: "",
      label: "CSS",
      url: "https://imgs.search.brave.com/ZKFPFakW70SfHuPGxuPncjU9SaelVKeCM3hM3vnEygI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OC8wNS8xMS8xNi9s/b2dvLTI1ODI3NDdf/MTI4MC5wbmc"
    },
    {
      id: 5,
      niveau: "",
      label: "SQL",
      url: "https://imgs.search.brave.com/K-J9kvPa3ZAI6BpZb006rl5Zbt7TTGzUHcMF6KPXaTI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI5L1Bvc3RncmVz/cWxfZWxlcGhhbnQu/c3Zn.svg"
    },
    {
      id: 6,
      niveau: "",
      label: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      id: 7,
      niveau: "",
      label: "Language C",
      url: "https://imgs.search.brave.com/kbIST97wBjybu79oHpie4VbNH6CrI5nfzrMoOAS5OvQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0NfUHJvZ3Jh/bW1pbmdfTGFuZ3Vh/Z2Uuc3Zn.svg"
    },
    {
      id: 8,
      niveau: "",
      label: "Python",
      url: "https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n"
    }
  ];
  let hoveredItem = null;
  $$result.css.add(css);
  return `<body><div class="main svelte-1m8nfji">${each(data, (item) => {
    return `  <div class="d svelte-1m8nfji">${hoveredItem === item ? `<span class="svelte-1m8nfji">${escape(item.label)}</span>` : `<img${add_attribute("src", item.url, 0)} alt="" width="auto" height="150px" class="svelte-1m8nfji">`} </div>`;
  })}</div> </body>`;
});
export {
  Page as default
};
