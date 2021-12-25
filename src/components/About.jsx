import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col px-32 py-12 justify-center space-y-6">
        <div className="flex items-center justify-center">
          <img src="images/perfil.jpg" alt="Perfil" className="rounded-full h-48"/>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-4xl font-semibold pt-6">José Armando Ñiquen Farroñay</p>
        </div>
        <ul className="flex space-x-10 items-center justify-center">
          <li>
            <a href="https://github.com/joseniquen08" rel="noreferrer" target="_blank" className="text-4xl hover:bg-slate-700 hover:rounded-full px-3.5 py-2.5" ><Icon icon={faGithub} /></a>
          </li>
          <li>
            <button to="/" className="text-4xl hover:bg-slate-700 hover:rounded-full px-3.5 py-3" ><Icon icon={faEnvelope} /></button>
          </li>
        </ul>
        <hr />
        <div>
          <p className="text-2xl">Soy un estudiante universitario de Ingeniería de Sistemas. Tengo experiencia no profesional por más de un año en uso de tecnologías y herramientas web, y conocimientos básicos en distintos lenguajes de programación.</p>
        </div>
        <div className="text-2xl space-y-2">
          <p>Cosas que he aprendido en este programa:</p>
          <ul className="space-y-1">
            <li className="flex items-center"><Icon icon={faCheckCircle} /><p className="ml-2">SCRUM</p></li>
            <li className="flex items-center"><Icon icon={faCheckCircle} /><p className="ml-2">Conceptos avanzados de JavaScript</p></li>
            <li className="flex items-center"><Icon icon={faCheckCircle} /><p className="ml-2">Más sobre Git</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
