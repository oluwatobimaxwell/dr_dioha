import { AboutSection } from "./components/AboutSection";
import { AcademicSection } from "./components/AcademicSection";
import { FooterSection } from "./components/FooterSection";
import { GetInTouchSection } from "./components/GetInTouchSection";
import { HeaderSection } from "./components/HeaderSection";
import { IntroSection } from "./components/IntroSection";
import { PublicationSection } from "./components/PublicationSection";
import { TrainingSection } from "./components/TrainingSection";
import { WelcomeSection } from "./components/WelcomeSection";
import { useLoadScripts } from "./utils/loadScripts";

export const App = () => {
  useLoadScripts();
  return (
    <>
      <HeaderSection />
      <IntroSection />
      <WelcomeSection />
      <AboutSection />
      <TrainingSection />
      <PublicationSection />
      <AcademicSection />
      <GetInTouchSection />
      <FooterSection />
    </>
  );
};
