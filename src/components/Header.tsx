import { Mail } from 'lucide-react';
import Link from 'next/link';
import { MyLinks } from './MyLinks';

export function Header() {
  return (
    <header className="flex mx-auto max-w-7xl mb-6 itens-center justify-between max-lg:px-4 max-md:px-4 max-sm:px-4">
      <Link
        target="_blank"
        className="flex gap-3 items-center transition duration-300 ease-in-out "
        href="https://wa.me/48984793284/?text=Olá%20Nicolas%20Bizotto,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
      >
        <div className="h-10 w-10 hover:scale-110 flex items-center justify-center rounded-full bg-[#C5BFAA25]">
          <Mail className="text-[#8B7F54] hover:text-[#C5BFAA] transition duration-300 ease-in-out" />
        </div>
        <p className="text-[#8B7F54] hover:text-[#C5BFAA] hover:scale-110 max-sm:hidden transition duration-300 ease-in-out">
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
