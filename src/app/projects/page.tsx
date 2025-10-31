import NavigationPane from "@/components/navigation/NavigationPane";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Footer from "@/components/ui/Footer";

export default function ProjectsPage() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:gap-16 lg:px-16 ">
            <main className="flex-1 pt-30">
                <PageWrapper>
                    <SectionWrapper>
                        <h1 className="text-4xl font-bold mb-6">Projects</h1>
                        <p className="text-lg leading-relaxed">Will update this page soon.</p>
                    </SectionWrapper>
                    <Footer />
                </PageWrapper>
            </main>
            <NavigationPane />
        </div>
    );
}



