"use client";
import React, { useState } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./ui/animated-modal";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function AnimatedModalDemo() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="py-40 flex flex-col items-center justify-center">
      <div className="mb-8">
        <label htmlFor="date-picker" className="block text-lg font-medium text-gray-700 mb-2">
          Select a Date:
        </label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
          placeholderText="Choose your booking date"
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          showPopperArrow={false}
        />
      </div>
      <Modal>
        {selectedDate && (  // Only render the trigger if a date is selected
          <ModalTrigger
            className="bg-gradient-to-r from-teal-400 to-blue-400 dark:bg-white dark:text-black text-white flex justify-center mt-40 group/modal-btn"
          >
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Book Now!!!
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              Click me
            </div>
          </ModalTrigger>
        )}
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Thanks for your booking !!!
            </h4>
            
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <h5>
                Our service provider will attend you shortly.
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
