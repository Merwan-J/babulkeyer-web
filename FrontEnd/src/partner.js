export const renderPartners = async function () {
  console.log("partener");
  const res = await fetch("http://localhost:3000/api/partners");
  const partners = await res.json();
  console.log(partners);

  let partnerhtml = "";

  partners.forEach((partner) => {
    partnerhtml += `
    <div class="col-6 col-md-3 align-self-center text-center">
            <img
              src="${partner.image}"
              alt="partner image"
              width="250"
              height="auto"
            />
          </div>`;
  });

  document.querySelector(".partners").innerHTML = partnerhtml;
};
