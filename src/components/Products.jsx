import React,{ useEffect } from 'react'
import {add} from '../store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import {STATUSES} from '../store/productSlice';
const Products = () => {
      const dispatch = useDispatch();
      const {data: products,status} = useSelector((state)=>state.product);
     useEffect(() => {
      // const fetchProducts = async ()=>{
      //   const res = await fetch('https://fakestoreapi.com/products')
      //   const data = await res.json();
      //       setProducts(data);
      // }

      // fetchProducts();
            dispatch(fetchProducts());
      
    }, []);
    
    const handleAdd = (product)=>{
        //product to store in redux store
        dispatch(add(product));
    }
    if(status === STATUSES.LOADING){
      return (
        <h2> Loading</h2>
      )

    }
    if(status === STATUSES.ERROR){
      return (
        <h2> Error </h2>
      )

    }
  return (
    <div className='productsWrapper'>
        {
            products.map(product =>(
                <div className='card' key= {product.id}> 
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
                </div>
            ))
        }


    </div>
  )
}

export default Products