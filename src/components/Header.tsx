import { Mail } from 'lucide-react';
import Link from 'next/link';
import { MyLinks } from './MyLinks';

export function Header() {
  return (
    <header className="flex mx-auto max-w-7xl mb-6 itens-center justify-between max-lg:px-4 max-md:px-4 max-sm:px-4">
      <Link
        target="_blank"
        className="flex group gap-3 items-center hover:scale-110 transition duration-300 ease-in-out "
        href="https://wa.me/48984793284/?text=Olá%20Nicolas%20Bizotto,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
      >
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#C5BFAA25]">
          <Mail className="text-[#8B7F54] group-hover:text-[#C5BFAA] group-hover:scale-110 transition duration-300 ease-in-out" />
        </div>
        <p className="text-[#8B7F54] group-hover:text-[#C5BFAA] max-sm:hidden transition duration-300 ease-in-out">
          Entre em contato comigo!
        </p>
      </Link>
      <MyLinks
        github="https://github.com/Bizotto"
        linkedIn="https://www.linkedin.com/in/nicolas-bizotto/"
        Instagram="https://www.instagram.com/nicolasibizotto/"
      />
    </header>
  );
}
