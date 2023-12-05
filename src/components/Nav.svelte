<script>
    const data = [
        { id: 1, label: "About Me", url: "/AboutMe" },
        { id: 2, label: "Projects", url: "/Projects" },
        { id: 3, label: "Experiences", url: "/Experience" },
        { id: 4, label: "Contact Me", url: "/ContactMe" }
    ];

    let showMenu = false;

    function changeShowMenu(){
        showMenu=!showMenu;
    }
</script>

<div>
    <nav class="navshort">
        <ul>
            <li><a href="" class="homeshort" on:click={changeShowMenu}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg></a></li>
            <li>
                {#if showMenu}
                    <ul>
                        {#each data as item (item.id)}
                            <li>
                                <a href="{item.url}">{item.label}</a>
                            </li>
                        {/each}
                        
                    </ul>
                {/if}
            </li>
        </ul>
       
    </nav>
    <nav class="navlong">
        <ul>
            <li><a href="/" class="home"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg></a></li>
            {#each data as item (item.id)}
                <li class="li{item.id}">
                    <a href="{item.url}">{item.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>


<style>

    
    svg {
      fill: white !important;
    }

    svg:hover{
        fill: #ff3e00 !important;
    }

    nav > ul {
        position: relative;
        display: inline-flex;
        text-decoration: none;
        color: white;
    }

    li{
        list-style-type: none;
    }

    .home{
        border-bottom: 3px solid #ff3e00;
    }

    .navlong > ul > li {
        display: block;
        margin-bottom: 5px;
        list-style-type: none;
    }

    .navlong > ul > li > a {
        text-decoration: none;
        color: white;
        margin-right: 50px; /* Espacement horizontal entre les balises <a> */
        padding: 5px; /* Ajoutez un peu de marge intérieure pour plus d'espace */
    }

    a:not(.homeshort):hover{
        border-bottom: 2px solid #ff3e00;
        color:#ff3e00;
    }

    a{
        text-decoration: none;
        color:white;
    }


    .navlong {
        text-align: center;
        font-size: 23px;
        margin-top: 25px;
        opacity: 0.7;
    }
    .navshort{
        display: none;
    }

    @media (max-width: 768px) {
    .navlong{
        display: none;
    }

    .navshort{
        display: block;
        opacity: 0.7;
        font-size: 23px;
        background-color: #111;
    }
  }
</style>


    