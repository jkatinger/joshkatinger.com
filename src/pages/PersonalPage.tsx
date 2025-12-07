import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Headphones, Plane, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import aviationCollage from "@/assets/josh-aviation-collage.jpg";

const PersonalPage = () => {
  const audiobooks = [
    {
      title: "To Fly And Fight: Memoirs of a Triple Ace",
      author: "C.E. 'Bud' Anderson",
      description:
        "Narrated the memoirs of legendary WWII Triple Ace Clarence 'Bud' Anderson, who flew P-51 Mustangs with the 357th Fighter Group and achieved 16.25 aerial victories.",
      link: "https://www.amazon.com/Fly-Fight-Memoirs-Triple-Ace/dp/B0CBNNWK8F/",
      tags: ["WWII Aviation", "P-51 Mustang", "357th Fighter Group"],
      type: "audiobook",
    },
    {
      title: "Life in the Fast Lane: The Amazing Story of a Skyraider",
      author: "Tom Dwelle",
      description:
        "Narrated the incredible story of the Douglas A-1 Skyraider, a legendary attack aircraft that served in Korea, Vietnam, and beyond.",
      link: "https://www.amazon.com/Life-Fast-Lane-Amazing-Skyraider/dp/B0DHLY3BLT/",
      tags: ["Military Aviation", "A-1 Skyraider", "Naval Aviation"],
      type: "audiobook",
    },
    {
      title: "Through My Sights: The Serendipitous Life of a Mustang Pilot",
      author: "Col. Joseph A. Peterburs",
      description:
        "Completely revised, edited, and graphically redesigned this autobiography for Joe Peterburs, a WWII fighter pilot and life-long Air Force veteran.",
      link: "https://joepeterburs.com/",
      tags: ["WWII Aviation", "P-51 Mustang", "Air Force"],
      type: "book",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Beyond the Day Job
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Personal Pursuits
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                When I'm not building products, I pursue my passion for aviation history 
                through audiobook narration, consulting work, and personal projects.
              </p>
            </div>
          </div>
        </section>

        {/* Aviation History Section */}
        <section className="pt-8 md:pt-12 pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Photo Banner */}
              <div className="mb-16 rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={aviationCollage} 
                  alt="Josh recording in the studio and flying in a T6 Texan WWII trainer" 
                  className="w-full h-48 md:h-64 lg:h-80 object-cover object-center"
                />
              </div>

              {/* Section Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    Aviation History & Narration
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Bringing aviation history to life through audiobook narration
                  </p>
                </div>
              </div>

              {/* Audiobooks Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {audiobooks.map((book) => (
                  <div
                    key={book.title}
                    className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated"
                  >
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                          {book.type === "audiobook" ? (
                            <Headphones className="w-6 h-6 text-primary" />
                          ) : (
                            <BookOpen className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                            {book.title}
                          </h3>
                          <p className="text-primary font-medium text-sm mt-1">
                            by {book.author}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {book.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      {book.link && (
                        <div className="pt-4">
                          <Button asChild variant="outline" className="gap-2">
                            <a
                              href={book.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {book.type === "audiobook" ? "Listen on Amazon" : "View Website"}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section className="pt-0 pb-6 md:pb-8 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Consulting
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                Independent Consulting
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                I occasionally take on consulting engagements, focusing on product strategy, 
                data infrastructure, and business automation for startups and growing companies.
              </p>
              <Button asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalPage;
