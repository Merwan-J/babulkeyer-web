const sectionOurWorks = document.querySelector(".section-works");
export const renderSectionWorks = async function () {
  const res = await fetch("http://localhost:3000/api/card/page/work");
  const works = await res.json();
  let workHtml = "";

  works.forEach((work, index) => {
    const dir = index % 2 === 0 ? "flex-xxl-row-reverse" : "flex-xxl-row";
    workHtml += `
      <div class="col-lg-4 col-sm-6 mb-4">
        <div class="card h-100 border-0">
          <img
            src="${work.image}"
            alt="One of Our works picture"
            class="card-img-top"
          />
          <div
            class="card-body"
            style="
              border-left: 2px #0c8d7b solid;
              border-right: 2px #0c8d7b solid;
              border-bottom: 2px #0c8d7b solid;
              border-radius: 10px 5% / 0 0 10px 10px;
            "
          >
            <h4 class="card-title">${work.header}</h4>
            <p class="card-text">
              ${work.description}
            </p>
          </div>
        </div>
        </div>
      `;
  });

  const html = `<div class="row">${workHtml}</div>`;

  sectionOurWorks.innerHTML = html;
};
