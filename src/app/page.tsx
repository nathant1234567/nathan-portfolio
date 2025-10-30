import ButtonLink from "@/components/ButtonLink";
import SimpleHome from "../components/SimpleHome";
import Socials from "../components/Socials";
import {BlackBackground} from "@/components/BlackBackground";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <div>
      <main>
          <PageWrapper>
        <SimpleHome />
        <Socials />
              <ButtonLink href={"/projects"}>View Projects</ButtonLink>
              </PageWrapper>
      </main>
    </div>
  );
}
