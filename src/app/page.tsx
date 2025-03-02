import Image from "next/image";

export default function Home() {
  return (
    <div className=" p-4">
      <h1>Enduro Motos</h1>
      <main>
        <Image
          className="dark:invert gap-5 p-4"
          src="/file.svg"
          alt="Next.js logo"
          width={90}
          height={19}
          priority
          
        />
        <div className="flex flex-col gap-5 bg-emerald-600 p-4" >
          <label htmlFor="nome">Nome</label>
          <input type="text"  value = "Luiz Santos"/>
          <button className="bg-black">Salvar</button>
        </div>
      </main>
      <footer className="p-4">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={48}
            height={48}
          />
      </footer>
    </div>
  );
}
