import { Roboto, Syne } from "next/font/google";


const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap"
});
const syne = Syne({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className={`text-6xl text-white font-bold mb-8 animate-pulse ${syne.className}`}>
        Coming Soon
      </h1>
      <p className={`text-2xl text-white text-lg mb-8 ${roboto.className}`}>
        Offset Prototypes is coming soon
      </p>
    </div>
  );
}
