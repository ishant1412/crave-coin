import { X, ScanLine } from "lucide-react";
import { memo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { parseUpi } from "../assets/essentials";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const Scan = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);



  const navigate = useNavigate();



  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Close button */}
      <div className="absolute text-tangy my-5 w-full px-5 flex justify-end">
        <X
          onClick={() => {
          
            navigate("/dashboard");
          }}
        />
      </div>

      {/* Scan frame + instructions */}
      <div className="absolute w-30 h-30 flex items-center justify-center my-65">
        <div className="absolute text-tangy font-sans text-[10px] flex flex-col items-center">
          <div>
            <ScanLine />
          </div>
          <div>Place the QR in Center</div>
        </div>

        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-tangy rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-tangy rounded-tr-lg"></div>

        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-tangy rounded-bl-lg"></div>

        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-tangy rounded-br-lg"></div>
      </div>

  

      {/* Camera preview */}
      <Webcam className="pointer-events-none" ></Webcam>
    
    </div>
  );
};

export default memo(Scan);
