import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div
      className={`p-4 rounded-[26px] text-white flex flex-col flex-1 mb-4 lg:mb-0 items-center`}
    >
      <Image src={icon} alt={"icon"} height={40} width={40} className="py-4" />
      <h3 className="text-lg font-semibold min-h-14">{title}</h3>
      <p className="text-base pb-2 mb-auto">{description}</p>
    </div>
  );
}
