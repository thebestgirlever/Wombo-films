import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "data.json";

import Roll, { ROLL_TYPE } from "../main/Roll/Roll";

import Product from "main/Product/Product";

const PageProduct = () => {
  const [filmList] = useState(data.filmList);
  let { id } = useParams();

  const [item, setItem] = useState(() =>
    data.filmList.find((item) => item.id === id)
  );

  useEffect(() => {
    setItem(data.filmList.find((item) => item.id === id));
  }, [id]);

  return (
    <>
      {item ? <Product item={item} /> : null}
      <Roll
        items={filmList}
        type={ROLL_TYPE.VERTICAL}
        title="Смотрите также"
        moreLinkText=""
      />
    </>
  );
};

export default PageProduct;
