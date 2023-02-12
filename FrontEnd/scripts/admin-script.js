"use strict";
const sideBarLinks = document.querySelector(".side-bar_links");
const hero = document.querySelector(".hero");
const partner = document.querySelector(".partner-link");
const main = document.querySelector(".main");
const work = document.querySelector(".work-link");
const workDescription = document.querySelector(".work-description-link");

const helpDescription = document.querySelector(".help-description");
const helpSupport = document.querySelector(".help-support");
const helpInvolved = document.querySelector(".help-involved");

const messages = document.querySelector(".message");
const testimonials = document.querySelector(".testimonials");
const users = document.querySelector(".users");
const namePlaceholder = document.getElementById("username");

class App {
    show = false;
    selectedElement;
    constructor(user) {
        sideBarLinks.addEventListener("click", this.slideDown.bind(this));
        hero.addEventListener("click", this.renderHero.bind(this));
        partner.addEventListener("click", this.renderPartners.bind(this));
        workDescription.addEventListener(
            "click",
            this.renderWorkDescription.bind(this)
        );
        work.addEventListener("click", this.renderworks.bind(this));
        helpDescription.addEventListener(
            "click",
            this.renderWaysDescription.bind(this)
        );
        helpSupport.addEventListener("click", this.renderSupports.bind(this));
        helpInvolved.addEventListener(
            "click",
            this.renderGetInvolveds.bind(this)
        );
        messages.addEventListener("click", this.rendermessages.bind(this));
        testimonials.addEventListener(
            "click",
            this.renderTestimonials.bind(this)
        );
        users.addEventListener("click", this.renderUser.bind(this));
    }
    slideDown(e) {
        if (e.target.closest(".sub-heading")) {
            const clicked = e.target.closest(".side-bar__item");
            if (!this.show) {
                clicked.classList.add("list-active");
                this.show = true;
                return;
            }

            if (this.show) {
                clicked.classList.remove("list-active");
                this.show = false;
                return;
            }
        }
    }

