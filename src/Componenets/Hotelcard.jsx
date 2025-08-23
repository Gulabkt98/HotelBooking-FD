import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hotecard = ({ room, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8; // tilt max 8deg
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setRotate({ x: 0, y: 0 });

  return (
    <Link
      to={"/room" + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-70 w-full"
    >
      {/* Glowing border wrapper */}
      <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 animate-borderGlow">
        <motion.div
          className="rounded-xl bg-white shadow-lg overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          <img src={room.images[0]} alt="" className="rounded-t-xl" />

          {index % 2 === 0 && (
            <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
              Best Seller
            </p>
          )}

          <div className="p-4 pt-5">
            <div className="flex item-center justify-between">
              <p className="font-playfair text-xl font-medium text-gray-800">
                {room.hotel.name}
              </p>
              <div className="flex items-center gap-1">
                <img src={assets.starIconFilled} alt="star-icon" />4.5
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm">
              <img src={assets.locationIcon} alt="location-icon" />
              <span>{room.hotel.address}</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p>
                <span>₹{room.pricePerNight}</span>/night
              </p>
              <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition-all cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Hotecard;
