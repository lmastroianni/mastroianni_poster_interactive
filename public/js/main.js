(() => {
    // try to get the object and do stuff with it
    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

        function buildPopover(data, el) {
            popOver.querySelector(".Graph").textContent = `Graph: ${data.Graph}`;
            popOver.querySelector(".Description").textContent = `Description: ${data.Description}`;
            popOver.querySelector(".beer-description").textContent = data.description;
            // popOver.querySelector(".img").textContent = data.img;
    
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

   /* console.log("javascript linked up");*/
