import Image from "next/image";

const ProductListComponent = ( { image, category, title, price, discount_price } ) =>
{
    return (
        <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <Image className="w-full" src={ image } alt={ title } width={ 300 } height={ 300 } />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{ category }</div>
                    <p className="text-gray-700 text-base">{ title }</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ price }</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">{ discount_price }</span>
                </div>
            </div>

        </div>
    );
};

export default ProductListComponent;

