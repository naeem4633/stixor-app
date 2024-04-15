"use client";
import React, { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { HiArrowsUpDown } from "react-icons/hi2";

export default function Home() {

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ number: '', name: '', time: '', date: '', location: '' });

  // Define your event data
  const eventData = [
    { number: '01', name: 'Web Development', time: '10:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '02', name: 'Hardware', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '03', name: 'Web Development', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '04', name: 'Web Development', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '05', name: 'AI Integration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '06', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '07', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '08', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '10', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '11', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '12', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '13', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '14', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' },
    { number: '15', name: 'Team Collaboration', time: '11:00 AM', date: 'Thu 2 Nov', location: 'Bahria Intellectual Village' }

  ];
  const eventOfTheMonth = eventData.reduce((maxEvent, currentEvent) =>
    parseInt(currentEvent.number) > parseInt(maxEvent.number) ? currentEvent : maxEvent
  );

  const upcomingEvent = eventData.length > 0 ? eventData[0] : null;

  // Filter events for the current month
  const currentDate = new Date();
  const currentMonthEvents = eventData.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear();
  });

  return (
<main>
  {/* Modal div */}
  <div className={`overlay ${overlayVisible ? '' : 'hidden'} fixed inset-0 flex justify-center items-center`} onClick={() => setOverlayVisible(false)}>
    <div className="bg-gray-400 opacity-70 absolute inset-0"></div> {/* Background with 70% opacity */}
    <div className='bg-white rounded-3xl p-6 relative h-[373px] w-[838px] space-y-4' style={{ backgroundColor: 'rgba(255, 255, 255, 1)'}}>
      {selectedEvent && (
        <div className="flex justify-between">
          <p className="text-color-modal font-semibold text-2xl">{selectedEvent.name}</p>
          <div>
            <p className="text-color-modal font-semibold text-color-new">{selectedEvent.date}, {selectedEvent.time}</p>
          </div>
        </div>
      )}
      <p className='text-color-modal font-normal text-xl'>Description</p>
      <p className='color-desc font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aperiam facere dignissimos numquam vitae illum cumque dolorem fuga voluptatum omnis in maxime, ratione voluptatibus similique necessitatibus enim doloribus eaque nesciunt dolore quo? Maiores asperiores porro reiciendis incidunt unde cupiditate deserunt aliquid natus eaque? Nesciunt, culpa. Ea ducimus minima ullam molestias voluptatibus! Architecto, eius quisquam.</p>
      <div className="border-b border-gray-400 p-8 "></div> {/* Underline */}
      {selectedEvent && <p className="text-color-modal text-center text-color-new">{selectedEvent.location}</p>} {/* Location */}
    </div>
  </div>
  <div className="flex flex-col min-h-screen bg-gray-100 sm:flex-row">
    <div className="flex items-center justify-evenly w-full space-x-6 ">
      {/* Left Div: Navigation */}
      <div className="flex flex-col bg-white p-4 h-[880px] w-[80px] ml-[24px] rounded-full ">
        <div className="hover-bg-ECEAFF rounded-full p-2 flex justify-center items-center w-[48px] h-[48px] transition-all duration-500 ease-in-out">
          <FiGrid className="text-2xl text-purple-900" />
        </div>
        <div className="hover-bg-ECEAFF rounded-full p-2 flex justify-center items-center mt-4 w-[48px] h-[48px] bg-gray-50 transition-all duration-500 ease-in-out">
          <FaRegHeart className="text-2xl text-gray-500" />
        </div>
      </div>
      {/* Middle Div: Table */}
      <div className="overflow-hidden">
        <h2 className='font-semibold mb-4 text-[20px]'>Events list</h2>
        {/* Table Header */}
        <div className="flex w-[862px] h-[33px] border-b-2 mb-4">
          <div className="w-1/12 p-2 font-semibold flex items-center text-base">
            #
            <HiArrowsUpDown className="ml-2 text-custom-color text-base font-bold" />
          </div>
          <div className="w-1/4 p-2 font-semibold text-base">NAME</div>
          <div className="w-1/4 p-2 font-semibold text-base">TIME</div>
          <div className="w-1/4 p-2 font-semibold text-base">DATE</div>
          <div className="w-1/4 p-2 font-semibold text-base">LOCATION</div>
        </div>
        {/* Table Content */}
        <div className="overflow-y-auto mb-4 w-[849px] h-[578px]" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {eventData.map((event, index) => (
            <div onClick={() => { setSelectedEvent(event); setOverlayVisible(true); }} key={index} className="clickDiv flex bg-white justify-between items-center rounded-lg cursor-pointer hover-bg-ECEAFF transition-all duration-500 ease-in-out" style={{ marginBottom: "24px", height: "60px" }}>
              <div className="w-1/12 p-2 text-base font-extrabold">{event.number}</div>
              <div className="w-1/4 p-2 text-base text-gray-400 font-medium">{event.name}</div>
              <div className="w-1/4 p-2 text-sm font-bold text-color-new">{event.time}</div>
              <div className="w-1/4 p-2 text-sm font-bold text-color-new ">{event.date}</div>
              <div className="w-1/4 p-2 text-sm font-medium text-color-new">{event.location}</div>
            </div>
          ))}
        </div>
        {/* New div with card-like elements */}
        <div className="flex justify-evenly mt-8 w-[849px]">
          <div className="w-[260px] h-[130px] bg-white mr-24 rounded-xl p-5">
            <h1 className='mb-2 text-gray-500 font-semibold text-xs'>All Events</h1>
            <p className='text-2xl font-bold'>{eventData.length + 1}</p>
          </div>
          <div className="w-[260px] h-[130px] bg-white mr-24 rounded-xl p-5">
            <h1 className='mb-2 text-gray-500 font-semibold text-xs'>This Months Events</h1>
            <p className='text-2xl font-bold'>{currentMonthEvents.length}</p>
          </div>
          <div className="w-[260px] h-[130px] bg-white rounded-xl p-5">
            <h1 className='mb-2 text-gray-500 font-semibold text-xs'>Favourite Events</h1>
            <p className='font-bold text-2xl'>25</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {/* Right Div: Upcoming Events */}
        <div className="bg-white flex flex-col items-center justify-start h-[624px] w-[380px] mb-4 rounded-2xl">
          <h2 className="font-normal text-color text-2xl p-6 self-start">Upcoming Events</h2>
          <div className="overflow-y-auto w-[332px]" style={{ maxHeight: "500px" }}>
            {upcomingEvent && (
              <div className="bg-white rounded-lg h-14 p-2 mb-4 border border-gray-300 hover-bg-ECEAFF transition-all duration-500 ease-in-out cursor-pointer">
                <p className="font-semibold text-md text-color">{upcomingEvent.name}</p>
                <p className="font-normal text-xs text-color-new">{upcomingEvent.date}, {upcomingEvent.time}</p>
              </div>
            )}
          </div>
        </div>
        {/* event of the month display */}
        <div className="bg-white flex flex-col items-center justify-center bg-custom-color shadow-xl shadow-custom-color h-[209px] w-[380px] mb-4 rounded-2xl" style={{ backgroundImage: 'url("public/images/bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="font-bold text-white text-4xl p-4 self-start">Event of <br />the month</h2>
          <div className="bg-white h-[91px] w-[351px] mb-4 rounded-xl p-4">
            <p className="text-base text-colorr font-bold mb-2">{eventOfTheMonth.name}</p>
            <p className="text-sm font-normal">{eventOfTheMonth.date}, {eventOfTheMonth.time}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}