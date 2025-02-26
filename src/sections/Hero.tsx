import Button from "@/components/Button";
import Image from "next/image";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip md:mt-[150px]">
      <div className="container relative">
        <div className="hidden lg:block absolute -left-32 top-16">
          <Image src={designExample1Image} alt="Design example one image" />
        </div>
        <div className="hidden lg:block absolute -right-64 -top-16">
          <Image src={designExample2Image} alt="Design example two image" />
        </div>

        <div className="flex items-center justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5 seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-medium text-center mt-8 max-w-2xl mx-auto">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 p-2 rounded-full mt-8 gap-14 mx-auto md:max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 py-1 md:flex-1 w-full"
          />
          <Button
            size="sm"
            type="submit"
            variant="primary"
            className="md:block whitespace-nowrap "
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
