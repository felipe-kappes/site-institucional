import ImgHeaderBG from '../assets/background-header.png';
import LogoHeader from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="relative pt-20 px-50 pb-36 text-white font-serif">
        <img
          className="absolute inset-0 -z-10 size-full object-cover"
          src={ImgHeaderBG}
          alt="Imagem de fundo"
        />

        <nav className="flex items-center justify-center gap-15">
          <img src={LogoHeader} alt="Logo Marca" />
          <ul className="flex items-center gap-10 font-bold">
            <li>
              <a className="hover:underline hover:underline-offset-8" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="hover:underline hover:underline-offset-8" href="#">
                Serviços
              </a>
            </li>
            <li>
              <a className="hover:underline hover:underline-offset-8" href="#">
                Sobre
              </a>
            </li>
            <li>
              <a className="hover:underline hover:underline-offset-8" href="#">
                Contato
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="color-[#f1daa6] bg-transparent border-2 rounded-sm px-2.5 py-2 uppercase font-bold hover:bg-amber-50 hover:text-amber-950 duration-200"
          >
            Agendar Consulta
          </a>
        </nav>

        <div>
          <h1 className="text-4xl w-112.5 pt-50 mb-6">
            Soluções jurídicas simples para decisões seguras!
          </h1>
          <p className="font-light tracking-wide mb-5 font-sans">
            Especialista em Direito Previdenciário, Cível e Trabalhista.
          </p>
          <a
            href="#"
            className="bg-[#f1daa6] text-[#002a4c] px-2.5 py-2 rounded-md font-bold hover:bg-transparent hover:text-amber-50 border duration-200"
          >
            FALAR COM ADVOGADO
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
