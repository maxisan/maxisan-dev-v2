import { AboutSection } from "./features/homepage/AboutSection";

export default function Home() {
  return (
    <div className="grid grid-rows-2 w-full h-full gap-4 md:grid-cols-[minmax(50%,1fr)_minmax(0,20rem)]">
      <AboutSection />
      <section className="section md:col-start-1 md:row-start-1 md:row-span-2">
        Projects
      </section>
    </div>
  );
}
