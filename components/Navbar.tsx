import Image from "next/image";
import { headerLogo } from "@/public/images";
import { hamburger } from "@/public/icons";
import Link from "next/link";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Image
            src={hamburger}
            alt="Menu"
            height={25}
            width={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
