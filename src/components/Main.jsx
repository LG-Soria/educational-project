import React from "react";
/**import burgerCentro from "./../assets/img/burger-centro.png";
import burgerLeft from "./../assets/img/burguerLeft.png";
import burgerRight from "./../assets/img/burguerRight.png";
import pedidosYa from "./../assets/img/pedidosYa.png";
import rappi from "./../assets/img/rappi.png";
import uberEats from "./../assets/img/uberEats.png"; */
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import niño from "./../assets/img/niño.png";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Main() {
  return (
    <div className="ml-20">
      <div className="h-[720px]  mt-2 flex flex-row  gap-10  ">
        <div className="circle1 circle2  ">
          <div className="mainUno flex flex-col gap-16 w-[45rem]  ">
            <h1 className="text-5xl  mt-12 w-[42rem] text-black  font-extrabold title">
              Descubre una nueva forma de{" "}
              <span className="text-[#6edc9a]">aprender</span>
            </h1>
            <p className="leading-9 text-xl font-medium">
              Aprovecha la flexibilidad, la comodidad y las infinitas
              posibilidades que ofrece la educación en línea para alcanzar tus
              metas y sueños. Tu viaje educativo comienza aquí.
            </p>
          </div>
          <div className="mt-20  flex flex-col gap-16 tracking-wider">
            <ul className="flex flex-col gap-5 font-normal text-xl">
              <li className="flex flex-row gap-4 items-center">
                <IoCheckboxOutline className="w-8 h-8 text-[#6edc9a]" /> Acceso
                a 10.000 cursos online
              </li>
              <li className="flex flex-row gap-4 items-center">
                <IoCheckboxOutline className="w-8 h-8 text-[#6edc9a]" /> Aprende
                con expertos en aprendizaje infantil
              </li>
              <li className="flex flex-row gap-4 items-center">
                <IoCheckboxOutline className="w-8 h-8 text-[#6edc9a]" />{" "}
                Descubre las habilidades más asombrosas que te ayudaran a
                impulsarte
              </li>
            </ul>

            <button className="bg-[#6EDC9A] flex flex-row gap-2 items-center justify-center text-white rounded-full w-[16rem] h-[2.5rem] text-lg">
              Explora todos los cursos{" "}
              <CiLocationArrow1 className="w-6 h-6 rotate-12" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center m-auto mt-[7rem]   circle3 circle4  ">
          <div className="z-1 cuadro1  cuadro2">
            <img src={niño} alt="" className="w-[25rem] h-[35rem]    " />
          </div>

          <div
            className="w-[22rem] h-[5rem] bg-white -right-20 -top-20 z-10 relative shadow-2xl 
          flex flex-row rounded-xl items-center justify-center gap-5 "
          >
            <div className="bg-[#6edc9a] w-[4rem] h-[4rem] p-2 text-white items-center flex rounded-xl">
              <FaGraduationCap className="w-[3rem] h-[3rem]  " />
            </div>

            <div className="font-medium text-xl leading-7 tracking-wide ">
              <p>358.000</p>
              <p>Estudiantes admitidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
