/* eslint-disable max-len */
import FeatureSection from '@/components/pages/home/FeatureSection';
import ListSection from '@/components/pages/home/ListSection';
import VideoSection from '@/components/pages/home/VideoSection';

export default function Home() {
  return (
    <main>
      <VideoSection />
      <ListSection />
      <FeatureSection />
    </main>
  );
}
