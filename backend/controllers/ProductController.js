// Function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1[0];
    const image2 = req.files.image2[0];
    const image3 = req.files.image3[0];
    const image4 = req.files.image4[0];

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    );
    console.log(image1, image2, image3, image4);

    res.json({});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for list product

const listProduct = async (req, res) => {};

// Function for remove product

const removeProduct = async (req, res) => {};

// Function for single product info

const singleProduct = async (req, res) => {};

export { listProduct, addProduct, removeProduct, singleProduct };
