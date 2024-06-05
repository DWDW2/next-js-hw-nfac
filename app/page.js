import Image from "next/image";
import Button from "./components/Button";
import Input from "./components/Input";

export default function Home() {
  return (
    <div className="text-center w-full pt-10">
      <h1 className="font-bold text-[24px]">
        Nfactorial incubator blog
      </h1>
      <h3 className="text-sm">
        nFactorial Incubator: Launch Your Web Product in 3 Months
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mr-10 ml-10 sm:mr-28 sm:ml-28">
        <Input placeholder="Имя" />
        <Input placeholder="Номер" />
        <Button />
      </div>
        <img src="https://framerusercontent.com/images/F6zn3wYuthzj0Iq3EQ6tTrXzR6w.jpg?scale-down-to=2048" className="w-3/4 rounded-md mr-auto ml-auto mt-16"/>
    </div>
  );
}
