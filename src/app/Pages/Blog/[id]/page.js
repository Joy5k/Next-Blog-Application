'use client'
import { useEffect,useState } from "react";


const page = ({params}) => {
    const [data,setData]=useState([])
    const id = parseInt(params.id);
    useEffect(() => {
        fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.postDetails,'this is single data');
                setData(data.postDetails)
            })
        .catch(error=>console.error(error,"the error is in the Single Blog page "))
    },[])

    return (
        <div className="h-fit w-full mb-8">
            <div className="card w-full  bg-base-100 shadow-xl">
  <figure><img src={data.img} alt="Shoes" /></figure>
  <div className="card-body">
                    <h2 className="card-title">{data.title }</h2>
                    <p className="text-lg font-medium">{data.content }</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default page;