import Link from "next/link";
import HousingCard from "./components/HousingCard";

/* <main>
<div className="container mx-auto relative">
<img src="https://cdn12.picryl.com/photo/2016/12/31/building-plan-floor-plan-architectural-architecture-buildings-8fef84-1024.jpg" alt="Housing" className="w-full" />
<h1 className="text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to Dencity</h1>
</div>
</main> */

export default function Home() {
  return (
    <main>
      <div className="container m-auto relative w-screen">
      <img src="https://cdn12.picryl.com/photo/2016/12/31/building-plan-floor-plan-architectural-architecture-buildings-8fef84-1024.jpg" alt="Housing" className="w-full" />
        <h1 className="text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to Dencity</h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-bounce mb-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Who is this for?</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-4">For Owners</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl a tincidunt aliquam, urna elit tincidunt urna, id lacinia nunc nisl id nunc.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-4">For Developers</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl a tincidunt aliquam, urna elit tincidunt urna, id lacinia nunc nisl id nunc.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Statistics</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-4">Statistic 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-4">Statistic 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-4">Statistic 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Video Demo</h2>
          <div className="flex justify-center"></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="Video Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>
    </main>
  );
}