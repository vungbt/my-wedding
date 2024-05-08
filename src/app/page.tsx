import HeroSection from '@/libraries/hero-section';
import { RenderIcon } from '@/libraries/icons';
import { getRecordInTables } from '@/utils/notion';
import { NotionTableType } from '@/utils/notion/type';

export default async function Home() {
  const pages = await getRecordInTables({ type: NotionTableType.Message });
  const results = pages.results;
  return (
    <div>
      <HeroSection />
      <RenderIcon name="logo" className="w-10 h-10" />
    </div>
  );
}
