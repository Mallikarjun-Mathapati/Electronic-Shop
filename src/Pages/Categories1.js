import React, { useContext } from "react";
import { ContextState } from "../Context/Context";

const Categories1 = () => {
  const { data } = useContext(ContextState);
  return (
    <>
      <div className="padding" style={{ paddingTop: "5rem" }}></div>
      <div className="categories1">
        <div className="container">
          <div className="categories1-grid">
            {data.map((eml) => {
              return (
                <>
                  <div className="categories1-grid-1">
                    <img src={eml.img} alt="" />
                    <h4>{eml.brand}</h4>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories1;
