"use client"

import { useState, useEffect } from 'react'
import './globals.css'
import Component from './Authenticate';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [comstyle, setComStyle] = useState('hidden');
  const [style, setStyle] = useState('text-[6rem]')

  useEffect(()=>{
    setTimeout(()=>{
      setVisible(true)
      setStyle('text-in-animation')
    },1000)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setStyle('text-animation')
    },5500)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setVisible(false)
    },6500)
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setComStyle('block')
    },7000)
  },[])

  return (
    <main>
    <div className='text-white h-[100vh]'>
    <div className='context'>
      <div className="area flex -z-10 absolute">
      <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
      </div>
    </div>
      {
        visible ?
        <div class="text-container"><h1 className={visible && style}>Welcome to the reality...{visible}</h1></div> : <div className={comstyle}><Component /></div>
      }
    </div>
    </main>
  );
}
