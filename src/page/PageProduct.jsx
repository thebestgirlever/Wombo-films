import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "data.json";

import Product from "main/Product/Product";

const PageProduct = () => {
  let { id } = useParams();
  const [item, _setItem] = useState(() =>
    data.filmList.find((item) => item.id === id)
  );

  console.log(
    "some >>",
    data.filmList.find((item) => item.id === id)
  );

  return <Product item={item} />;
};

export default PageProduct;
