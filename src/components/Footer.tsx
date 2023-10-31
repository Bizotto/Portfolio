import { MyLinks } from './MyLinks';

export function Footer() {
  return (
    <footer className="flex mx-auto max-w-7xl items-center justify-between py-6 max-sm:px-4">
      <p className="text-[#8B7F54]">Made with 💜 by Bizotto</p>
      <MyLinks
        github="https://github.com/Bizotto"
        linkedIn="https://www.linkedin.com/in/nicolas-bizotto/"
        Instagram="https://www.instagram.com/0bizotto/"
      />
    </footer>
  );
}
