import Link from "next/link";
import logo from "../../../public/Logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
      <div className="mx-auto w-full max-w-screen-lg px-2.5 md:px-4">
        <div className="md:px-10 px-2.5">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex z-40 font-semibold items-center gap-2"
            >
              <Image src={logo} alt="MorphX" height={28} width={28} />
              <div className="font-ibmPlexMono text-xl space-x-1">
                <span className="text-white text-2xl">MorphX</span>
                <span className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent text-2xl">
                  .
                </span>
              </div>
            </Link>
            <a
              href="https://github.com/Anchit1909/file-convertor"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <Button
                variant="default"
                size="icon"
                className="bg-white/10 backdrop-blur-lg transition-colors hover:bg-stone-900"
              >
                <div className="text-2xl">
                  <FaGithub />
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
