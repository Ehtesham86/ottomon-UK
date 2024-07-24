import Image from 'next/image'
import React from 'react'

const HomeProductCard = ({ product, index }) => {
    return (
        <div className='grid-cols-4'>
            <Image
                src={'/OttomanEndLiftBaseclosedBg.jpg'}
                width={400}
                height={400}
                alt={`Card ${index + 1}`}
                style={{ objectFit: 'contain' }}
            />
            <div className='text-center my-4'>
                <a className="byb-badge">
                    <span>Customize your bed</span>
                </a>
            </div>
            <div className="">
                <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{product.category}</span>
                <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{product.name}</span>
                <div className="flex items-center">
                    {product.discount.length ? <><del>
                        <p className="text-sm text-gray-400 cursor-auto me-2">{product.price}</p>
                    </del>
                        <p className="text-sm cursor-auto text-red-600">{product.price}</p></> :
                        <p className="text-sm cursor-auto text-gray-400">{product.price}</p>}
                </div>
            </div>
        </div>
    )
}

export default HomeProductCard