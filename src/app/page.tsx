import Dropzone from "@/components/Dropzone";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-screen-lg px-2.5 md:px-20 pt-20 pb-10">
        <div className="absolute w-[500px] h-[500px] right-[600px] -bottom-8 bg-red-500/[22%] rounded-full -z-10 blur-3xl" />
        <div className="absolute -right-32 bottom-32 w-[500px] h-[500px] bg-purple-700/[22%] rounded-full blur-3xl" />
      <div className="space-y-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold italic text-center bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Unlimited File Conversions,
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
              No Strings Attached
            </h1>
          </div>
          <p className="text-white/60 text-base md:text-md text-center md:px-24 xl:px-44">
            Unlock creativity with MorphX, your simple solution for free
            multimedia conversion. Transform images, audio, and videos
            effortlessly.
          </p>
        </div>
        <Dropzone />
      </div>
    </main>
  );
}
