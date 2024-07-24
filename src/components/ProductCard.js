'use client'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const ProductCard = ({ name, price, image, hoverImage, discount, size, category, selectedGrid, index, pageType }) => {
    const imageRef = useRef();
    const icon1Ref = useRef();
    const icon2Ref = useRef();
    const isMattresses = pageType === 'Mattress'
    useEffect(() => {
        if (!imageRef || !icon1Ref || !icon2Ref) return
        if (!isMattresses) {
            imageRef.current?.addEventListener('mouseover', addHoverImage)
            imageRef.current?.addEventListener('mouseleave', removeHoverImage)
            return () => {
                imageRef.current?.removeEventListener('mouseover', addHoverImage)
                imageRef.current?.removeEventListener('mouseleave', removeHoverImage)
            }
        }
    }, [])
    const addHoverImage = () => {
        icon1Ref.current.style.display = 'inline-block';
        icon2Ref.current.style.display = 'inline-block';
        imageRef.current.src = '/SampleProduct2.jpg'
    }
    const removeHoverImage = () => {
        icon1Ref.current.style.display = 'none';
        icon2Ref.current.style.display = 'none';
        imageRef.current.src = '/SampleProduct.jpg'
    }
    const [mattresses, setMattresses] = useState([]);

  useEffect(() => {
    const fetchMattresses = async () => {
      try {
        const response = await axios.get('https://ottomonukbackup1.vercel.app/mattresses');
        console.log('API Response:1', response.data);
        setMattresses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMattresses();
  }, []);
    return (
        selectedGrid === 0 ? <div className={`flex p-[20px] md:gap-x-4  border border-primary ${index >= 0 && index < 9 ? "border-b-0" : ""} `}>
            <div className="overflow-hidden rounded-t-xl relative " >
                <span ref={icon1Ref} className='absolute left-5 top-2 text-white hidden z-10'><i className='font-extralight fa fa-regular fa-heart'></i></span>
                <span ref={icon2Ref} className='absolute left-5 top-8 text-white hidden z-10'><i className='font-extralight fa fa-solid fa-code-compare'></i></span>
                {discount.length ? <div className='absolute right-5 top-8 h-12 w-12  bg-primary rounded-full z-10 flex items-center justify-center text-white'>{discount}</div> : ""}
                <img src={isMattresses ? '/MattressSample.webp' : '/SampleProduct.jpg'} ref={imageRef}
                    alt="Product" className="h-[180px] w-[220px]  rounded-t-xl duration-1000 hover:scale-125 " />
            </div>
            <div className='flex items-center flex-wrap justify-between w-full '>
                {!isMattresses && <div className='text-center pt-3'>
                    <a className=" bg-primary p-3 px-2 xs:ms-[0px] ms-[6px] text-white rounded-md">
                        <span>Customize your bed</span>
                    </a>
                </div>}

                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{category}</span>
                    <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{name}</span>
                    <div className="flex items-center">
                        {discount.length ? <><del>
                            <p className="text-sm text-gray-400 cursor-auto me-2">{price}</p>
                        </del>
                            <p className="text-sm cursor-auto text-red-600">{price}</p></> :
                            <p className="text-sm cursor-auto text-gray-400">{price}</p>}
                    </div>
                </div>
            </div>

        </div> : <div className="min-w-full min-h-full bg-white shadow-md rounded-xl  hover:shadow-xl overflow-hidden">
            <div className="overflow-hidden relative">
                <span ref={icon1Ref} className='absolute left-5 top-2 text-white hidden z-10'><i className='font-extralight fa fa-regular fa-heart'></i></span>
                <span ref={icon2Ref} className='absolute left-5 top-8 text-white hidden z-10'><i className='font-extralight fa fa-solid fa-code-compare'></i></span>
                {discount.length ? <div className='absolute right-5 top-8 h-12 w-12  bg-primary rounded-full z-10 flex items-center justify-center text-white'>{discount}</div> : ""}
                <img src={isMattresses ? '/MattressSample.webp' : '/SampleProduct.jpg'} ref={imageRef}
                    alt="Product" className="object-cover rounded-t-xl duration-1000 hover:scale-125" />
            </div>
            <div className='text-center pt-3'>
                {!isMattresses && <a className="byb-badge">
                    <span>Customize your bed</span>
                </a>}
            </div>
            <div className="px-4 py-3">
                <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{category}</span>
                <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{name}</span>
                <div className="flex items-center">
                    {discount.length ? <><del>
                        <p className="text-sm text-gray-400 cursor-auto me-2">{price}</p>
                    </del>
                        <p className="text-sm cursor-auto text-red-600">{price}</p></> :
                        <p className="text-sm cursor-auto text-gray-400">{price}</p>}
                </div>
            </div>
        </div>

    )
}

export default ProductCard