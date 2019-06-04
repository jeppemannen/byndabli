$(document).ready(function() {
    let color = "#2196F3";
    colorBorder();
  
    // Render bottom border for input field
    function colorBorder() {
      $("input[type=text]").css("border-bottom", "2px solid" + color + "");
    }
 /* 
    // Define card
    function card(color, text) {
      return (
        `<div class="kanban-card d-flex flex-column" style="background-color:` +
        color +
        `">
              <p>` +
        text +
        `</p>
              <button>
                  <span> <img src="images/trash.png" height="25px"> </span>
              </button>
          </div>`
      );
    }
  */
    // Add new card
    $("input[type=text]").keypress(function(event) {
      if (event.which === 13) {
        let text = $(this).val();
        $(this).val("");
        $(this)
          .next(".list-body")
          .append(card(color, text));
      }
    });

  
    // Delete card
    $(document).on("click", ".kanban-card > button", function() {
      $(this)
        .parent()
        .fadeOut(250, function() {
          $(this).remove();
        });
    });
  /*
    // Toggle input field
    $("header").on("click", "button", function() {
      $(this)
        .children()
        .toggleClass("oi-chevron-top oi-chevron-bottom");
      $("input[type=text]").slideToggle();
    }); 
  
    // Toggle chosen color
    $(".color").on("click", function() {
      color = $(this).val();
      $(".oi-check").removeClass("oi-check");
      colorBorder();
      $(this)
        .children()
        .addClass("oi-check");
    }); */
  
    $(function() {
      $("#sortable1, #sortable2, #sortable3")
        .sortable({
          connectWith: ".list-body"
        })
        .disableSelection();
    });
  });
  

  /*
  **************************************************************** 
  *Modal for task options
   */
const openOptionsButtons = document.querySelectorAll("[data-options-target]");
const closeOptionsButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay"); 

openOptionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const options = document.querySelector(button.dataset.optionsTarget)
        openOptions(options)
    })
})

overlay.addEventListener('click', () => {
    const options = document.querySelectorAll('.options.active')
    options.forEach(options => {
      closeOptions(options)
    })
  })

closeOptionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const options = button.closest(".options")
        closeOptions(options)
    })
})

function openOptions(options) {
    if (options == null) return
    options.classList.add("active")
    overlay.classList.add("active")
}

function closeOptions(options) {
    if (options == null) return
    options.classList.remove("active")
    overlay.classList.remove("active")
}

 /*
  **************************************************************** 
  * Adding tasks to the columns
  */

  let taskCard = [
    {
      id: "0",
      title: "inpTitle",
      description: "inpDesc"
    }
  ];

 const inpTitle = document.getElementById("inpTitle");
 const inpDesc = document.getElementById("inpDesc");
 const inpDate = document.getElementById("inpDate");
 const inpPrio = document.getElementById("inpPrio")

 const saveBtn = document.getElementById("saveBtn");

 const taskOutput = document.getElementById("sortable1");

 saveBtn.onclick = function () {
   const Title = inpTitle.value;
   const Description = inpDesc.value;
   const Date = inpDate.value;
   const Prio = inpPrio.value;

     
    

if (inpTitle && inpDesc && inpDate && inpPrio) {
    localStorage.setItem("Title:", Title);
    localStorage.setItem("Description:", Description);
    localStorage.setItem("Date:", Date);
    localStorage.setItem("Priority:", Prio);
   }
     let a = Math.random();
     let b = Math.random();
     let c = Math.random();
     let d = Math.random();
     let e = Math.random();
     let f = Math.random();
     let g = Math.random();
     
     let newCard = document.createElement("div");
     newCard.classList.add("kanban-card");
     newCard.setAttribute("id", a)
     
     let newTitle = document.createElement("h2");
     newTitle.setAttribute("id", b);
     
     let newDesc = document.createElement("p");
     newDesc.setAttribute("id", c)
     
     let trashBtn = document.createElement("button")
     trashBtn.setAttribute("id", d);
     
     let trash = document.createElement("span");
     trash.setAttribute("id",e)
     trash.setAttribute("right", "1px");
     
     let trashIcon = document.createElement("img")
     trashIcon.setAttribute("src", "images/trash.png")
     trashIcon.setAttribute("height", "25px");
     
     let newDate = document.createElement("p");
     newDate.setAttribute("id", f);
     
     let newPrio = document.createElement("p");
     newPrio.setAttribute("id", g);
     
     
     



if (Title.length == 0){
    alert("You need a title");
}else{          document.getElementById("sortable1").appendChild(newCard);
     document.getElementById(a).appendChild(newTitle);
     document.getElementById(b).innerHTML = Title;
     document.getElementById(a).appendChild(newDesc);
     document.getElementById(c).innerHTML = Description;
      
     document.getElementById(a).appendChild(newDate);
     document.getElementById(f).innerHTML = Date;
      document.getElementById(f).style.fontSize = "10px";
      
      document.getElementById(a).appendChild(newPrio);
      document.getElementById(g).innerHTML = Prio;
  
     document.getElementById(a).appendChild(trashBtn);
     document.getElementById(d).appendChild(trash);
     document.getElementById(e).appendChild(trashIcon);
}


     
     
     
     
 }



function saveToLocal() { 
  localStorage.removeItem("taskCard"); 
  localStorage.setItem("taskCard", JSON.stringify(taskCard)); 
}
console.log(typeof(taskCard));

/*
function getFromLocal() {
   tasks = JSON.parse(localStorage.getItem("taskCard")); 
}

*/
