import Image from 'next/image';

interface CardProps {
  image: any;
  title: string;
  description: string;
}

export function Card({ image, title, description }: CardProps) {
  return (
    <div className="flex flex-col w-72 h-96 border border-[#363636] bg-[#262626] gap-4 rounded-md justify-end p-6">
      <Image height={40} width={40} src={image} alt="profile Pic" />
      <h1 className="font-extrabold text-lg text-[#5A5A5A]">{title}</h1>
      <p className="text-[#5A5A5A] text-md">{description}</p>
    </div>
  );
}
