"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { useEffect, useState } from "react";

const Component = () => {
  const [visible, setVisible] = useState(true);

  const { data: session } = useSession();
  console.log(session)

  useEffect(()=>{
    setTimeout(()=>{
      setVisible(false)
    },3000)
  },[])
  if(session) {
    return <>
    <div className="flex items-center justify-center flex-col pt-[3rem]">
    <Image className="rounded-full border-[1rem] border-[gray] my-[0.5rem]" src={session.user.image} alt="..." quality={100} width={80} height={80}/>
    <h1 className="text-[1.6rem] font-bold">{session.user.name}</h1>
      <h1 className="text-[aquamarine]">Signed in as {session.user.email}</h1><br/>
      <button onClick={() => signOut()} className="font-semibold border-gray-400 border-[0.1rem] p-[0.5rem] rounded-xl hover:bg-white hover:text-black">Sign out</button>
      {visible && <h1 className="my-[1rem] font-semibold text-[2.5rem] text-[#e100ffda]">🎊🎉🎊 Congratulations you have signed in Successfully 🎊🎉🎊</h1>}
    </div>
    </>
  }
  return <>
  <div className="flex items-center justify-center flex-col pt-[3rem]">
    <h1 className="text-[1.6rem] font-bold">Sign in please</h1><br/>
    <button onClick={() => signIn()} className="font-semibold border-gray-400 border-[0.1rem] p-[0.5rem] rounded-xl hover:bg-white hover:text-black">Sign in</button>
  </div>
  </>
}

export default Component