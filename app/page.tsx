import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LearningManagement from '@/components/LearningManagement';
import CorporateTrainings from '@/components/CorporateTrainings';
import PersonalisedTraining from '@/components/PersonalisedTraining';
import CapacityDevelopment from '@/components/CapacityDevelopment';
import ManagementProgram from '@/components/ManagementProgram';
import TransformationHub from '@/components/TransformationHub';
import TrainingConsultant from '@/components/TrainingConsultant';
import CtaBanner from '@/components/CtaBanner';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LearningManagement />
        <CorporateTrainings />
        <PersonalisedTraining />
        <CapacityDevelopment />
        <ManagementProgram />
        <TransformationHub />
        <TrainingConsultant />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
