"use client"

import { useEffect } from "react";

const ProductGridSelector = ({ selectedGrid, setSelectedGrid }) => {
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleOrientationChange)
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleOrientationChange)
        }
    }, [])
    const handleResize = () => {
        if (!isMobile()) {
            if ((window.innerWidth > 992)) {
                setSelectedGrid(4)
            } else if ((window.innerWidth < 992) && (window.innerWidth > 778)) {
                setSelectedGrid(3)
            } else if (window.innerWidth < 778 && (window.innerWidth > 550)) {
                setSelectedGrid(2)
            } else if (window.innerWidth < 550) {
                setSelectedGrid(2)
            }
        }
    }
    const handleOrientationChange = () => {
        if (!isMobile() && window.innerWidth > 992) {
            setSelectedGrid(4)
        } else if (window.innerWidth < 778) {
            setSelectedGrid(2)
        }
    }
    return (
        <div className="flex gap-2 ">
            <div className="border border-gray-400 flex p-0.5 flex-col" style={{ height: '30px', width: '30px' }} onClick={() => setSelectedGrid(0)} >
                <div className={`border bg-${selectedGrid === 0 ? "black" : "gray-400"} h-2`}></div>
                <div className={`border bg-${selectedGrid === 0 ? "black" : "gray-400"} h-2`}></div>
                <div className={`border bg-${selectedGrid === 0 ? "black" : "gray-400"} h-2`}></div>
            </div>
            <div className="border border-gray-400 flex md:hidden p-0.5" style={{ height: '30px', width: '30px' }} onClick={() => setSelectedGrid(1)}>
                <div className={`border bg-${selectedGrid === 1 ? "black" : "gray-400"} w-full h-full`}></div>
            </div>
            <div className="border border-gray-400 flex p-0.5" style={{ height: '30px', width: '30px' }} onClick={() => setSelectedGrid(2)}>
                <div className={`border ${selectedGrid === 2 ? "bg-black" : "bg-gray-400"}`} style={{ width: '50%' }}></div>
                <div className={`border ${selectedGrid === 2 ? "bg-black" : "bg-gray-400"}`} style={{ width: '50%' }}></div>
            </div>
            <div className="border border-gray-400 hidden md:flex p-0.5" style={{ height: '30px', width: '42px' }} onClick={() => setSelectedGrid(3)}>
                <div className={`border ${selectedGrid === 3 ? "bg-black" : "bg-gray-400"} w-1/3`}></div>
                <div className={`border ${selectedGrid === 3 ? "bg-black" : "bg-gray-400"} w-1/3`}></div>
                <div className={`border ${selectedGrid === 3 ? "bg-black" : "bg-gray-400"} w-1/3`}></div>
            </div>
            <div className="border border-gray-400 hidden md:flex p-0.5" style={{ height: '30px', width: '65px' }} onClick={() => setSelectedGrid(4)}>
                <div className={`border ${selectedGrid === 4 ? "bg-black" : "bg-gray-400"} w-1/4`}></div>
                <div className={`border ${selectedGrid === 4 ? "bg-black" : "bg-gray-400"} w-1/4`}></div>
                <div className={`border ${selectedGrid === 4 ? "bg-black" : "bg-gray-400"} w-1/4`}></div>
                <div className={`border ${selectedGrid === 4 ? "bg-black" : "bg-gray-400"} w-1/4`}></div>
            </div>
            <div className="border border-gray-400  p-0.5 hidden lg:flex" style={{ height: '30px', width: '78px' }} onClick={() => setSelectedGrid(5)}>
                <div className={`border ${selectedGrid === 5 ? "bg-black" : "bg-gray-400"} w-1/5`}></div>
                <div className={`border ${selectedGrid === 5 ? "bg-black" : "bg-gray-400"} w-1/5`}></div>
                <div className={`border ${selectedGrid === 5 ? "bg-black" : "bg-gray-400"} w-1/5`}></div>
                <div className={`border ${selectedGrid === 5 ? "bg-black" : "bg-gray-400"} w-1/5`}></div>
                <div className={`border ${selectedGrid === 5 ? "bg-black" : "bg-gray-400"} w-1/5`}></div>
            </div>
            <div className="border border-gray-400  p-0.5 hidden lg:flex" style={{ height: '30px', width: '91px' }} onClick={() => setSelectedGrid(6)}>
                <div className={`border  bg-${selectedGrid === 6 ? "black" : "gray-400"} w-1/6`}></div>
                <div className={`border  bg-${selectedGrid === 6 ? "black" : "gray-400"} w-1/6`}></div>
                <div className={`border  bg-${selectedGrid === 6 ? "black" : "gray-400"} w-1/6`}></div>
                <div className={`border  bg-${selectedGrid === 6 ? "black" : "gray-400"} w-1/6`}></div>
                <div className={`border  bg-${selectedGrid === 6 ? "black" : "gray-400"} w-1/6`}></div>
                <div className={`border  bg-${selectedGrid === 6 ? "black" : "gray-400"} w-1/6`}></div>
            </div>
        </div>
    )
}

export default ProductGridSelector;
