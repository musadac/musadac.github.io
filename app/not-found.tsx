'use client'

import React, { useEffect } from 'react';

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))];
const randomString = (length: any) =>
  Array.from(Array(length))
    .map(randomChar)
    .join("");


function NotFoundPage() {

    useEffect(() => {
        const card = document.querySelector(".card");
        if(card){
          const letters = card.querySelector<HTMLElement>(".card-letters") ;
    
          const handleOnMove = (e:any) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if(letters === null){
              return;
            }
            letters.style.setProperty("--x", `${x}px`);
            letters.style.setProperty("--y", `${y}px`);
            letters.innerText = randomString(15000);
          };
      
          card.addEventListener("mousemove", handleOnMove);
          card.addEventListener("touchmove", (e:any) => handleOnMove(e.touches[0]));
      
          return () => {
            card.removeEventListener("mousemove", handleOnMove);
            card.removeEventListener("touchmove", (e:any) => handleOnMove(e.touches[0]));
          };
        }
        
      }, []);


	return (
        <div className='card h-screen w-screen bg-black'>
            <div className="card-letters h-screen text-gray-100 opacity-10 cursor-default overflow-hidden break-words">
            {/* <div className='absolute t-0  text-white text-8xl'>NOT FOUND</div> */}
            </div>
        </div>

    );
}

export default NotFoundPage