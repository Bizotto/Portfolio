import { MyLinks } from './MyLinks';

export function Footer() {
  return (
    <footer className="flex mx-auto max-w-7xl justify-between py-6">
      <p className="text-[#8B7F54]">Made with 💜 by Bizotto</p>
      <MyLinks
        github="https://github.com/Bizotto"
        linkedin="https://www.linkedin.com/in/nicolas-bizotto/"
        instagram="https://www.instagram.com/0bizotto/"
      />
    </footer>
  );
}
