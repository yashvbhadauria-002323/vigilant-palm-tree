import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';

export default function App() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  const handleAddToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="size-full bg-[#f5f5f0] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[#e8e6d8] select-none" style={{ transform: 'translateY(-55%)' }}>
          <div className="text-[20vw] tracking-tight leading-[0.85]" style={{ fontWeight: 900 }}>
            FINEST
          </div>
          <div className="text-[13vw] tracking-tight leading-[0.85]" style={{ fontWeight: 900 }}>
            CEREMONIAL
          </div>
          <div className="text-[20vw] tracking-tight leading-[0.85]" style={{ fontWeight: 900 }}>
            MATCHA
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between ml-[-195px] mr-[-198px] mt-[-2px] mb-[-4px] px-[0px] pt-[24px] pb-[70px]">
        {/* Top Info Panel */}
        <div className="flex gap-3 justify-center pl-[41px] pr-[0px] pt-[0px] pb-[70px]">
          <div className="bg-white rounded-2xl shadow-sm pl-[15px] pr-[9px] py-[16px] ml-[-38px] mr-[1px] mt-[61px] mb-[37px]">
            <div className="mb-1 text-xs" style={{ fontWeight: 800 }}>PRICE</div>
            <div className="text-2xl text-[#a8c940]" style={{ fontWeight: 800 }}>1499/-</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm px-[21px] py-[16px] ml-[9px] mr-[12px] mt-[63px] mb-[37px]">
            <div className="mb-1 text-xs" style={{ fontWeight: 800 }}>SIZE</div>
            <div className="text-2xl text-[#a8c940]" style={{ fontWeight: 800 }}>30g</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm mx-[1px] mt-[63px] mb-[37px] pl-[22px] pr-[0px] pt-[30px] pb-[7px]">
            <div className="text-xs p-[0px] ml-[-1px] mr-[0px] mt-[-16px] mb-[4px]" style={{ fontWeight: 800 }}>TASTE</div>
            <div className="text-lg text-[#a8c940] leading-tight ml-[-1px] mr-[-2px] my-[5px] pl-[0px] pr-[13px] py-[0px]" style={{ fontWeight: 800 }}>
              SWEET,<br />
              SMOOTH,<br />
              VIBRANT
            </div>
          </div>
        </div>

        {/* Center Product Image */}
        <div className="flex items-center justify-center flex-1">
          <ImageWithFallback
            src="/src/imports/IMG_8185.png"
            alt="Koyu Ceremonial Matcha"
            className="object-contain drop-shadow-2xl"
            style={{ width: '1600px', height: 'auto' }}
          />
        </div>

        {/* Bottom Action Panel */}
        <div className="flex flex-col items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 bg-white rounded-full shadow-sm px-[15px] py-[1px]">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-100 rounded-full transition-colors"
            >
              −
            </button>
            <span className="text-lg w-8 text-center" style={{ fontWeight: 600 }}>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-100 rounded-full transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="bg-[#483d5f] hover:bg-[#3a2f4f] text-white rounded-full px-16 py-5"
            style={{ fontWeight: 600 }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}