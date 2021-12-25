import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { Loading } from '../Loading';

export const ListProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  return (
    <>
      {
        products.length === 0 ? (
          <Loading />
        ) : (
          <div className="max-w-7xl mx-auto">
            <p className="text-4xl text-center pt-10 font-medium">Products</p>
                <div className="grid grid-cols-3 p-10 gap-10">
                  {
                    products.map(product => <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} />)
                  }
                </div>
          </div>
        )
      }
    </>
  )
}
