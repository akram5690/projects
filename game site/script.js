const games = [
    {
        name: "THE LAST OF US",
        description: "Experience a gripping post-apocalyptic world.",
        image: "https://cdn.europosters.eu/image/350/posters/the-last-of-us-key-art-i127761.jpg"
    },
    {
        name: "ZELDA",
        description: "Embark on a magical adventure in Hyrule.",
        image: "https://bananaroad.com/cdn/shop/products/pst1131_Zelda_Breath_of_the-_Wild_BOTW_Poster_large.jpg?v=1608456234"
    },
    {
        name: "RESISTANCE FALL OF MAN",
        description: "Fight for humanity's survival against an alien threat.",
        image: "https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/43.jpg"
    },
    {
        name: "ASSASSIN'S CREED 3",
        description: "Step into the chaos of the American Revolution as Connor, a master assassin fighting for freedom.",
        image: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2012/12/AC3.jpg"
    },
    {
        name: "GTA 5",
        description: "Explore the vast world of Los Santos in this action-packed crime thriller with three protagonists.",
        image: "https://preview.redd.it/grand-theft-auto-5-was-released-on-this-day-10-years-ago-on-v0-80d0fui3apob1.jpg?width=1080&crop=smart&auto=webp&s=aaa3e2695da427ef4e9a115ee2bb570b222d1f9c"
    },
    {
        name: "Street Fighter 6",
        description: "Fight for victory in dynamic battles featuring iconic characters and thrilling new mechanics.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHcxOQEevOWVTxAJ8vaoxd4h4BxO2S7sCijd0Ad6TWpL-YUezXHWfvvVcRrFfy-UjcnTnxRQ"
    },
    {
        name: "Mortal Kombat 11",
        description: "Unleash brutal combat moves and cinematic fatalities in this intense fighting game",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png"
    },
    {
        name: "ARK: Survival Evolved",
        description: "Survive in a prehistoric world filled with dinosaurs and mysterious dangers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUN6VTtd4yjpaNILuMd9JP6vIRe43gMKXbQA&s"
    },
    {
        name: "Shadow of Tomb Raider",
        description: "Join Lara Croft in her journey to prevent a Mayan apocalypse and discover ancient secrets.",
        image: "https://image.api.playstation.com/vulcan/img/cfn/11307kGDEQ-Af4VjkwzfffuEE2DIn5-r1kMp86kg5PyUc7morSMv04cMbucnKivYNnLJl5Y11Ys7pXuLan1YW7zg1XsxKtb0.png"
    },
    {
        name: "Far Cry 7",
        description: "Experience a gripping story of revolution and chaos in a captivating open world.",
        image: "https://i.ytimg.com/vi/5fMhOVfdu7E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBU9albeV0Rz8B9KAXVKB2QzER8fg"
    },
    {
        name: "Marvel's Spider-Man Remastered",
        description: "Swing through New York City as Spider-Man, battling villains and uncovering thrilling mysteries.",
        image: "https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_f3u9.jpg"
    },
    {
        name: "Final Fantasy XIV",
        description: "Join epic battles and explore a vibrant world in this critically acclaimed MMORPG.",
        image: "https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_3tjt.jpg"
    },
    {
        name: "Tekken 8",
        description: "Engage in fierce combat with legendary fighters, exploring new gameplay mechanics and intense rivalries in the latest installment of the iconic series.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLemIGXJw2Tn2UcEc43fsOt2Xie23XD180BUCrQAw6AkQZ97Iy_BiQ4g2RK36mTdZqG4rRIg"
    },    
    {
        name: "God of War Ragnarök",
        description: "Embark on an epic journey across the realms, battling gods and monsters in a high-stakes fight to stop the impending apocalypse.",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"
    }

];

let gamecontener = document.getElementById("game-cont");

games.forEach(game => {
    gamecontener.innerHTML += `
    <div class="col">
    <div class="card h-100 w-100 border-0 shadow-sm">
      <img src="${game.image}"
        class="card-img-top rounded" alt="The Last of Us">
      <div class="card-body">
        <h5 class="card-title">${game.name}</h5>
        <p class="card-text">${game.description}</p>
        <a href="#" class="btn btn-primary">
          <i class="bi bi-bag-fill"></i> Buy Now
        </a>
      </div>
    </div>
  </div>    
    `

});


