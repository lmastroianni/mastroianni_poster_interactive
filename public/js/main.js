(() => {
    // try to get the object and do stuff with it
    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    const waypoint = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('beer2'),
        // what should we dowhen we hit the waypoint? This is up to you.
        // you can trigger animation, do an AJAX call.....whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint!');
          this.element.innerHTML += `<p>Added this with Waypoint! We are scrolling ${direction} </p>`;
        }
      })

      const waypoint2 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view
        
        element: document.getElementById('beer3'),
        // what should we dowhen we hit the waypoint? This is up to you.
        // you can trigger animation, do an AJAX call.....whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!');
        },

        offset: 200
      })

    function buildPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `Average Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        // show the popover
        popOver.classList.add('show-popover');
        el.appendChild(popOver);

    }

      // run the fetch API and get the DB data
      function fetchData() {
          let targetEl = this,
            url = `/svgdata/${this.dataset.target}`;
        
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // populate the popover
                buildPopover(data, targetEl);
            })
            .catch((err) => console.log(err));
      }


    const svgGraphic = document.querySelector(".svg-wrapper");

    // svgGraphic.addEventListener("click", function() {
    //     console.log(this);
    // })

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();