"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Link from "next/link";

const page = () => {
    const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://basic-blog.teamrabbil.com/api/post-newest')
      .then(res => res.json()) // Corrected the syntax here
      .then(data => {
        setData(data)
        console.log(data[0],"got these data");
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
    return (
 <div className="h-fit mt-10 mb-10 p-5">
        <ul>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {data.map((item) => (
         <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={item.img} alt="img"/></figure>
          <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.short }</p>
            <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                    <Link className="link" href={`/Pages/Blog/${item.id}`}>
                    Read more...
                    </Link>
                    </button>
            </div>
          </div>
        </div> 
        ))}
          </div>
      
          
      </ul>
        </div>
    );
};

export default page;