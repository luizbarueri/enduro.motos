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

          <form action="" method = "GET">
            <label htmlFor="data">Data:</label>
            <input type="text" placeholder = "02/03/2025"/>
            <label htmlFor="nome">Nome:</label>
            <input type="text" placeholder = "Luiz Santos"/>
            <label htmlFor="fone">Fone:</label>
            <input type="text" placeholder = "(11) 93005-9542"/>
            <label htmlFor="placa">Placa:</label>
            <input type="text" placeholder = "LUI-4589"/>
            <label htmlFor="modelo">Modelo</label>
            <input type="text"  placeholder = "HONDA TITAN 180 CC"/>
            <hr />
            <button type ="submit" className="bg-black w-40" >Salvar</button>
          </form>
           
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
