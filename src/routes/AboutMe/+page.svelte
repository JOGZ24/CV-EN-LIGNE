<script>
  let events = [
    { year: 2023, event: "BUT Informatique 2ème année " },
    { year: 2021, event: "Baccalauréat Générale" },
  ];
</script>

<style>
  img{
    border-radius: 5%;
    margin: 10px;
  }

  .photo {
    margin: 0;
    width: 400px;
  }

  .presentation {
    display: flex;
    text-align: left;
    margin-left: 15%;
    margin-right: 15%;
  }

  .timeline {
    position: relative;
    height: 340px; /* You can adjust the height as needed */
    border-left: 2px solid white; /* Vertical line */
    font-size: 28px;
    margin: 10%;
  }

  .event{
    opacity: 0.5;
  }

  

  .description{
    opacity: 0.7;
    font-size: 9px;
  }

  .presentation > *{
    margin: 30px;
  }

  .timeline > *{
    margin-left: 20px;
  }

  li{
    list-style-type: none;
    font-size: 30px;
    opacity: 0.5;
    
  }

  
 
 

  @media (max-width: 768px) {
    .presentation {
      flex-direction: column;
    }
  }
</style>

<div class="presentation">
  <div class="photo">
    <img src="https://scontent-cdg4-2.xx.fbcdn.net/v/t1.15752-9/401019699_318677844278801_1073867897395010095_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=x6cucBPnkWoAX806AvK&_nc_ht=scontent-cdg4-2.xx&oh=03_AdSWGTWTmXxNTaG6XEFMH1_1mWVzeJ3FSXHPuEw1J0yejw&oe=659115AF" width="400" height="auto" alt="/">
  </div>
  <div class="all">
    <div class="timeline">
    {#each events as { year, event }}
      <div class="label" style="left: {year}px; top: -20px;">
        <p>-{year}</p>
      </div>
      <div class="event" style="left: {year}px; top: 50%;">{event}</div>
      <p class="description"> tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a</p>
    {/each}
    </div>
    <div class="pres">
      <p>tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a tae rhoncus vitae, aliquet sit amet purus. Suspendisse vulputat Lorem ipsum dolor sit a</p>
    </div>
  </div>
</div>
