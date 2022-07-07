import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryAllList from "../components/CategoryAllList";

function Electronics() {
  let [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/electronics`)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <CategoryAllList list={categoryList}></CategoryAllList>;
}

export default Electronics;
