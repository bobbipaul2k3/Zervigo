"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./ui/animated-modal";
import { motion } from "framer-motion";


export function AnimatedModalDemo() {

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-gradient-to-r from-teal-400 to-blue-400 dark:bg-white dark:text-black text-white flex justify-center mt-40 group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book Now!!!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            Click me
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Thanks for your booking !!!
             
            </h4>
            
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <h5>
                Our service provider will attend you shorly

              </h5>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            
            <button className="bg-gradient-to-r from-teal-400 to-blue-400 text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 mr-56">
              Booked ✔
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const PlaneIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="none">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
      <path d="M10 9l2 -2l2 2" />
      <path d="M10 15l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="none">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 19c0 -3.87 1.985 -7 5 -7h2" />
      <path d="M12 19c0 -3.87 -1.985 -7 -5 -7h-2" />
      <path d="M12 19v2" />
      <path d="M9 10v-7" />
      <path d="M15 10v-7" />
      <path d="M6 10v-7" />
      <path d="M18 10v-7" />
    </svg>
  );
};

const MicIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="none">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 5a3 3 0 0 1 6 0v6a3 3 0 0 1 -6 0z" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M8 21l8 0" />
      <path d="M12 19l0 2" />
    </svg>
  );
};

const ParachuteIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="none">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4.75 10a7.49 7.49 0 0 1 14.5 0" />
      <path d="M12 10v10" />
      <path d="M9 10c0 3.866 .895 7 3 7s3 -3.134 3 -7" />
      <path d="M8 10a3.5 3.5 0 0 0 -3.5 -3.5" />
      <path d="M16 10a3.5 3.5 0 0 1 3.5 -3.5" />
    </svg>
  );
};
