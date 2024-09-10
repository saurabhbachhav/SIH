import React from 'react'
import { Link } from 'react-router-dom';
function Card(props) {
  return (
    <div>
      <div className="w-[300px] rounded-md border hover:shadow-2xl  m-5">
        <img
          src={props.image}
          alt="Laptop"
          className="h-[150px] w-full rounded-md object-cover  cursor-pointer"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{props.name}</h1>
          <p className="mt-3 text-sm text-gray-600">{props.desc}</p>
          <button
            type="button"
            className="mt-4 rounded-2xl bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
          >
            <Link to="/Musiumpage" className="block w-full h-full">
              Visit
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card
