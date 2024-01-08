import Dropzone from "@/components/Dropzone";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-lg px-2.5 md:px-20 py-20">
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
