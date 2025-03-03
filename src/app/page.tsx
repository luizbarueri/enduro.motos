import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <Image
          className=""
          src="/tela-enduro.png"
          alt="Tela Enduro"
          width={800}
          height={500}
          priority
          
        />
        <div className="flex flex-col bg-emerald-600 p-4" >
          <form action="" method = "GET">
            <label className="label" htmlFor="data">Data:</label>
            <input className="input" type="text" placeholder = "02/03/2025"/>
            <label htmlFor="nome">Nome:</label>
            <input type="text" />
            <label htmlFor="fone">Fone:</label>
            <hr />
            <input type="text" />
            <label htmlFor="placa">Placa:</label>
            <input type="text" />
            <label htmlFor="modelo">Modelo</label>
            <input type="text"  />
            <hr />
            <button type ="submit" className="bg-black w-40 p-4" >Salvar</button>
          </form>
        </div>

      </main>
     
    </div>
  );
}
