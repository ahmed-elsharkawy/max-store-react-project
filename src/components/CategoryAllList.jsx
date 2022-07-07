import React from "react";
import ProductWindow from "./ProductWindow";
function CategoryAllList(props) {
  let categoryList = props.list;
  return (
    <>
      <div className="container">
        <div className="section text-center">
          <div className="items-slider border w-100 p-3">
            <div className="row">
              {categoryList &&
                categoryList.map((item, index) => {
                  return (
                    <div key={index} className="my-2 col-12 col-lg-4 col-md-6">
                      <ProductWindow data={item}></ProductWindow>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAllList;
