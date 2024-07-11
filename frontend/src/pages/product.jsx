import { useEffect, useState } from "react"
import product_card from "../components/product_card"
import Product_card from "../components/product_card"
import api from '../constants/api'
export default function Product()
{
    const[loading,setLoading]=useState(true)
    const[cat,setCat]=useState('')
    const[min,setMin]=useState('')
    const[max,setMax]=useState('')
    const[data,setData]=useState([])
    function handelCat(event)
    {
        setCat(event.target.value)
    }
    function handelMax(event)
    {
        setMax(event.target.value)
    }
    function handelMin(event)
    {
        setMin(event.target.value)
    }
    async function getProd()
    {
        try{
            const result=api.get(`/categories/${cat}/products`,{params:{'max':max,'min':min}})
            setData(result.data)
            setLoading(false)
        }
        catch(error)
        {

        }
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
                <div>
                    <input type="text" className="field" placeholder="enter the category" onChange={handelCat}/>
                    <input type="text" className="field" placeholder="enter the max price" onChange={handelMax}/>
                    <input type="text" className="field" placeholder="enter the min price" onChange={handelMin}/>
                </div>
                <h1 className="text-5xl underline underline-offset-4 my-20">LAPTOPS</h1>
                <div className="grid grid-cols-2 justify-center items-center gap-10">
                <Product_card
                image={'/image.jpg'}
                heading={'laptop 10'}
                price={'50000'}
                rating={'4.5'}
                dis={"10%"}
                avl={"yes"}
                />
                 <Product_card
                image={'/image.jpg'}
                heading={'laptop 12'}
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