const mostplay = [
    {
        name: "God of War Ragnarök",
        description: "Embark on an epic journey across the realms, battling gods and monsters in a high-stakes fight to stop the impending apocalypse.",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"
    },
    {
        name: "Tekken 8",
        description: "Engage in fierce combat with legendary fighters, exploring new gameplay mechanics and intense rivalries in the latest installment of the iconic series.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLemIGXJw2Tn2UcEc43fsOt2Xie23XD180BUCrQAw6AkQZ97Iy_BiQ4g2RK36mTdZqG4rRIg"
    },
    {
        name: "GTA 5",
        description: "Explore the vast world of Los Santos in this action-packed crime thriller with three protagonists.",
        image: "https://preview.redd.it/grand-theft-auto-5-was-released-on-this-day-10-years-ago-on-v0-80d0fui3apob1.jpg?width=1080&crop=smart&auto=webp&s=aaa3e2695da427ef4e9a115ee2bb570b222d1f9c"
    },
    {
        name: "ASSASSIN'S CREED 3",
        description: "Step into the chaos of the American Revolution as Connor, a master assassin fighting for freedom.",
        image: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2012/12/AC3.jpg"
    },
    {
        name: "Street Fighter 6",
        description: "Fight for victory in dynamic battles featuring iconic characters and thrilling new mechanics.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHcxOQEevOWVTxAJ8vaoxd4h4BxO2S7sCijd0Ad6TWpL-YUezXHWfvvVcRrFfy-UjcnTnxRQ"
    },
    {
        name: "Final Fantasy XIV",
        description: "Join epic battles and explore a vibrant world in this critically acclaimed MMORPG.",
        image: "https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_3tjt.jpg"
    },
    {
        name: "Far Cry 7",
        description: "Experience a gripping story of revolution and chaos in a captivating open world.",
        image: "https://i.ytimg.com/vi/5fMhOVfdu7E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBU9albeV0Rz8B9KAXVKB2QzER8fg"
    },
    {
        name: "THE LAST OF US",
        description: "Experience a gripping post-apocalyptic world.",
        image: "https://cdn.europosters.eu/image/350/posters/the-last-of-us-key-art-i127761.jpg"
    },
    {
        name: "RESISTANCE FALL OF MAN",
        description: "Fight for humanity's survival against an alien threat.",
        image: "https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/43.jpg"
    },


    {
        name: "Shadow of Tomb Raider",
        description: "Join Lara Croft in her journey to prevent a Mayan apocalypse and discover ancient secrets.",
        image: "https://image.api.playstation.com/vulcan/img/cfn/11307kGDEQ-Af4VjkwzfffuEE2DIn5-r1kMp86kg5PyUc7morSMv04cMbucnKivYNnLJl5Y11Ys7pXuLan1YW7zg1XsxKtb0.png"
    }

];

let mgc = document.getElementById("most-game");

mostplay.forEach(most => {
    mgc.innerHTML += `
    <div class="col">
    <div class="card h-100 w-100 border-0 shadow-sm">
      <img src="${most.image}"
        class="card-img-top rounded" alt="The Last of Us">
      <div class="card-body">
        <h5 class="card-title">${most.name}</h5>
        <p class="card-text">${most.description}</p>
        <a href="#" class="btn btn-primary">
          <i class="bi bi-bag-fill"></i> Buy Now
        </a>
      </div>
    </div>
  </div>    
    `

});


const topplay = [
    {
        name: "God of War Ragnarök",
        description: "Embark on an epic journey across the realms, battling gods and monsters in a high-stakes fight to stop the impending apocalypse.",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"
    },
    {
        name: "Tekken 8",
        description: "Engage in fierce combat with legendary fighters, exploring new gameplay mechanics and intense rivalries in the latest installment of the iconic series.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLemIGXJw2Tn2UcEc43fsOt2Xie23XD180BUCrQAw6AkQZ97Iy_BiQ4g2RK36mTdZqG4rRIg"
    },
    {
        name: "GTA 5",
        description: "Explore the vast world of Los Santos in this action-packed crime thriller with three protagonists.",
        image: "https://preview.redd.it/grand-theft-auto-5-was-released-on-this-day-10-years-ago-on-v0-80d0fui3apob1.jpg?width=1080&crop=smart&auto=webp&s=aaa3e2695da427ef4e9a115ee2bb570b222d1f9c"
    },
    {
        name: "Street Fighter 6",
        description: "Fight for victory in dynamic battles featuring iconic characters and thrilling new mechanics.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHcxOQEevOWVTxAJ8vaoxd4h4BxO2S7sCijd0Ad6TWpL-YUezXHWfvvVcRrFfy-UjcnTnxRQ"
    },
    {
        name: "ASSASSIN'S CREED 3",
        description: "Step into the chaos of the American Revolution as Connor, a master assassin fighting for freedom.",
        image: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2012/12/AC3.jpg"
    },
    {
        name: "Mortal Kombat 11",
        description: "Unleash brutal combat moves and cinematic fatalities in this intense fighting game",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png"
    },
    
];

let TGP = document.getElementById("top-game");

topplay.forEach(top => {
    TGP.innerHTML += `
    <div class="col">
    <div class="card h-100 w-100 border-0 shadow-sm">
      <img src="${top.image}"
        class="card-img-top rounded" alt="The Last of Us">
      <div class="card-body">
        <h5 class="card-title">${top.name}</h5>
        <p class="card-text">${top.description}</p>
        <a href="#" class="btn btn-primary">
          <i class="bi bi-bag-fill"></i> Buy Now
        </a>
      </div>
    </div>
  </div>    
    `

});
