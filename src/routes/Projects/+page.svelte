<script>
    import { onMount } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    
    /**
     * @type {any[]}
     */
    let projects = []

  
    onMount(async () => {
      fetch('http://localhost:8081/')
      .then(response => response.json())
      .then(result => projects = result)
    })

    let div1 = true;
    let div2=true;
    let div3=true;
    let div4=true;

    let div1expand=false;
    let div2expand=false;
    let div3expand=false;
    let div4expand=false;
    
    function showDiv1(){
      div1=!div1;
      div1expand=!div1expand;
    }

    function showDiv2(){
      div2=!div2;
      div2expand=!div2expand;
    }

    function showDiv3(){
      div3=!div3;
      div3expand=!div3expand;
    }

    function showDiv4(){
      div4=!div4;
      div4expand=!div4expand;
    }

    
    
    
   


</script>

<main>
  <div class="projects">
    {#each projects as project (project.id)}
      {#if div1===true && project.id===1 && div2expand===false && div3expand===false && div4expand===false }
        <div class="d{project.id}">
          <h1 class="name">{project.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputate mauris sodales ipsum auctor, lacinia placerat libero ultricies. Duis imperdiet eu orci in pellentesque. Donec at nisl id urna hendrerit imperdiet. Suspendisse et semper nibh.</p>
          <a href="" on:click={showDiv1} >En savoir plus</a>
        </div>
      {:else if div2===true && project.id===2 && div1expand===false && div3expand===false && div4expand===false}
        <div class="d{project.id}">
          <h1 class="name">{project.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputate mauris sodales ipsum auctor, lacinia placerat libero ultricies. Duis imperdiet eu orci in pellentesque. Donec at nisl id urna hendrerit imperdiet. Suspendisse et semper nibh.</p>
          <a href="" on:click={showDiv2}>En savoir plus</a>
        </div>
        
      {:else if div3===true && project.id===3 && div1expand===false && div2expand===false && div4expand===false}
        <div class="d{project.id}">
          <h1 class="name">{project.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputate mauris sodales ipsum auctor, lacinia placerat libero ultricies. Duis imperdiet eu orci in pellentesque. Donec at nisl id urna hendrerit imperdiet. Suspendisse et semper nibh.</p>
          <a href="" on:click={showDiv3}>En savoir plus</a>
        </div>
      {:else if div4===true && project.id===4 && div1expand===false && div2expand===false && div3expand===false}
        <div class="d{project.id}">
          <h1 class="name">{project.name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputate mauris sodales ipsum auctor, lacinia placerat libero ultricies. Duis imperdiet eu orci in pellentesque. Donec at nisl id urna hendrerit imperdiet. Suspendisse et semper nibh.</p>
          <a href="" on:click={showDiv4}>En savoir plus</a>
        </div>


      {:else}  
        {#if div1===false && project.id===1}
          <div class="dd{project.id}">
            <p>{project.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat</p>
            <a href="" on:click={showDiv1}>En savoir moins</a>
           </div>
        {/if}
        {#if div2===false && project.id===2 }
        <div class="dd{project.id}">
          <p>{project.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat</p>
          <a href="" on:click={showDiv2}>En savoir moins</a>
         </div>
        {/if}
        {#if div3===false && project.id===3}
        <div class="dd{project.id}">
          <p>{project.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat</p>
          <a href="" on:click={showDiv3}>En savoir moins</a>
         </div>
        {/if}
        {#if div4===false && project.id===4}
        <div class="dd{project.id}">
          <p>{project.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputatLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, vestibulum vitae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat</p>
          <a href="" on:click={showDiv4}>En savoir moins</a>
         </div>
        {/if}
      {/if}
    {/each}
  </div>
</main>


  




<style>

  .comp{
    text-align: center;
  }
 
  
  .projects {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .d1, .d2, .d3, .d4 {
    background-color: #111;
    flex: 0 0 calc(50% - 30px);
    margin: 15px;
    padding: 15px;
    box-sizing: border-box;
  }

  .dd1,.dd2,.dd3,.dd4 {
    background-color: #111;
    flex: 0 0 97%;
    margin: 15px;
    padding: 15px;
    box-sizing: border-box;
  }

 
  p {
    opacity: 0.5;
  }

  

  div:not(.projects):hover{
    border: 1px solid rgb(255, 62, 0,0.3);
  }

  h1, p, a {
    margin: 15px;
  }

  * {
    margin-top: 1%;
    color: white;
  }

  @media (max-width: 768px) {
    .projects {
      flex-direction: column;
      align-items: center;
    }

    .d1, .d2, .d3, .d4, .dd2, .dd3, .dd4, div>div:not(.projects, .dd1) {
      flex: 0 0 calc(100% - 30px);
    }

    .dd1 {
      flex: 0 0 calc(100% - 60px);
    }
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
