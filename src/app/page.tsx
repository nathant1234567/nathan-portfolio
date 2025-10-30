import SimpleHome from "../components/SimpleHome";
import Socials from "../components/Socials";
import {BlackBackground} from "@/components/BlackBackground";


export default function Home() {
  return (
    <div>
      <main>
          <BlackBackground>

        <SimpleHome />
        <Socials />
          </BlackBackground>
      </main>
    </div>
  );
}
