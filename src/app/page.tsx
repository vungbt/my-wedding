import AboutUs from '@/libraries/about-us';
import AttendForm from '@/libraries/attend-form';
import Gallery from '@/libraries/gallery';
import HeroSection from '@/libraries/hero-section';
import { RenderIcon } from '@/libraries/icons';
import Invitation from '@/libraries/invitation';
import Location from '@/libraries/location';
import OutStory from '@/libraries/our-story';
import Testimonials from '@/libraries/testimonials';
import { getRecordInTables } from '@/utils/notion';
import { NotionTableType } from '@/utils/notion/type';

export default async function Home() {
  const pages = await getRecordInTables({ type: NotionTableType.Message });
  const results = pages.results;
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <OutStory />
      <Invitation />
      <Location />
      <Testimonials />
      <Gallery />
      <AttendForm />
      {/* <RenderIcon name="logo" className="w-10 h-10" /> */}
    </div>
  );
}
