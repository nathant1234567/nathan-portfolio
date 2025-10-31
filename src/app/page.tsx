import ButtonLink from "@/components/ui/ButtonLink";
import Heading from "../components/ui/Heading";
import Socials from "../components/ui/Socials";
import Education from "@/components/ui/Education";
import PageWrapper from "@/components/layout/PageWrapper";
import NavigationPane from "@/components/navigation/NavigationPane";
import About from "@/components/ui/About";
import HomeProjects from "@/components/ui/HomeProjects";
import { projects } from "@/data/projects";

export default function Home() {
  return (
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-0 md:flex-row md:items-start md:gap-16 lg:px-16">
          <main className="flex-1">
              <PageWrapper>
                  <Heading />
                  <About/>
                  <Socials />
                  <Education />
                  <HomeProjects/>
              </PageWrapper>
          </main>
          <NavigationPane />
      </div>
  );
}
