import NavigationPane from "@/components/NavigationPane";
import PageWrapper from "@/components/PageWrapper";
import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import Education from "@/components/Education";
import ButtonLink from "@/components/ButtonLink";
import SectionWrapper from "@/components/SectionWrapper";

export default function ProjectsPage() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:gap-16 lg:px-16">
            <main className="flex-1">
                <PageWrapper>
                    <SectionWrapper>
                        <h1 className="text-4xl font-bold mb-6">Projects</h1>
                        <p className="text-lg leading-relaxed">Will update this page soon.</p>
                    </SectionWrapper>
                </PageWrapper>
            </main>
            <NavigationPane />
        </div>
    );
}



