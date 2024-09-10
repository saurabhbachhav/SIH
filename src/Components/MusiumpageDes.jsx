import React from 'react'
import { Link } from 'react-router-dom';
import Booking from './Booking';

function MusiumpageDes() {
  return (
    <div className="h-screen bg-slate-200">
      <h1>To be Included</h1>
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
        >
          <Link to="/booking" className="block w-full h-full">
            Book Ticket
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MusiumpageDes
