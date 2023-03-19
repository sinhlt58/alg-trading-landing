import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
  link: string;
  width?: number;
  height?: number;
}
export const SocialLink = ({
  imageUrl,
  link,
  width = 36,
  height = 36,
}: Props) => {
  return (
    <Link href={link} className="cursor-pointer" target="_blank">
      <Image src={imageUrl} alt="Image" width={width} height={height} />
    </Link>
  );
};
