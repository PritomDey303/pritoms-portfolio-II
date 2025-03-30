import About from '@/components/home/about/About';
import Banner from '@/components/home/banner/banner';
import Contact from '@/components/home/contact/Contact';
import Education from '@/components/home/education/Education';
import Hero from '@/components/home/hero/Hero';
import Project from '@/components/home/project/Project';
import Skills from '@/components/home/skills/Skills';
import Toast from '@/utilityFunctions/Toast';

export default function Home () {
  return (
    <div className="mt-20">

      <Hero />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
      <Banner />
    </div>
  );
}
