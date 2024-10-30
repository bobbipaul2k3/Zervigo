import { Link } from "react-router-dom";

const profiles = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "Worker.jpg",
    services: ["Web Design", "UX Research"],
    bio: "Experienced web designer with a keen eye for user-centric designs. I specialize in creating intuitive and visually appealing websites.",
    rating: 4.9,
    reviews: 203,
    startingPrice: 500,
    rank: 1,
  },
  {
    id: 2,
    name: "Bob Smith",
    photo: "Worker.jpg",
    services: ["Mobile Development", "UI Design"],
    bio: "Passionate mobile developer with 5+ years of experience. I create sleek, high-performance apps for iOS and Android.",
    rating: 4.8,
    reviews: 187,
    startingPrice: 650,
    rank: 2,
  },
  {
    id: 3,
    name: "Carol Williams",
    photo: "Worker.jpg",
    services: ["Data Analysis", "Machine Learning"],
    bio: "Data scientist with a PhD in Machine Learning. I help businesses make data-driven decisions and implement AI solutions.",
    rating: 4.9,
    reviews: 156,
    startingPrice: 800,
    rank: 3,
  },
  {
    id: 4,
    name: "David Brown",
    photo: "Worker.jpg",
    services: ["SEO Optimization", "Content Writing"],
    bio: "SEO expert and content strategist. I help businesses improve their online visibility and engage their audience with compelling content.",
    rating: 4.7,
    reviews: 98,
    startingPrice: 400,
  },
  {
    id: 5,
    name: "Eva Davis",
    photo: "Worker.jpg",
    services: ["Social Media Marketing", "Brand Strategy"],
    bio: "Creative social media marketer with a background in brand management. I help businesses build a strong online presence and engage their target audience.",
    rating: 4.8,
    reviews: 132,
    startingPrice: 550,
  },
  {
    id: 6,
    name: "Frank Miller",
    photo: "Worker.jpg",
    services: ["Video Editing", "Animation"],
    bio: "Professional video editor and animator with 7+ years of experience. I create engaging visual content for businesses and individuals.",
    rating: 4.9,
    reviews: 201,
    startingPrice: 700,
  },
  {
    id: 7,
    name: "Grace Taylor",
    photo: "Worker.jpg",
    services: ["Cybersecurity", "Network Administration"],
    bio: "Certified cybersecurity expert with a focus on network security. I help businesses protect their digital assets and implement robust security measures.",
    rating: 4.8,
    reviews: 87,
    startingPrice: 900,
  },
 
];

function ProfileCard({ profile, isTopThree }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${
        isTopThree ? "col-span-2" : "col-span-1"
      }`}
    >
      <div className="relative">
        <img
          src={profile.photo}
          alt={`profile pic of ${profile.name}`}
          className="w-full h-48 object-cover"
        />
        {profile.rank && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white text-xs font-bold px-2 py-1 rounded-full">
            Top Rated #{profile.rank}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-bold text-lg">{profile.name}</h3>
            <p className="text-gray-600 text-sm">
              {profile.services.join(", ")}
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-3 line-clamp-3">{profile.bio}</p>
        <div className="flex items-center mb-3">
          <svg
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-gray-700 ml-1">{profile.rating}</span>
          <span className="text-gray-500 ml-1">({profile.reviews})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Starting at</span>
          <span className="text-green-600 font-bold">
            Rs.{profile.startingPrice}
          </span>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <Link to="/view_profile">
          <button className="w-full bg-gradient-to-r from-teal-400 to-blue-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function ProfileDisplay() {
  const topProfiles = profiles.slice(0, 3);
  const otherProfiles = profiles.slice(3);

  return (
    <div className="mx-auto px-4 py-8 bg-gradient-to-r from-teal-400 to-blue-400">
      <h1 className="text-3xl font-bold text-center mb-12 text-white font-serif ">
        TOP RATED
      </h1>
      <div className="px-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
        {topProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} isTopThree={true} />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mb-8 font-serif text-white">
        OTHERS
      </h2>
      <div className="px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {otherProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} isTopThree={false} />
        ))}
      </div>
    </div>
  );
}
