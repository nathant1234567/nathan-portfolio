import ButtonLink from "@/components/ButtonLink";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import Education from "@/components/Education";
import {BlackBackground} from "@/components/BlackBackground";
import PageWrapper from "@/components/PageWrapper";
import NavigationPane from "@/components/NavigationPane";


export default function Home() {
  return (
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:gap-16 lg:px-16">
          <main className="flex-1">
              <PageWrapper>
                  <Heading />
                  <Socials />
                  <Education />
                  {/*<div className="fade mt-8">*/}
                  {/*    <ButtonLink href={"/projects"}>View Projects</ButtonLink>*/}
                  {/*</div>*/}
              </PageWrapper>
          </main>
          <NavigationPane />
      </div>
  );
}
