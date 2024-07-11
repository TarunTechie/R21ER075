export default function ProductCard({image,heading,price,rating,dis,avl})
{
    return(
        <div className="flex rounded-xl border-2 border-black">
        <img src={image} className="rounded-t h-52"/>
        <div className="gird items-center justify-center w-full">
        <h1 className=" text-center text-4xl font-bold p-2 ">{heading}</h1>
        <div className="flex justify-center">
        <h1 className=" text-center text-2xl font-bold p-2 ">{`RS.${price}`}</h1>
        <h1 className=" text-center text-xl font-normal p-2 ">{`(${dis}) off`}</h1>
        </div>
        <h1 className=" text-center text-xl font-bold p-2 ">{`${rating}/5`}</h1>
        <h1 className=" text-center text-xl font-bold p-2 ">{avl==='yes'?("Available"):("Not Available")}</h1>
        </div>
    </div>
    )
}