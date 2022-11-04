
import React from "react";



// components

export default function BarXomp(props) {


      return (
            <>
                  <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                              <img src={props.product.photos[0].file_path} alt="Shoes" width={"212px"} height={"168px"}
                                    style={{ maxWidth: "212px", width: "100%", height: "100%", maxHeight: "168PX" }} />
                        </figure>
                        <div className="card-body">
                              <h6 className="card-title">{props.product.main.product_name}</h6>
                              <p>{props.product.main.city_name}</p>
                              <p>{props.product.main.min_sale_price}</p>
                              <p>{props.product.user_info.first_name+ " "+props.product.user_info.last_name}</p>
                              <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now  </button>
                              </div>
                        </div>
                  </div>
            </>
      )



}