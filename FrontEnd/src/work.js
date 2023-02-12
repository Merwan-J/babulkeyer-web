const ourWorks = document.querySelector(".our-works");
export const renderWorks = async function () {
  console.log("works");
  const res = await fetch("http://localhost:3000/api/card/page/work");
  const works = await res.json();
  let workHtml = "";
  let count = 0;

  works.forEach((work, index) => {
    const dir = index % 2 === 0 ? "flex-xxl-row-reverse" : "flex-xxl-row";
    workHtml += `<div class="row ${dir} align-items-center g-5 py-5">
          <div class="col-xxl-6">
            <div class="lc-block mb-3">
              <h2 class="">${work.header}</h2>
              <div editable="rich">
                <p class="lead">
                  ${work.description}
                </p>
              </div>
            </div>
          </div>

          <div class="col-10 col-lg-8 col-xxl-6">
            <img
              src="${work.image}"
              alt="Our Works Photo"
              class="mx-auto d-bloc w-100"
            />
          </div>
          
        </div>`;
  });

  const html = `<h1 class="section-h1 text-center mb-5">Our Works</h1>
    <div class="container col-xxl-10 px-4 py-5">${workHtml}</div>;`;

  ourWorks.innerHTML = html;
};
