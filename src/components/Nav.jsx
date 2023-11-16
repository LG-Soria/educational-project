import React from "react";
import logo from "./../assets/img/icono.svg";
import { IoMdSearch } from "react-icons/io";

export default function Nav() {
  return (
    <div className=" flex flex-row h-14  justify-between  items-center mt-6">
      <div className="my-auto  ml-20  flex flex-row gap-4 items-center justify-center relative ">
       <div className="flex justify-center items-center mt-2">
       <img src={logo} alt="" className="w-[3rem] h-[3rem]" />
       </div>
        <p className="font-extrabold text-4xl   text-[#6EDC9A] ">SaberSiempre</p>
      </div>

      <ul className="flex flex-row  list-none gap-28    my-auto font-medium">
        <li>
          <button>Inicio</button>
        </li>
        <li>
          <button>Eventos</button>
        </li>
        <li>
          <button>Cursos</button>
        </li>
        <li>
          <button>Docentes</button>
        </li>
        <li>
          <button>Contactanos</button>
        </li>
      </ul>
     
      <div className="my-auto mx-10 flex flex-row gap-6">
      
        <IoMdSearch className="w-[2rem] h-[2rem]" />
       
        <button className="bg-[#6EDC9A] text-white w-[10rem] h-[2rem] rounded-full ">Iniciar sesión</button>
      </div>
 
    </div>
  );
}
