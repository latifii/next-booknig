import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image height="60" width="60" src={logo} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
