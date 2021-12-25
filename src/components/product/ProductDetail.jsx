import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Icon } from "../Icon";
import { Loading } from "../Loading";

export const ProductDetail = () => {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => setProduct(data));
  }, [id]);

  return (
    <>
      {
        Object.entries(product).length === 0 ? (
          <Loading />
        ) : (
          <div className="px-24 py-10 h-screen max-w-7xl mx-auto">
            <div className="flex flex-row space-x-12">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="uppercase text-lg text-slate-400">{product.category}</p>
                  <p className="text-3xl font-semibold">{product.title}</p>
                </div>
                <hr />
                <div>
                  <p className="text-lg font-light">{product.description}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-72 h-72 flex-none grow-0 bg-white flex items-center justify-center rounded-2xl border">
                  <img src={product.image} alt={product.title} className="object-contain w-60 h-60" />
                </div>
                <div>
                  <p className="text-4xl font-medium text-left">$ {product.price}</p>
                </div>
                <div className="flex items-center">
                  {
                    [0,1,2,3,4].map((val, index) => (
                      product.rating.rate > val ? (
                        (product.rating.rate - val) > 0.5 ? (<Icon key={index} icon={faSolidStar} />) : (<Icon key={index} icon={faStarHalfAlt} />)
                      ) : (<Icon key={index} icon={faRegularStar} />)
                    ))
                  }
                  <p className="ml-4">{product.rating.count > 1 ? `${product.rating.count} reviews` : `${product.rating.count} review` }</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
