import React, { Dispatch, SetStateAction } from "react";
import Button from "./components/Button";
import {
  IconPersonTextRectangle,
  IconPencilLine,
  IconScroll,
  IconGearshape,
} from "@apple/react-sf-symbols";
import Text from "./components/Text";
import { data } from "../../database/database";

const Main = ({
  setIsMain,
}: {
  setIsMain: Dispatch<SetStateAction<boolean>>;
}) => {
  const image = require("../../assets/background.png");

  return (
    <div
      className={`h-screen bg-center bg-cover`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="p-4 flex align-middle flex-col h-full justify-center">
        <span className="text-white text-center font-bold text-sm">
          {data.name.toUpperCase()}
        </span>
        <div className="py-12 px-2 gap-[14rem] flex flex-col">
          <div className="flex justify-around">
            <Button onClick={() => setIsMain(false)}>
              <div className="flex flex-col items-center">
                <Text>Carteira</Text>
                <IconPersonTextRectangle className="h-[1.6rem] w-[2rem]" />
                <Text>Estudantil</Text>
              </div>
            </Button>
            <Button>
              <IconGearshape className="h-[1.6rem] w-[2rem]" />
            </Button>
          </div>
          <div className="flex justify-around">
            <Button>
              <div className="flex flex-col items-center">
                <IconPencilLine className="h-[1.6rem] w-[2rem]" />
                <Text className="mt-[0.2rem]">Inscrição</Text>
              </div>
            </Button>
            <Button>
              <div className="flex flex-col items-center">
                <IconScroll className="h-[1.6rem] w-[2rem]" />
                <Text className="mt-[0.2rem]">Financeiro</Text>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
