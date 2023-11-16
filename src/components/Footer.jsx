import React from "react";
import logo from "./../assets/img/iconoBlack.svg";


import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#6EDC9A] h-[25rem] flex flex-row gap-56  text-[#5D544D] justify-center items-start  pt-16 ">
        <div className="flex flex-col justify-center items-center gap-y-6 ">

          <div className="my-auto  flex flex-row gap-4 items-center  relative ">
            <img src={logo} alt="" className="w-8 " />
            <p className="font-extrabold text-2xl ">SaberSiempre</p>
            
          </div>

          <ul className="flex flex-row justify-center items-center gap-4 ">
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center  text-black">
          <p className="text-xl left-2 font-semibold text-start">Ayuda</p>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>¿Cómo comprar los cursos?</li>
            <li>¿Qué medios de pago hay?</li>
            <li>¿Cómo se puede pagar?</li>
            <li>Devoluciones</li>
            <li>Condiciones de servicio</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center  ">
          <p className="left-5 font-bold text-xl mb-3 relative">Contacto</p>
          <div className="flex flex-row ">
            <AiOutlineMail className=" w-16 h-8" />
            <p>contacto@sabersiempre.com.ar</p>
          </div>
          <div className="flex flex-row ">
            <AiFillPhone className=" flex w-16 h-8" />
            <div>
              <p>0800-444-9320</p>

              <p>Lunes a sabados de 8 a 22hs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] flex justify-center items-center text-white font-sans h-10 -mt-10">
        <span>@2023 SaberSiempre - Todos los derechos reservados</span>
      </div>
    </div>
  );
}
