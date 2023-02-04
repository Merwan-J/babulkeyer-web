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

class App {
  show = false;
  selectedElement;
  constructor() {
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
    helpInvolved.addEventListener("click", this.renderGetInvolveds.bind(this));
    messages.addEventListener("click", this.rendermessages.bind(this));
    testimonials.addEventListener("click", this.renderTestimonials.bind(this));
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

  renderHero(e) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove("active-item");
      this.selectedElement.classList.remove("active-item-2");
    }

    this.selectedElement = e.currentTarget;
    const html = ` <div class="edit-hero">
    <h2>Edit hero</h2>
    <form action="">
       <label class="label" for="heading">Hero heading</label>
        <input id="heading" type="text" name="" class="input" required></input>
        <label class="label"  for="imageLink">Hero Image link</label>
        <input id="imageLink" type="text" name="" class="input" required></input>
        <label class="label"  for="description">Hero Description</label>
        <textarea  name="" id="description" required class="textarea"></textarea>
        <button class="btn btn-fill">Change hero</button>
    </form>
  </div>`;
    main.innerHTML = html;
    this.selectedElement.classList.add("active-item");
  }

  renderPartners(e) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove("active-item");
      this.selectedElement.classList.remove("active-item-2");
    }

    this.selectedElement = e.currentTarget;
    const html = `  
    <div class="edit-partner">
      <h2>Edit partner</h2>
      <div class="grid grid-col-2">
        <div  class="partners-list  grid grid-col-3">
          <div class="partner">
               <h3 class="partners-name">ethio-telecom</h3>
               <img class="partners-img" src="https://merwan-j.github.io/esk/images/Ethio-telecom-2-removebg-preview.png" width="200px"srcset="">
          </div>
          <div class="partner">
            <h3 class="partners-name">zam zam</h3>
            <img class="partners-img" src="https://merwan-j.github.io/esk/images/zamzam-removebg-preview.png" width="200px"srcset="">
       </div>
       <div class="partner">
        <h3 class="partners-name">minber</h3>
        <img class="partners-img" src="https://merwan-j.github.io/esk/images/minmber_tv-removebg-preview.png" width="200px"srcset="">
   </div>
   <div class="partner">
    <h3 class="partners-name">hijia bank</h3>
    <img class="partners-img" src="https://merwan-j.github.io/esk/images/hijra-removebg-preview.png" width="200px"srcset="">
</div>
<div class="partner">
<h3 class="partners-name">ethio-telecom</h3>
<img class="partners-img" src="https://merwan-j.github.io/esk/images/minmber_tv-removebg-preview.png" width="200px"srcset="">
</div>
<div class="partner">
<h3 class="partners-name">ethio-telecom</h3>
<img class="partners-img" src="https://merwan-j.github.io/esk/images/Ethio-telecom-2-removebg-preview.png" width="200px"srcset="">
</div>

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

    main.innerHTML = html;
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

  renderWorkDescription(e) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove("active-item");
      this.selectedElement.classList.remove("active-item-2");
    }

    this.selectedElement = e.currentTarget;
    const html = `<div class="edit-hero">
    <h2>Edit work description</h2>
    <form action="">
       <label class="label" for="heading">Description heading</label>
        <input id="heading" type="text" name="" class="input" required></input>
        <label class="label"  for="description">Description</label>
        <textarea  name="" id="description" required class="textarea"></textarea>
        <button class="btn btn-fill">Change work Description</button>
    </form>
  </div>`;

    main.innerHTML = html;
    this.selectedElement.classList.add("active-item");
  }

  renderworks(e) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove("active-item");
      this.selectedElement.classList.remove("active-item-2");
    }
    this.selectedElement = e.currentTarget;
    const html = ` <div class="edit-card">
    <h2> Edit-card </h2>
    <div class="grid grid-col-2">
      <div  class="cards-list  grid grid-col-3">
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/kids%20laughing%204.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">dolor sit</h3>
             <p class="card-description">Lorem ipsum  adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/kid-drinking.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">ipsum dolor </h3>
             <p class="card-description">Loremr adipisicing elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div> 
        </div>
        <div class="card">
          <img class="card-img" src="https://merwan-j.github.io/esk/images/kids%20laughing%202.jpg" width="200px"srcset="">
          <div class="card-text">
            <h3 class="card-title">consectetur</h3>
             <p class="card-description">Lorem ipsumng elit. Inventore repellat distinctio iste nisi assumenda alias in! Beatae aliquid .</p>
          </div>   
        </div>
           
      </div>
      <div  class="card-form-box" >
      <div class="form-card card-form">
        <h2 class="card-heading">Add work</h2>
      <form action="">
        <label class="label" for="heading">Work name</label>
        <input id="heading" type="text" name="" class="input" required></input>
         <label class="label"  for="imageLink">Work image link</label>
         <input id="imageLink" type="text" name="" class="input" required></input>
         <label class="label"  for="description">Work Description</label>
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
      .addEventListener("click", this.renderwork.bind(this));
  }

  renderCard(e) {
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

    return { cardTitle, cardImageLink, cardDescription, cardForm };
  }
  renderwork(e) {
    if (e.target.closest(".card")) {
      const card = this.renderCard(e);
      const html = ` <div class="form-card card-form">
     <div class="top-box"> <h2 class="card-heading">Delate or Edit work</h2>
     <button class="btn btn-fill btn-add">Add</button></div>

  <form action="">
    <label class="label" for="heading">Work name</label>
    <input id="heading" type="text" name="" value = "${card.cardTitle}" class="input" required></input>
     <label class="label"  for="imageLink">work image link </label>
     <input id="imageLink" type="text" name="" value = "${card.cardImageLink}" class="input" required></input>
     <label class="label"  for="description">Work Description</label>
         <textarea  name="" id="description"  class="textarea"  required>${card.cardDescription}</textarea>
     <button class="btn btn-fill">Edit</button>   <button class="btn btn-fill" style="background-color:orangeRed">Delete</button>
 </form>
</div>`;
      card.cardForm.innerHTML = html;
      document
        .querySelector(".btn-add")
        .addEventListener("click", this.addWork.bind(this));
    }
  }

  addWork() {
    const html = `<div class="form-card card-form">
     <h2 class="card-heading">Add work</h2>
   <form action="">
     <label class="label" for="heading">Work name</label>
     <input id="heading" type="text" name="" class="input" required></input>
      <label class="label"  for="imageLink">Work image link</label>
      <input id="imageLink" type="text" name="" class="input" required></input>
      <label class="label"  for="description">Work Description</label>
      <textarea  name="" id="description" required class="textarea"></textarea>
      <button class="btn btn-fill">Add</button>
  </form>
 </div>`;
    const cardForm = document.querySelector(".card-form-box");
    cardForm.innerHTML = html;
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

  rendermessages(e) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove("active-item-2");
      this.selectedElement.classList.remove("active-item");
    }
    this.selectedElement = e.currentTarget;
    const html = ` <div class="messages-box">
    <h2> Messages </h2>
    <div class="messages grid grid-col-2-equal">
        <div class="message-card">
            <p class="message-card-title "> client Name: <span class="contact-name">natty</span></p>
            <p class="message-card-title"> client email: <span class="contact-email">natnael70a@gmail.com</span></p>
            <p class="message-card-title">client address: <span class="contact-address">Addis Ababa University</span></p>
            <p class="message-card-title">client subject: <span class="contact-subject"> Lorem ipsum dolor si</span></p>
             <p class="message-card-title">
              client statement:
              <blockquote class="contact-statement">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestiae doloribus, eum dignissimos similique excepturi eos non praesentium, odio corporis, quas accusamus! Quis maiores dicta magni, sapiente ea sunt tenetur?
              </blockquote>
            </p>
        </div>
        <div class="message-card">
          <p class="message-card-title "> client Name: <span class="contact-name">natty</span></p>
          <p class="message-card-title"> client email: <span class="contact-email">natnael70a@gmail.com</span></p>
          <p class="message-card-title">client address: <span class="contact-address">Addis Ababa University</span></p>
          <p class="message-card-title">client subject: <span class="contact-subject"> Lorem ipsum dolor si</span></p>
           <p class="message-card-title">
            client statement:
            <blockquote class="contact-statement">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestiae doloribus, eum dignissimos similique excepturi eos non praesentium, odio corporis, quas accusamus! Quis maiores dicta magni, sapiente ea sunt tenetur?
            </blockquote>
          </p>
      </div>
      <div class="message-card">
        <p class="message-card-title "> client Name: <span class="contact-name">natty</span></p>
        <p class="message-card-title"> client email: <span class="contact-email">natnael70a@gmail.com</span></p>
        <p class="message-card-title">client address: <span class="contact-address">Addis Ababa University</span></p>
        <p class="message-card-title">client subject: <span class="contact-subject"> Lorem ipsum dolor si</span></p>
         <p class="message-card-title">
          client statement:
          <blockquote class="contact-statement">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestiae doloribus, eum dignissimos similique excepturi eos non praesentium, odio corporis, quas accusamus! Quis maiores dicta magni, sapiente ea sunt tenetur?
          </blockquote>
        </p>
    </div>
    <div class="message-card">
      <p class="message-card-title "> client Name: <span class="contact-name">natty</span></p>
      <p class="message-card-title"> client email: <span class="contact-email">natnael70a@gmail.com</span></p>
      <p class="message-card-title">client address: <span class="contact-address">Addis Ababa University</span></p>
      <p class="message-card-title">client subject: <span class="contact-subject"> Lorem ipsum dolor si</span></p>
       <p class="message-card-title">
        client statement:
        <blockquote class="contact-statement">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestiae doloribus, eum dignissimos similique excepturi eos non praesentium, odio corporis, quas accusamus! Quis maiores dicta magni, sapiente ea sunt tenetur?
        </blockquote>
      </p>
  </div>
      </div>
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
      const audioLink = e.target.closest(".card").querySelector(".audio").src;

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
}
const app = new App();
