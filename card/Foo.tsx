import { cardDataINT } from "@/interface";
import type { FC } from "react";

const Foo: FC<cardDataINT> = ({ data }) => {
  return (
    <section className="h-screen bg-[#212121] flex flex-col justify-center">
      <aside className="bg-black m-auto  text-white p-6 rounded-lg w-full max-w-lg font-mono ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ Welcom to X-Next</p>
          <p className="text-white">+ X-Next@1.0.0</p>
          <p className="text-white">Author:X-29</p>
          <p className="text-green-400">$</p>
        </div>
      </aside>
    </section>
  );
};

export default Foo;
