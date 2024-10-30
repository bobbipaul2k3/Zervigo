"use client";
import React from "react";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({ children, className }) => (
  <button className={`bg-primary text-primary-foreground px-4 py-2 rounded ${className}`}>
    {children}
  </button>
);

const Badge = ({ children }) => (
  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm">
    {children}
  </span>
);

export default function ProfilePage() {
  return (
    <div className=" w-full  p-8 bg-white dark:bg-black">
         <img
                src="Worker.jpg"
                alt="Profile Picture"
                className=" w-60 h-60 object-cover  ml-72 mt-0 "
              />
      <div className="min-h-screen  flex  ml-10 justify-center ">
        <div className="bg-white p-8 w-96 h-96 flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full mt-0 mb-72">
           
            <div className="md:w-2/3 ">
              <div className="mb-4">
                <h1 className="text-3xl font-bold mt-0">John Doe</h1>
                <p className="text-gray-600 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  New York, USA
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Contact</h2>
                <p className="text-gray-600 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  jo@email.com
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>AWS</Badge>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Bio</h2>
                <p className="text-gray-600">
                  Passionate full-stack developer with 5+ years of experience in building scalable web applications. 
                  Loves to contribute to open-source projects and mentor junior developers.
                </p>
              </div>
              <Link to="/Book">
              <Button className="w-full md:w-auto bg-gradient-to-r from-teal-400 to-blue-400">Book a Session</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
