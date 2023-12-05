<script>
    const data = [
        { id: 1, label: "Github", url: "" },
        { id: 2, label: "Linkedin", url: "" },
        { id: 3, label: "Discord", url: "" }
    ];
</script>



<div class="main">
    {#each data as item (item.id) }
        <div>
            <h1>{item.label}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputate mauris sodales ipsum auctor, lacinia placerat libero ultricies. Duis imperdiet eu orci in pellentesque. Donec at nisl id urna hendrerit imperdiet. Suspendisse et semper nibh.</p>
            <button><a href="/">URL</a></button>
        </div>
    {/each}
</div>


<style>

a{
    text-decoration: none;
    color: white;
}

h1{
    opacity: 0.8;
}

p{
    opacity: 0.5;
}

h1,p,button{
    margin-left: 20px;
}

.main{
    display: flex;
    flex-wrap: wrap;
    background-color: #111;
    margin: 20px;
}

div>div{
    flex: 0 1 100%;
    border-bottom: 1px solid rgb(255, 255, 255,0.2);
    width: 100%;
}

button{
    background-color: black;
    text-decoration: none;
    width: 150px;
    height: 35px;
    border :1px solid rgb(255, 255, 255,0.8);
    color: white;
    margin-bottom: 20px;
}

:global(body){
      background: black;
      color:white;
      width:100%;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 100%; /* Ajustez la largeur maximale selon vos besoins */
      margin: 0 auto; /* Centre le contenu horizontalement */
      overflow-x: hidden; /* Cache la barre de défilement horizontale */

  }


</style>