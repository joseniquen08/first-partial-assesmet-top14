import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({ id, title, image }) => {

  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(Math.round(Math.random() * 1000));
  const [time, setTime] = useState('');
  const [disabled, setDisabled] = useState(false);

  const leadingZero = (time) => {
    return (time < 10) ? ('0' + time) : + time;
  }

  const chronometer = (time) => {
    let hours = time % 3600 === time ? 0 : Math.trunc(time / 3600);
    time = time % 3600;
    let minutes = time % 60 === time ? 0 : Math.trunc(time / 60);
    time = time % 60;
    let seconds = time;
    setTime(`${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(seconds)}`);
  }

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => {
        chronometer(seconds);
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (seconds === 0) {
      setDisabled(true);
    }
  }, [seconds]);

  return (
    <div className="border rounded-2xl py-4 px-6">
      <div className="flex flex-row space-x-6">
        <div className="flex flex-col space-y-2">
          <div className="w-40 h-40 flex-none grow-0 bg-white flex items-center justify-center rounded-2xl border">
            <img src={image} alt={title} className="object-contain w-32 h-32" />
          </div>
          <div className="flex justify-center items-center">
            <p>{time}</p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-between">
          <p className="text-sm">{title}</p>
          <div className="flex items-center justify-end">
            <button disabled={disabled} onClick={() => navigate(`detalle/${id}`)} className='disabled:hover:bg-slate-800 disabled:cursor-not-allowed disabled:hover:text-white text-sm border font-semibold hover:font-semibold hover:text-slate-800 hover:bg-white w-fit py-2 px-4 rounded-lg' >Go To Detail</button>
          </div>
        </div>
      </div>
    </div>
  )
}
