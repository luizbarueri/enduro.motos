import Image from "next/image";

export default function Enduro() {
  return (
    <div className="">
          
        <Image
          className="dark:invert"
          src="/enduro.png"
          alt="Tela Enduro"
          //width={90}
          //height={19}
          priority
          
        />
        
    </div>
  );
}
