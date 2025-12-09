import { X, ScanLine } from "lucide-react";
import { memo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserQRCodeReader } from "@zxing/browser";
import type { IScannerControls } from "@zxing/browser";
import { parseUpi } from "../assets/essentials";

const Scantest = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsRef = useRef<IScannerControls | null>(null); // ✅ scanner controls from zxing

  const [upiRaw, setUpiRaw] = useState<string | null>(null);
  const [upiData, setUpiData] =
    useState<Record<string, string | null> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // ---- Helper to fully stop camera + scanner ----
  const stopCamera = () => {
    // stop zxing scanning loop
    controlsRef.current?.stop();

    // stop media stream tracks if any
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // ---- Start scanner effect ----
  useEffect(() => {
    if (!videoRef.current) return;

    const codeReader = new BrowserQRCodeReader();

    codeReader
      .decodeFromVideoDevice(
        undefined, // auto-select camera
        videoRef.current,
        (result, err, controls) => {
          // save controls so we can stop later
          if (controls && !controlsRef.current) {
            controlsRef.current = controls;
          }

          if (result) {
            const text = result.getText();
            console.log("QR text:", text);

            // stop scanning once we got something
            controlsRef.current?.stop();

            setUpiRaw(text);
            const parsed = parseUpi(text);

            if (!parsed) {
              setError("Not a valid UPI QR");
              setUpiData(null);
            } else {
              setError(null);
              setUpiData(parsed);
            }
          }

          // err is usually "no QR found in this frame" → you can ignore
        }
      )
      .catch((err) => {
        console.error(err);
        setError("Cannot access camera");
      });

    // Cleanup when component unmounts
    return () => {
      stopCamera();
      //@ts-ignore
      codeReader?.dispose?.(); // optional safety if available in your version
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Close button */}
      <div className="absolute text-tangy my-5 w-full px-5 flex justify-end">
        <X
          onClick={() => {
            stopCamera();
            navigate("/dashboard");
          }}
        />
      </div>

      {/* Scantest frame + instructions */}
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

      {/* Parsed UPI data */}
      {upiData && (
        <div className="absolute bottom-4 w-full max-w-sm mx-auto p-3 rounded-xl bg-slate-900/60 text-sm">
          <p className="font-semibold mb-2">Parsed UPI Details:</p>
          <ul className="space-y-1">
            <li>PA (Payee Address): {upiData.pa}</li>
            <li>PN (Payee Name): {upiData.pn}</li>
            <li>Amount: {upiData.am}</li>
            <li>Currency: {upiData.cu}</li>
            <li>Note: {upiData.tn}</li>
          </ul>
        </div>
      )}

      {/* Camera preview */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        playsInline // 🔑 important for mobile browsers
      />
    </div>
  );
};

export default memo(Scantest);