    /////////////////////home//////////////////////////////////////////////
    async renderHero(e) {
        console.log(localStorage.getItem("jwtToken"));
        this.selectedElement = e.currentTarget;
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }
        let resData;
        const res = await fetch("http://localhost:3000/api/card/page/home");
        if (res.status != "404") {
            const resDataSet = await res.json();
            resData = resDataSet[0];
        }
        if (!resData) {
            resData = {
                _id: "",
                header: "",
                image: "",
                description: "",
            };
        }
        const html = ` <div class="edit-hero">
    <h2>Edit hero</h2>
    <form method="post" action="http//127.0.0.1:3000/api/message" data-id = ${resData._id}>
       <label class="label" for="heading">Hero heading</label>
        <input id="heading" type="text" name="header" class="input hero-header" required value=${resData.header}></input>
        <label class="label"  for="imageLink">Hero Image link</label>
        <input id="imageLink" type="text" name="description" class="input hero-img" required value=${resData.image}></input>
        <label class="label"  for="hero-description">Hero Description</label>
        <textarea  name="image" id="hero-description" required class="textarea">${resData.description}</textarea>
        <button class="btn btn-fill btn-hero">Change hero</button>
    </form>
  </div>`;
        main.innerHTML = html;
        this.selectedElement.classList.add("active-item");
        document
            .querySelector(".btn-hero")
            .addEventListener("click", this.submitHero.bind(this));
    }
    async submitHero(e) {
        e.preventDefault();

        const header = document.querySelector(".hero-header");
        const description = document.getElementById("hero-description");
        const image = document.querySelector(".hero-img");
        let method;

        const home = {
            page: "home",
            header: header.value,
            description: description.value,
            image: image.value,
        };
        if (!header.parentElement.dataset.id) {
            method = "POST";
        } else {
            method = "PATCH";
        }
        const response = await fetch(
            `http://localhost:3000/api/card/${header.parentElement.dataset.id}`,
            {
                method: `${method}`,
                mode: "cors",
                // cache: "no-cache",
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(home),
            }
        );
        // console.log(hero);
        location.reload();
        // document.querySelector(".side-bar__item").click();
        // hero.click();
    }

    async renderPartners(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }
        const res = await fetch("http://localhost:3000/api/partners");
        const dataSet = await res.json();
        console.log(dataSet);

        this.selectedElement = e.currentTarget;
        let html;
        html = `
    `;
        dataSet.forEach((data) => {
            html += `<div class="partner">
               <h3 class="partners-name">${data.name}</h3>
               <img class="partners-img" src="${data.image}" width="200px"srcset="">
          </div>`;
        });

        main.innerHTML = `<div class="edit-partner">
      <h2>Edit partner</h2>
      <div class="grid grid-col-2">
        <div  class="partners-list  grid grid-col-3">
          ${html}

        </div>
        <div  class="partner-form-box" >
        <div class="form-card partner-form">
          <h2 class="partner-heading">Add partner</h2>
        <form action="">
          <label class="label" for="heading">Partner name</label>
          <input id="heading" type="text" name="" class="input" required></input>
           <label class="label"  for="imageLink">Partner logo image link</label>
           <input id="imageLink" type="text" name="" class="input" required></input>
           <button class="btn btn-fill">Add</button>
       </form>
      </div>
      </div>
      </div>
      
    </div>`;

        this.selectedElement.classList.add("active-item");
        document
            .querySelector(".partners-list")
            .addEventListener("click", this.renderpartner.bind(this));
    }

    renderpartner(e) {
        if (e.target.closest(".partner")) {
            const partnerName = e.target
                .closest(".partner")
                .querySelector(".partners-name").textContent;
            const partnerimageLink = e.target
                .closest(".partner")
                .querySelector(".partners-img").src;
            console.log(partnerName, partnerimageLink);
            const partnerForm = document.querySelector(".partner-form-box");
            const html = ` <div class="form-card partner-form">

      <div class="top-box">  
      <h2 class="partner-heading">Delete or Edit partner</h2>
      <button class="btn btn-fill btn-add">Add</button>
     </div>
   
  <form action="">
    <label class="label" for="heading">Partner name</label>
    <input id="heading" type="text" name="" value = "${partnerName}" class="input" required></input>
     <label class="label"  for="imageLink">Partner logo image link </label>
     <input id="imageLink" type="text" name="" value = "${partnerimageLink}" class="input" required></input>
     <button class="btn btn-fill">Edit</button>   <button class="btn btn-fill" style="background-color:orangeRed">Delete</button>
 </form>
</div>`;
            partnerForm.innerHTML = html;
            document
                .querySelector(".btn-add")
                .addEventListener("click", this.addPartner.bind(this));
        }
    }
    addPartner() {
        const html = `<div class="form-card partner-form">
    <h2 class="partner-heading">Add partner</h2>
  <form action="">
    <label class="label" for="heading">Partner name</label>
    <input id="heading" type="text" name="" class="input" required></input>
     <label class="label"  for="imageLink">Partner logo image link</label>
     <input id="imageLink" type="text" name="" class="input" required></input>
     <button class="btn btn-fill">Add</button>
 </form>
</div>`;
        const partnerForm = document.querySelector(".partner-form-box");
        partnerForm.innerHTML = html;
    }
    helpSupport;
    /////////////////////work//////////////////////////////////////////////

    async renderWorkDescription(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }

        this.selectedElement = e.currentTarget;
        let resData;
        const res = await fetch("http://localhost:3000/api/description");
        if (res.status != "404") {
            const resDataSet = await res.json();
            resData = resDataSet[0];
        }
        if (!resData) {
            resData = {
                _id: "",
                description: "",
            };
        }
        console.log(resData);
        const html = `<div class="edit-hero">
    <h2>Edit work description</h2>
    <form action="" data-id = ${resData._id}>
        <label class="label"  for="description">Description</label>
        <textarea  name="" id="work-description" required class="textarea">${resData.description}</textarea>
        <button class="btn btn-fill btn-change-work">Change work Description</button>
    </form>
  </div>`;

        main.innerHTML = html;
        this.selectedElement.classList.add("active-item");
        document
            .querySelector(".btn-change-work")
            .addEventListener("click", this.changeDescWork.bind(this));
    }
    async changeDescWork(e) {
        e.preventDefault();
        const description = document.getElementById("work-description");
        let method;

        const work = {
            page: "work",
            description: description.value,
        };
        if (!description.parentElement.dataset.id) {
            method = "POST";
        } else {
            method = "PATCH";
        }
        const response = await fetch(
            `http://localhost:3000/api/description/${description.parentElement.dataset.id}`,
            {
                method: `${method}`,
                mode: "cors",
                // cache: "no-cache",
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(work),
            }
        );
        // console.log(hero);
        location.reload();
        // document.querySelector(".side-bar__item").click();
        // hero.click();
    }
    async renderworks_helper() {
        console.log("in helper");
        const res = await fetch("http://localhost:3000/api/card/page/work");
        const works = await res.json();
        console.log(works);

        let newhtml = "";
        works.forEach((work) => {
            newhtml += `<div class="card" data-id="${work._id}">
          <img class="card-img" src="${work.image}" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">${work.header}</h3>
             <p class="card-description">${work.description}</p>
          </div>
        </div>
      `;
        });
        const html = ` <div class="edit-card">
    <h2> Edit-card </h2>
    <div class="grid grid-col-2">
      <div  class="cards-list  grid grid-col-3">
        ${newhtml}
      </div>
      <div  class="card-form-box" >
      <div class="form-card card-form">
        <h2 class="card-heading">Add work</h2>
      <form action="">
        <label class="label" for="heading">Work name</label>
        <input id="heading" type="text" name="" class="input work-header" required></input>
         <label class="label"  for="imageLink">Work image link</label>
         <input id="imageLink" type="text" name="" class="input work-img" required></input>
         <label class="label"  for="description">Work Description</label>
         <textarea  name="" id="work-description" required class="textarea "></textarea>
         <button class="btn btn-fill btn-works">Add</button>
     </form>
    </div>
    </div>
    </div>
    
  </div>`;

        main.innerHTML = html;
        document
            .querySelector(".cards-list")
            .addEventListener("click", this.renderwork.bind(this));

        document
            .querySelector(".btn-works")
            .addEventListener("click", this.postWork.bind(this));
    }

    async renderworks(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }
        this.selectedElement = e.currentTarget;
        this.renderworks_helper();
        this.selectedElement.classList.add("active-item");
    }
    async postWork(e) {
        e.preventDefault();
        const header = document.querySelector(".work-header");
        const description = document.getElementById("work-description");
        console.log(description);
        const image = document.querySelector(".work-img");
        let method;

        const work = {
            page: "work",
            header: header.value,
            description: description.value,
            image: image.value,
        };

        const response = await fetch(`http://localhost:3000/api/card`, {
            method: `POST`,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(work),
        });
        this.renderworks(e);
    }

    renderCard(e) {
        const id = e.target.closest(".card").dataset.id;
        console.log(id);
        const cardTitle = e.target
            .closest(".card")
            .querySelector(".card-title").textContent;
        const cardImageLink = e.target
            .closest(".card")
            .querySelector(".card-img").src;
        const cardDescription = e.target
            .closest(".card")
            .querySelector(".card-description").textContent;

        const cardForm = document.querySelector(".card-form-box");

        return { cardTitle, cardImageLink, cardDescription, cardForm, id };
    }
    renderwork(e) {
        if (e.target.closest(".card")) {
            const card = this.renderCard(e);
            const html = ` <div class="form-card card-form">
     <div class="top-box"> <h2 class="card-heading">Delate or Edit work</h2>
     <button class="btn btn-fill btn-add">Add</button></div>

  <form action="" data-id = "${card.id}">
    <label class="label" for="heading">Work name</label>
    <input id="heading" type="text" name="" value = "${card.cardTitle}" class="input work-header" required></input>
     <label class="label"  for="imageLink">work image link </label>
     <input id="imageLink" type="text" name="" value = "${card.cardImageLink}" class="input work-img" required></input>
     <label class="label"  for="description">Work Description</label>
         <textarea  name="" id="work-description"  class="textarea"  required>${card.cardDescription}</textarea>
     <button class="btn btn-fill btn-edit">Edit</button>   <button class="btn btn-fill btn-delete" style="background-color:orangeRed">Delete</button>
 </form>
</div>`;
            card.cardForm.innerHTML = html;
            document
                .querySelector(".btn-add")
                .addEventListener("click", this.addWork.bind(this));
            document
                .querySelector(".btn-edit")
                .addEventListener("click", this.editWork.bind(this));
            document
                .querySelector(".btn-delete")
                .addEventListener("click", this.deleteWork.bind(this));
        }
    }
    async editWork(e) {
        e.preventDefault();
        console.log("object");
        const header = document.querySelector(".work-header");
        const id = header.parentElement.dataset.id;
        const description = document.getElementById("work-description");
        console.log(id);
        const image = document.querySelector(".work-img");
        let method;

        const work = {
            page: "work",
            header: header.value,
            description: description.value,
            image: image.value,
        };
        const response = await fetch(`http://localhost:3000/api/card/${id}`, {
            method: `PATCH`,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(work),
        });
        this.renderworks_helper();
    }
    async deleteWork(e) {
        e.preventDefault();
        console.log("object");
        const header = document.querySelector(".work-header");
        const id = header.parentElement.dataset.id;
        const description = document.getElementById("work-description");
        console.log(id);
        const image = document.querySelector(".work-img");
        let method;

        const work = {
            page: "work",
            header: header.value,
            description: description.value,
            image: image.value,
        };
        const response = await fetch(`http://localhost:3000/api/card/${id}`, {
            method: `DELETE`,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(work),
        });
        this.renderworks_helper();
    }

    addWork() {
        console.log("ok");
        const html = `<div class="form-card card-form">
     <h2 class="card-heading">Add work</h2>
   <form action="">
     <label class="label" for="heading">Work name</label>
     <input id="heading" type="text" name="" class="input" required></input>
      <label class="label"  for="imageLink">Work image link</label>
      <input id="imageLink" type="text" name="" class="input" required></input>
      <label class="label"  for="description">Work Description</label>
      <textarea  name="" id="description" required class="textarea"></textarea>
      <button class="btn btn-fill btn-works">Add</button>
  </form>
 </div>`;
        const cardForm = document.querySelector(".card-form-box");
        cardForm.innerHTML = html;
        document
            .querySelector(".btn-works")
            .addEventListener("click", this.postWork.bind(this));
    }

    /////////////////////ways//////////////////////////////////////////////
    renderWaysDescription(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }
        this.selectedElement = e.currentTarget;
        const html = `  <div class="edit-hero">
    <h2>Edit ways to help description</h2>
    <form action="">
       <label class="label" for="heading">Description heading</label>
        <input id="heading" type="text" name="" class="input" required></input>
        <label class="label"  for="description">Description</label>
        <textarea  name="" id="description" required class="textarea"></textarea>
        <button class="btn btn-fill">Change ways to help Description</button>
    </form>
  </div>`;
        main.innerHTML = html;
        this.selectedElement.classList.add("active-item");
    }

    renderSupports(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }
        this.selectedElement = e.currentTarget;
        const html = `
    <div class="edit-card">
    <h2> Edit-supports </h2>
    <div class="grid grid-col-2">
      <div  class="cards-list  grid grid-col-3">
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/black%20hands%20for%20water.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">dolor sit</h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/girl%20image%20for%20hero.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">ipsum dolor </h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div> 
        </div>
      
        
      </div>
      <div  class="card-form-box" >
      <div class="form-card card-form">
        <h2 class="card-heading">Add support</h2>
      <form action="">
        <label class="label" for="heading">Support title</label>
        <input id="heading" type="text" name="" class="input" required></input>
         <label class="label"  for="imageLink">Support image link</label>
         <input id="imageLink" type="text" name="" class="input" required></input>
         <label class="label"  for="description">Support Description</label>
         <textarea  name="" id="description" required class="textarea"></textarea>
         <button class="btn btn-fill">Add</button>
     </form>
    </div>
    </div>
    </div>
    
  </div>`;
        main.innerHTML = html;
        this.selectedElement.classList.add("active-item");
        document
            .querySelector(".cards-list")
            .addEventListener("click", this.rendersupport.bind(this));
    }
    rendersupport(e) {
        if (e.target.closest(".card")) {
            const card = this.renderCard(e);
            const html = ` <div class="form-card card-form">
         <div class="top-box"> <h2 class="card-heading">Delate or Edit Support</h2>
         <button class="btn btn-fill btn-add">Add</button></div>

      <form action="">
        <label class="label" for="heading">Support title</label>
        <input id="heading" type="text" name="" value = "${card.cardTitle}" class="input" required></input>
         <label class="label"  for="imageLink">Support image link </label>
         <input id="imageLink" type="text" name="" value = "${card.cardImageLink}" class="input" required></input>
         <label class="label"  for="description">Support Description</label>
             <textarea  name="" id="description"  class="textarea"  required>${card.cardDescription}</textarea>
         <button class="btn btn-fill">Edit</button>   <button class="btn btn-fill" style="background-color:orangeRed">Delete</button>
     </form>
    </div>`;
            card.cardForm.innerHTML = html;
            document
                .querySelector(".btn-add")
                .addEventListener("click", this.addSupport.bind(this));
        }
    }

    addSupport() {
        const html = `<div class="form-card card-form">
    <h2 class="card-heading">Add support</h2>
  <form action="">
    <label class="label" for="heading">Support title</label>
    <input id="heading" type="text" name="" class="input" required></input>
     <label class="label"  for="imageLink">Support image link</label>
     <input id="imageLink" type="text" name="" class="input" required></input>
     <label class="label"  for="description">Support Description</label>
     <textarea  name="" id="description" required class="textarea"></textarea>
     <button class="btn btn-fill">Add</button>
 </form>
</div>`;
        const cardForm = document.querySelector(".card-form-box");
        cardForm.innerHTML = html;
    }

    //////////////////  get involved   /////////////////////////////

    renderGetInvolveds(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item");
            this.selectedElement.classList.remove("active-item-2");
        }
        this.selectedElement = e.currentTarget;
        const html = ` <div class="edit-card">
    <h2> Edit get involved </h2>
    <div class="grid grid-col-2">
      <div  class="cards-list  grid grid-col-3">
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/old%20people%20hand.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">dolor sit</h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/kid%20getting%20reated.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">ipsum dolor </h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div> 
        </div>
      </div>
      <div  class="card-form-box" >
      <div class="form-card card-form">
        <h2 class="card-heading">Add get Involved</h2>
      <form action="">
        <label class="label" for="heading">Get Involved title</label>
        <input id="heading" type="text" name="" class="input" required></input>
         <label class="label"  for="imageLink">Get Involved image link</label>
         <input id="imageLink" type="text" name="" class="input" required></input>
         <label class="label"  for="description">Get Involved Description</label>
         <textarea  name="" id="description" required class="textarea"></textarea>
         <button class="btn btn-fill">Add</button>
     </form>
    </div>
    </div>
    </div>
  </div>`;

        main.innerHTML = html;
        this.selectedElement.classList.add("active-item");
        document
            .querySelector(".cards-list")
            .addEventListener("click", this.renderInvolved.bind(this));
    }

    renderInvolved(e) {
        if (e.target.closest(".card")) {
            const card = this.renderCard(e);
            const html = ` <div class="form-card card-form">
         <div class="top-box"> <h2 class="card-heading">Delate or Edit involved</h2>
         <button class="btn btn-fill btn-add">Add</button></div>

      <form action="">
        <label class="label" for="heading">Get involved name</label>
        <input id="heading" type="text" name="" value = "${card.cardTitle}" class="input" required></input>
         <label class="label"  for="imageLink">Get involved image link </label>
         <input id="imageLink" type="text" name="" value = "${card.cardImageLink}" class="input" required></input>
         <label class="label"  for="description">Get involved Description</label>
             <textarea  name="" id="description"  class="textarea"  required>${card.cardDescription}</textarea>
         <button class="btn btn-fill">Edit</button>   <button class="btn btn-fill" style="background-color:orangeRed">Delete</button>
     </form>
    </div>`;
            card.cardForm.innerHTML = html;
            document
                .querySelector(".btn-add")
                .addEventListener("click", this.addGetInvolved.bind(this));
        }
    }

    addGetInvolved() {
        const html = `<div class="form-card card-form">
    <h2 class="card-heading">Add Get involved</h2>
  <form action="">
    <label class="label" for="heading">Get involved  title</label>
    <input id="heading" type="text" name="" class="input" required></input>
     <label class="label"  for="imageLink">Get involved image link</label>
     <input id="imageLink" type="text" name="" class="input" required></input>
     <label class="label"  for="description">Get involved Description</label>
     <textarea  name="" id="description" required class="textarea"></textarea>
     <button class="btn btn-fill">Add</button>
 </form>
</div>`;
        const cardForm = document.querySelector(".card-form-box");
        cardForm.innerHTML = html;
    }

    //////////////////  message   /////////////////////////////

    async rendermessages(e) {
        console.log("ok");
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item-2");
            this.selectedElement.classList.remove("active-item");
        }
        this.selectedElement = e.currentTarget;

        const response = await fetch("http://127.0.0.1:3000/api/message");
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        let messageHtml = "";
        data.forEach((message) => {
            messageHtml += `<div class="message-card">
      <p class="message-card-title "> client Name: <span class="contact-name">${message.name}</span></p>
      <p class="message-card-title"> client email: <span class="contact-email">${message.email}</span></p>
      <p class="message-card-title">client address: <span class="contact-address">${message.address}</span></p>
      <p class="message-card-title">client subject: <span class="contact-subject"> ${message.subject}</span></p>
       <p class="message-card-title">
        client statement:
        <blockquote class="contact-statement">${message.statement}</blockquote>
      </p>
  </div>`;
        });

        const html = ` <div class="messages-box">
    <h2> Messages </h2>
    <div class="messages grid grid-col-2-equal">${messageHtml}</div>
    </div>
`;
        main.innerHTML = html;
        this.selectedElement.classList.add("active-item-2");
    }

    //////////////////  testimonials   /////////////////////////////

    renderTestimonials(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item-2");
            this.selectedElement.classList.remove("active-item");
        }
        this.selectedElement = e.currentTarget;
        const html = ` <div class="edit-card testimonials">
    <h2> Edit get involved </h2>
    <div class="grid grid-col-2">
      <div  class="cards-list  grid grid-col-3">
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/ustaz%20abuki.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">dolor sit</h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div>
          <audio class="audio" controls src="https://merwan-j.github.io/esk/audios/audio-placeholder.webm"></audio>
        </div>
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/Abiy-Ahmed-Israel-Visit.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">ipsum dolor </h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div>
          <audio class="audio" controls src="https://merwan-j.github.io/esk/audios/audio-placeholder.webm"></audio>
        </div>
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/solomon%20kassa.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">ipsum dolor </h3>
             <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div> 
          <audio class="audio" controls src="https://merwan-j.github.io/esk/audios/audio-placeholder.webm"></audio>
        </div>
      </div>
      <div  class="card-form-box" >
      <div class="form-card card-form">
        <h2 class="card-heading">Add Testimonial</h2>
      <form action="">
        <label class="label" for="heading">Testimonial name</label>
        <input id="heading" type="text" name="" class="input" required></input>
         <label class="label"  for="imageLink">Testimonial image link</label>
         <input id="imageLink" type="text" name="" class="input" required></input>
         <label class="label"  for="audioLink">Testimonial audio link</label>
         <input id="audioLink" type="text" name="" class="input" required></input>
         <label class="label"  for="description">Testimonial Description</label>
         <textarea  name="" id="description" required class="textarea"></textarea>
         <button class="btn btn-fill">Add</button>
     </form>
    </div>
    </div>
    </div>
  </div>
 `;
        main.innerHTML = html;
        this.selectedElement.classList.add("active-item-2");
        document
            .querySelector(".cards-list")
            .addEventListener("click", this.renderTestimonial.bind(this));
    }

    renderTestimonial(e) {
        if (e.target.closest(".card")) {
            const card = this.renderCard(e);
            const audioLink = e.target
                .closest(".card")
                .querySelector(".audio").src;

            const html = ` <div class="form-card card-form">
         <div class="top-box"> <h2 class="card-heading">Edit Testimonial</h2>
         <button class="btn btn-fill btn-add">Add</button></div>

      <form action="">
        <label class="label" for="heading">Testimonial name</label>
        <input id="heading" type="text" name="" value = "${card.cardTitle}" class="input" required></input>
         <label class="label"  for="imageLink">Testimonial image link </label>
         <input id="imageLink" type="text" name="" value = "${card.cardImageLink}" class="input" required></input>
         <label class="label"  for="audioLink">Testimonial audio link </label>
         <input id="audioLink" type="text" name="" value = "${audioLink}" class="input" required></input>
         <label class="label"  for="description">Testimonial Description</label>
             <textarea  name="" id="description"  class="textarea"  required>${card.cardDescription}</textarea>
         <button class="btn btn-fill">Edit</button>   <button class="btn btn-fill" style="background-color:orangeRed">Delete</button>
     </form>
    </div>`;
            card.cardForm.innerHTML = html;
            document
                .querySelector(".btn-add")
                .addEventListener("click", this.addTestimonial.bind(this));
        }
    }

    addTestimonial() {
        const html = `<div class="form-card card-form">
    <h2 class="card-heading">Add Testimonial</h2>
  <form action="">
    <label class="label" for="heading">Testimonial name</label>
    <input id="heading" type="text" name="" class="input" required></input>
     <label class="label"  for="imageLink">Testimonial image link</label>
     <input id="imageLink" type="text" name="" class="input" required></input>
     <label class="label"  for="audioLink">Testimonial audio link</label>
     <input id="audioLink" type="text" name="" class="input" required></input>
     <label class="label"  for="description">Testimonial Description</label>
     <textarea  name="" id="description" required class="textarea"></textarea>
     <button class="btn btn-fill">Add</button>
 </form>
</div>`;
        const cardForm = document.querySelector(".card-form-box");
        cardForm.innerHTML = html;
    }

    renderUser(e) {
        if (this.selectedElement) {
            this.selectedElement.classList.remove("active-item-2");
            this.selectedElement.classList.remove("active-item");
        }
        this.selectedElement = e.currentTarget;
        const html = ` <div class="messages-box">
    <h2> Messages </h2>
    <div class="users-box grid grid-col-2-equal">
      <table class="users-table">
          <thead>
          <th class=""> Username</th>
          <th class="">Email</th>
          <th class="">password</th>
          <th class="">status</th>
          </thead>
            <tbody>
              <tr>
              <td class="username"> natty</td>
              <td class="email">natnael70a@gmail.com</td>
              <td class="password">dfdfdr34</td>
              <td class="status">PENDDING</td>
              </tr>
                <tr>
                <td class="username"> bell</td>
                <td class="email">natty50@gmail.com</td>
                <td class="password">3e34edfdvv</td>
                <td class="status">REJECTED</td>
                </tr>
               
                <tr>
                  <td class="username"> goog</td>
                  <td class="email">googboog@gmail.com</td>
                  <td class="password">psdsdd344</td>
                  <td class="status">APPROVED</td>
                  </tr>
            </tbody>
 
          </table>

          <div class="userform">

          </div>
        </div>
      </div> `;

        main.innerHTML = html;
        this.selectedElement.classList.add("active-item-2");
        document
            .querySelector(".users-table")
            .addEventListener("click", this.renderUserForm.bind(this));
    }

    renderUserForm(e) {
        if (e.target.closest("tbody")) {
            console.log("ok");
            const username = e.target
                .closest("tr")
                .querySelector(".username").textContent;
            const email = e.target
                .closest("tr")
                .querySelector(".email").textContent;
            const html = `
      <div class="form-card">
      <h2 class="card-heading">Edit status</h2>
       <form action="">
       <label class="label" for="name">name:</label>
    <input id="name" type="text" name="" value="${username}" class="input-user" disabled ></input> </br>
     <label class="label"  for="email">Email:</label>
     <input id="email" type="text" name="" value="${email}" class="input-user " disabled></input>
     </br>
       <label class="label" for="status">Status:</label>
       <select class="select" name="" id="status">
       <option value="">Select Status</option>
        <option value="Pendding">Pendding</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
       </select>
      
       <button class="btn btn-fill status-change">Change</button>  
   </form>
   </div>
   `;

            document.querySelector(".userform").innerHTML = html;
        }
    }
}

function load() {
    const user = localStorage.getItem("currentUser");
    const jwtToken = localStorage.getItem("jwtToken");
    console.log(user, jwtToken);
    if (user && jwtToken) {
        namePlaceholder.innerText = user;
        const app = new App();
    } else {
        return window.location.replace(
            "http://127.0.0.1:5502/FrontEnd/log-in.html"
        );
    }
}

load();
