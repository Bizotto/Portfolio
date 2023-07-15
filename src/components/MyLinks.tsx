import Link from 'next/link';

interface MyLinksProps {
  linkedin: string;
  github: string;
  instagram: string;
}

export function MyLinks({ github, linkedin, instagram }: MyLinksProps) {
  return (
    <div className="flex items-center gap-1 text-[#8B7F54]">
      <Link href={linkedin}>Linkedin</Link>/<Link href={github}>Github</Link>/
      <Link href={instagram}>Instagram</Link>
    </div>
  );
}
