import { useIsDataLoaded } from "./api/hooks";
import { AboutSection } from "./components/AboutSection";
import { AcademicSection } from "./components/AcademicSection";
import { FooterSection } from "./components/FooterSection";
import { GetInTouchSection } from "./components/GetInTouchSection";
import { HeaderSection } from "./components/HeaderSection";
import { IntroSection } from "./components/IntroSection";
import { PageLoading } from "./components/PageLoading";
import { PublicationSection } from "./components/PublicationSection";
import { TrainingSection } from "./components/TrainingSection";
import { WelcomeSection } from "./components/WelcomeSection";
import { useLoadScripts } from "./utils/loadScripts";

export const App = () => {
  const isLoaded = useIsDataLoaded();
  useLoadScripts(isLoaded);
  return (
    <>
      {!isLoaded && <PageLoading />}
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
