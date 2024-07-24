import { BedFinish, BedStorage, BedTypes, Brands, MatressTypes, MattressFirmness, Prices, Sizes } from '../data/fliter'
import React from 'react'

const ProductFilter = ({ pageType }) => {
    return (

        <div className="join join-vertical  menu w-80 min-h-full bg-base-200 m-0 p-0 text-base-content relative">
            <div className='h-[90vh] overflow-auto  p-4'>
                <div className='text-xl font-medium text-bold ms-4 text-primary mb-3'>Filter</div>
                <hr className=''></hr>
                <div className="collapse collapse-arrow join-item ">
                    <input type="checkbox" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Size
                    </div>
                    <div className="collapse-content">
                        {Sizes.map((item, i) => (
                            <div key={i} className='flex  py-2'>
                                <input type="checkbox" className="checkbox checkbox-md rounded-full" id={item.name} />
                                <label htmlFor={item.name} className="ms-2 flex flex-col"><span>{item.name}</span><span className='text-xs'>{item.size}</span></label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                    <input type="checkbox" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Mattress Type
                    </div>
                    <div className="collapse-content">
                        {MatressTypes.map((item, i) => (
                            <div key={i} className='flex  py-2'>
                                <input type="checkbox" className="checkbox checkbox-md" id={item.title} />
                                <label htmlFor={item.title} className="ms-2 flex justify-between"><span className='block'>{item.title}</span><span className='block'>({item.count})</span></label>
                            </div>
                        ))}
                    </div>
                </div>
                {pageType === 'Mattress' && <>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Mattress Firmness
                        </div>
                        <div className="collapse-content">
                            {MattressFirmness.map((item, i) => (
                                <div key={i} className='flex  py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.title} />
                                    <label htmlFor={item.title} className="ms-2 flex justify-between"><span className='block'>{item.title}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Brand
                        </div>
                        <div className="collapse-content">
                            {Brands.map((item, i) => (
                                <div key={i} className='flex  py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="ms-2 flex justify-between"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div></>}

                {pageType === 'Beds' && <>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Bed Type
                        </div>
                        <div className="collapse-content">
                            {BedTypes.map((item, i) => (
                                <div key={i} className='flex  py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="ms-2 flex justify-between"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </>}
                {pageType === 'Beds' && <>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Bed Storage
                        </div>
                        <div className="collapse-content">
                            {BedStorage.map((item, i) => (
                                <div key={i} className='flex  py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="ms-2 flex justify-between"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </>}
                {pageType === 'Beds' && <>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Bed Finish/Colour
                        </div>
                        <div className="collapse-content">
                            {BedFinish.map((item, i) => (
                                <div key={i} className='flex  py-2'>
                                    <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                                    <label htmlFor={item.name} className="ms-2 flex justify-between"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </>}
                <div className="collapse collapse-arrow join-item ">
                    <input type="checkbox" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Price
                    </div>
                    <div className="collapse-content">
                        {Prices.map((item, i) => (<div className='flex  py-2' key={i}>
                            <input type="checkbox" className="checkbox checkbox-md" id={item.name} />
                            <label htmlFor={item.name} className="ms-2 flex justify-between"><span className='block'>{item.name}</span><span className='block'>({item.count})</span></label>
                        </div>))}
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0'>
                <button className="btn bg-primary text-white m-2" style={{ minWidth: '300px', }}>Show 14 Products</button>
            </div>
        </div>
    )
}

export default ProductFilter