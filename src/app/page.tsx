import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Line } from '@/components/Line';
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import reBuild from '../assets/brands/reBuild.svg';
import code from '../assets/code.svg';
import nick from '../assets/images/nick.jpg';
import mobile from '../assets/mobile.svg';
import uiux from '../assets/uiux.svg';

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl space-y-20">
        <Line />
        <div className="flex flex-col justify-center gap-6">
          <div className="flex justify-center">
            <Image
              className="rounded-full"
              width={150}
              height={150}
              src={nick}
              alt="profile Pic"
            />
          </div>
          <div className="flex-row justify-center">
            <p className="text-2xl text-center text-[#5A5A5A]">
              Olá 👋🏻,
              <br /> Me chamo Nicolas
            </p>

            <p className="text-6xl font-extrabold text-center bg-clip-text bg-gradient-to-r text-transparent from-[#342900d4]  to-[#949012]">
              Construindo experiencias digitais,
              <br /> desenvolvendo momentos.
            </p>
          </div>
        </div>

        <Button
          target="_blank"
          link="https://github.com/Bizotto"
          text="Ultimas criações"
          title="Ultimas criações"
        >
          <ArrowTopRightOnSquareIcon
            className="text-[#8B7F54]"
            width={30}
            height={30}
          />
        </Button>

        <div className="no-scrollbar bg-[#262626] w-full py-10 px-4 overflow-x-auto flex justify-center gap-10 border border-[#363636]">
          <Image width={100} height={100} src={reBuild} alt="profile Pic" />
        </div>

        <div className="">
          <p className="text-3xl font-extrabold text-center bg-clip-text bg-gradient-to-r text-transparent from-[#342900d4]  to-[#949012]">
            Colaborando com marcas e empresas <br />
            para criar resultados impactantes.
          </p>
        </div>

        <div className="flex flex-row gap-4 justify-between sm: flex-wrap">
          <Card
            image={uiux}
            title="UI/UX"
            description="Crio interfaces de usuário intuitivas e agradáveis, com foco na experiência do usuário."
          />
          <Card
            image={code}
            title="DESIGN"
            description="Crio designs de tirar seu folego para te conectar com a sua audiência."
          />
          <Card
            image={mobile}
            title="MOBILE & WEB"
            description="Criatividade e responsividade tanto para aplicações mobile quanto para web."
          />
          <Card
            image={code}
            title="CODE STYLE"
            description="Trazendo a vida do seu site com as melhores tecnologias e estilos do momento."
          />
        </div>
        <Line />

        <div className="items-center space-y-20">
          <h1 className="text-6xl font-extrabold text-center bg-clip-text bg-gradient-to-r text-transparent from-[#342900d4]  to-[#949012]">
            Conte-me sobre o seu <br /> proximo projeto
          </h1>
          <Button
            target="_blank"
            link="https://wa.me/48984793284/?text="
            text="Entre em contato"
            title="Contato"
          >
            <EnvelopeIcon className="text-[#8B7F54]" width={30} height={30} />
          </Button>
        </div>

        <Line />
      </div>
      <Footer />
    </>
  );
}
