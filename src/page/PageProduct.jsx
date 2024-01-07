import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "data.json";

import Roll, { ROLL_TYPE } from '../main/Roll/Roll';

import Product from "main/Product/Product";

const PageProduct = () => {
  const [filmList, setFilmList] = useState(data.filmList);
  let { id } = useParams();
  const [item, _setItem] = useState(() =>
    data.filmList.find((item) => item.id === id)
  );

  console.log(
    "some >>",
    data.filmList.find((item) => item.id === id)
  );

  return <>
    <Product item={item} />
    <Roll
      items={filmList}
      type={ROLL_TYPE.VERTICAL}
      title='Смотрите также'
      moreLinkText=''
    /></>;
};

export default PageProduct;
