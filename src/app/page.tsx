import Dropzone from "@/components/Dropzone";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full mx-auto max-w-screen-lg px-2.5 md:px-20 pt-8 pb-10">
      <div className="absolute w-[600px] h-[600px] right-[400px] bg-red-500/[25%] -z-10  rounded-full blur-3xl" />
      <div className="absolute  w-[600px] h-[600px] left-[400px] bg-purple-700/[25%] -z-10 rounded-full blur-3xl" />
      <div className="space-y-16">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2">
            <a
              href="https://twitter.com/anchit1909"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-white/10 backdrop-blur-lg px-12 py-[6px] transition-colors hover:bg-black"
            >
              <Twitter className="h-5 w-5 text-[#1d9bf0]" />
              <p className="text-sm font-semibold text-[#1d9bf0]">
                Introducing MorphX
              </p>
            </a>
            <h1 className="text-3xl md:text-5xl font-bold italic text-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
              Unlimited File Conversions,
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
              No Strings Attached
            </h1>
          </div>
          <p className="text-white/60 text-base md:text-lg text-center md:px-24">
            Unlock creativity with MorphX, your simple solution for free
            multimedia conversion. Transform images, audio, and videos
            effortlessly.
          </p>
          {/* <div className="relative">
            <div className="bg-gradient-to-tr from-purple-900 via-violet-500 to-orange-600 blur-lg absolute inset-0 pointer-events-none" />
            <Button
              size="lg"
              className="bg-white text-black hover:bg-slate-100 p-3 px-8 relative"
            >
              Get Started
            </Button>
          </div> */}
        </div>
        <Dropzone />
      </div>
    </main>
  );
}
