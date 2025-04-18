import { Dispatch, SetStateAction } from "react";
import { formatDate, getHours } from "date-fns";

import { IconArrowBackward } from "@apple/react-sf-symbols";
import React from "react";
import Block from "./components/Block";
import { data } from "../../database/database";

const Card = ({
  setIsMain,
}: {
  setIsMain: Dispatch<SetStateAction<boolean>>;
}) => {
  const image = require("../../assets/logo.png");
  const qrCode = require("../../assets/qrCode.png");

  const { campus, cpf, curse, endDate, name, ru } = data;
  return (
    <div className="h-full flex flex-col items-center">
      {/* Header */}
      <div className="bg-blue-900 p-2 w-full">
        <button
          className="flex items-center pl-1"
          onClick={() => setIsMain(true)}
        >
          <IconArrowBackward className="fill-white" />
          <span className="ml-[0.8rem] text-white">Carteira Estudantil</span>
        </button>
      </div>

      {/* Card */}
      <div className="shadow-2xl border-solid border-gray-400 border-[0.1rem] m-4 flex-grow w-[30rem] rounded-xl p-4 flex flex-col">
        <div className="flex items-center mt-[-1.2rem] w-full">
          <img src={image} alt="" height={50} width={100} />
          <span className="font-bold text-[0.75rem] text-blue-900 pl-[0.2rem]">
            CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER
          </span>
        </div>
        <div className="flex flex-grow justify-between">
          <div className="gap-2 flex flex-col mt-0.2rem">
            <span className="font-bold text-[0.9rem] text-blue-900 mt-[-1rem] mb-[0.4rem]">
              CARTEIRINHA DE IDENTIDADE ESTUDANTIL
            </span>

            <Block isVertical text={name} title="ALUNO" />
            <Block isVertical text={curse} title="CURSO" />
            <Block isVertical text={campus} title="CAMPUS/PAP" />
            <div className="flex gap-1">
              <Block text={ru} title="RU" />
              <Block text={cpf} title="CPF" />
            </div>
            <Block text={endDate} title="VALIDADE" />
            <div>
              <Block
                text={formatDate(new Date(), "Ppp")}
                title="DATA"
              />
            </div>
          </div>

          <div className="flex items-end">
            <img src={qrCode} alt="" className="h-[8rem] w-[8rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
