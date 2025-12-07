import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProfessionalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalPage;
