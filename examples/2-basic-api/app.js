const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/basicApi");
    const products = data.map((prod) => {
      const {
        image: { url },
        name,
        price,
      } = prod;
      return `
      <article class="product">
      <img
        src="${url}"
        alt="${name}""
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">${price}</h5>
      </div>
    </article>
      `;
    });
    result.innerHTML = products.join("");
  } catch (error) {
    console.log(error);
  }
};

fetchData();
