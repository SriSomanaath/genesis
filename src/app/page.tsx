import Image from 'next/image';
import Hero from '../app/Hero/page';
import Explore from '../app/Explore/page';
import Perks from '../app/Perks/page';
import CountDown from '../app/CountDown/page';
import RoadMap from '../app/RoadMap/page';
import Future from '../app/Future/page';
import Footer from '../app/Footer/page';

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />
      <Explore />
      <Perks />
      <CountDown />
      <RoadMap />
      <Future />
      <Footer />
    </main>
  );
}
