/* eslint-disable max-len */
import CasesSection from '@/components/pages/home/CasesSection';
import FeatureSection from '@/components/pages/home/FeatureSection';
import ListSection from '@/components/pages/home/ListSection';
import PricingTable from '@/components/pages/home/PricingTable';
import SocialProof from '@/components/pages/home/SocialProof';
import VideoSection from '@/components/pages/home/VideoSection';
import HeroSection from '@/components/pages/home/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <ListSection />
      <FeatureSection />
      <CasesSection />
      <SocialProof />
      <PricingTable />
    </main>
  );
}
