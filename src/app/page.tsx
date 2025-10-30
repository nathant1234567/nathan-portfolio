import ButtonLink from "@/components/ButtonLink";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import Education from "@/components/Education";
import {BlackBackground} from "@/components/BlackBackground";
import PageWrapper from "@/components/PageWrapper";


export default function Home() {
  return (
    <div>
      <main>
          <PageWrapper>
        <Heading />
        <Socials />
        <Education />
              <ButtonLink href={"/projects"}>View Projects</ButtonLink>
              </PageWrapper>
      </main>
    </div>
  );
}
