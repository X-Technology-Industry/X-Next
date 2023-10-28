import type { FC } from "react";

interface Custom500Props {}

const Custom500: FC<Custom500Props> = () => {
  return (
    <section>
      <p className="text-center text-[64px] font-bold capitalize  text-zinc-800 my-24">
        Woops!
      </p>
      <p className="text-center text-[64px] font-bold capitalize  text-zinc-800 ">
        {"Something went wrong:("}
      </p>
      <p className="text-base font-normal not-italic text-center text-gray-700 mb-6 mt-24">
        Have you tried turning it off and on again?
      </p>
    </section>
  );
};

export default Custom500;
