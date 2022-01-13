class ProductClient {
  fetchItems() {
    return fetch("https://ogt-blog.netlify.app/?category=ALL&page=1").then(
      (res) => {
        return res.json();
      }
    );
  }
}

module.exports = ProductClient;
