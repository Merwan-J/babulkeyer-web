const heroSection = document.querySelector(".section-hero");

export const renderHero = async function () {
  console.log("render");
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
  console.log(resData);
  let html = `<div class="hero grid grid--2-cols">
                <div class="hero-text-box">
                    <h1 class="heading-primary">${resData.header}</h1>
                    <p class="hero-description">
                        ${resData.description}
                    </p>
                    <a href="./donate.html" class="btn btn--full">Donate</a>
                </div>
                <div class="hero-image-box">
                    <img
                        src="${resData.image}"
                        alt="An orgnaization photo"
                        class="hero-image" />
                </div>
            </div>`;
  html = `<div class="container col-xxl-8 px-4 py-5 w-100">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="${resData.image}"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">${resData.header}</h1>
            <p class="lead">
              ${resData.description}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-success btn-lg px-4 me-md-2">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>`;
  console.log(html);
  console.log(heroSection);
  heroSection.innerHTML = html;
};
