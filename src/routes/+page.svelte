

<script>
  import Footer from "../components/Footer.svelte";
</script>

<body>
  <div class="presentation">
      <p> 👋🏻  Salut, je suis Julien Bouin, un étudiant de 19 ans en 2ème année de BUT Informatique. 💻 Spécialisé dans le développement d'applications, je suis actuellement à la recherche de stages dans ce domaine. Ma force réside dans la programmation et la résolution de problèmes. Explorez mes réalisations et voyons comment nous pouvons collaborer.🤝  </p>
  </div>


<footer><Footer></Footer></footer>

</body>
  


  <style>
    p{
        box-sizing: border-box;
        position:absolute;
        top: 24%;
        color: white;
        font-size: 2.5vw;
        opacity: 0.8;
        text-decoration: underline;
        display: flex;
        width: 70%;
        left: 14%;
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
    footer{
      position:absolute;
      bottom:0;  /* on le colle en bas */
      width:100%;
      height:100px;   /* Hauteur du pied de page */
    }

    .presentation{
      text-align: center;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
    }
   
  </style>
  