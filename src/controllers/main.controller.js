const { index } = require("../models/product.model");
module.exports = {
  home: (req, res) => {
    return res.render("index", {
      title: "Sanitarios Nicuesa",
      styles: ["style", "header", "footer", "index", "carousel"]
    });
  }
 
};
