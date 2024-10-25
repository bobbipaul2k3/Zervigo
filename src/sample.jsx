import { useEffect, useState } from "react";
import { User } from "lucide-react";
import "./App.css";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { PinContainer } from "./components/3d-pin";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import SignupFormDemo from "./components/Sup";
import LoginDemo from "./components/Sin";
// import { SignupFormDemo } from "./components/Sup";

export default function ServiceProviderPage() {
  const [location, setLocation] = useState("Loading location...");
  const [jobSearch, setjobSearch] = useState("");

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(
              `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
            );
          },
          (error) => {
            console.error("Error getting location:", error);
            setLocation("Unable to fetch location");
          }
        );
      } else {
        setLocation("Geolocation not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  const serviceProviders = [
    {
      id: 1,
      name: "John Doe",
      service: "Plumbing",
      rating: 4.5,
      image: "/istockphoto-1440019701-612x612.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      service: "Electrician",
      rating: 4.8,
      image: "/istockphoto-1354891373-612x612.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      service: "Carpentry",
      rating: 4.2,
      image: "/premium_photo-1664300494539-313eac2a6095.jpeg",
    },
    {
      id: 4,
      name: "Sarah Brown",
      service: "Cleaning",
      rating: 4.7,
      image: "/images.jpeg",
    },
    {
      id: 5,
      name: "Tom Wilson",
      service: "Painting",
      rating: 4.4,
      image: "/istockphoto-1281640264-612x612.jpg",
    },
    {
      id: 6,
      name: "Emily Davis",
      service: "Gardening",
      rating: 4.6,
      image:
        "/trusted_local_gardeners_gardening_service.jpg.600x370_q85_crop-smart_upscale.jpg",
    },
  ];

  const handleSearch = () => {
    console.log("Search clicked:", location, jobSearch);
  };

  return (
    <>
      <div className="flex flex-col">
        <main className="flex-grow">
          <section
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
            // style={{
            //     backgroundImage: "url(font.png)",
            //     backgroundRepeat: "no-repeat",
            // }}
          >
            <div className="absolute z-40 p-10 right-0 top-0 flex justify-center gap-5">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-white border border-white/50 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black hover:border-cyan-200">
                    Login
                  </button>
                </DialogTrigger>
                <DialogContent className="!p-0  border-0 w-auto bg-transparent">
                  <LoginDemo />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-white border border-white/50 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black hover:border-cyan-200">
                    Sign up
                  </button>
                </DialogTrigger>
                <DialogContent className="!p-0  border-0 w-auto bg-transparent">
                  <SignupFormDemo />
                </DialogContent>
              </Dialog>

              <Link to="/account">
                <button className="text-white border border-white/50 px-4 py-2 rounded flex items-center hover:bg-cyan-400 hover:text-black hover:border-cyan-200">
                  <User className="h-5 w-5 mr-2" />
                  Account
                </button>
              </Link>
            </div>

            <BackgroundBeamsWithCollision>
              <h1 className="absolute text-9xl scale-150 text-white font-bold font-Helvetica Neue">
                Zervigo
              </h1>

              {/* <div className="absolute inset-0 bg-transparent bg-opacity-50"></div> */}
              <div className="z-10 w-full max-w-4xl px-4 text-center">
                <div className="flex mt-96 ml-auto justify-center">
                  <div className="">
                    <input
                      type="text"
                      placeholder="Search for services  "
                      className="pl-10 pr-4 py-3 w-[500PX] rounded-lg border placeholder-white border-white text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:border-cyan-200"
                      value={jobSearch}
                      onChange={(e) => setjobSearch(e.target.value)}
                    />
                  </div>
                  <button
                    className=" px-6 py-3 bg-teal-400 ml-7 hover:bg-red-600 border-white text-white font-medium rounded-lg transition duration-150 ease-in-out  "
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </BackgroundBeamsWithCollision>
          </section>

          <section className="container mx-auto px-4 py-8 bg-white">
            <h1 className="text-3xl mb-6 text-black bg-white font-extrabold mt-10">
              TOP SERVICES
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white">
              {serviceProviders.map((provider, index) => (
                <Link to="/profile" key={index}>
                  <PinContainer title={provider.service}>
                    <div
                      key={provider.id}
                      className="bg-white w-80 border overflow-hidden text-black"
                    >
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-gray-600">{provider.service}</p>
                      </div>
                    </div>
                  </PinContainer>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Zervigo</h3>
                <p className="text-sm">
                  Discover and get the best service providers in your area.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  For Service provi ders
                </h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Partner with us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Apps for you
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Learn More</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              © {new Date().getFullYear()} ZERVIGO. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      {/* <SignupFormDemo></SignupFormDemo> */}
    </>
  );
}
