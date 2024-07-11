import { useEffect, useState } from "react"
import product_card from "../components/product_card"
import Product_card from "../components/product_card"
export default function Product()
{
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState([])
    async function getProd()
    {
        setLoading(false)
    }
    useEffect(()=>{getProd()},[])
    return(
        <div>
           {loading?(
            <div>PAGE IS LOADING</div>
           ):(
            <div>
                <h1>PRODUCTS PAGE</h1>
                <h1 className="text-5xl underline underline-offset-4 my-20">LAPTOPS</h1>
                <div className="grid grid-cols-2 justify-center items-center gap-10">
                <Product_card
                image={'/image.jpg'}
                heading={'laptop'}
                price={'50000'}
                rating={'4.5'}
                dis={"10%"}
                avl={"yes"}
                />
                 <Product_card
                image={'/image.jpg'}
                heading={'laptop'}
                price={'50000'}
                rating={'4.5'}
                dis={"10%"}
                avl={"yes"}
                /></div>
            </div>
           )}
        </div>
    )
}