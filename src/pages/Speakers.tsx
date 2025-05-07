import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import SpeakerCard, { Speaker } from "@/components/home/SpeakerCard";

const Speakers = () => {
  const [filterYear, setFilterYear] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Pastor Brian Jones Amoateng",
      role: "Founder & Senior Pastor",
      organization: "Mercylife Church",
      image: "/images/speakers/Ps-Brian-Amoateng.jpeg",
      bio: "Pastor Brian Amoateng is the founder of Brian Jones Ministries,UK.,Pastor, Human Resource Consultant, Author, Philanthropist, Life Coach and known to many as The Revivalist",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Appostle Joshua Selman",
      role: "Founder & Senior Pastor",
      organization: "Eternity Network International",
      image: "images/speakers/joshua-selman.jpeg",
      bio: "Apostle Joshua Selman Nimmak, born June 25, 1980, is a Nigerian clergyman, chemical engineer, and musician. He is the founder and senior pastor of Eternity Network International (ENI), also known as Koinonia Global, and is a prominent figure in Nigerian gospel ministry.",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Frank Ofosu Appiah",
      role: "Senior Pastor",
      organization: "All Nations Church",
      image: "images/speakers/dr-frank-ofosu.png",
      bio: "Dr. Frank Ofosu-Appiah is an internationally recognized life coach and leadership architect. He is a respected speaker and author on issues related to leadership development and living a life of excellence. He has personally mentored, coached and acted as a consultant for a wide array of leaders in churches, businesses and government.",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Dr. Paul Enenche",
      role: "Senior Pastor",
      organization: "Dunamis International Gospel Centre",
      image: "images/speakers/paul-enenche.jpg",
      bio: "Paul Eneche founded the Dunamis International Gospel Center in 1996, and he still acts as its head pastor. Pastor Paul Eneche was a physician before being called to form a church. His wife, the medical expert Dr. Becky Eneche, and they had four children together as part of the church's mission.",
      social: {
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Dr. Michael Boadi Nyamekye",
      role: "Lead Pastor",
      organization: "Maker's House Chapel",
      image: "/images/speakers/dr-mike-boadi.jpg",
      bio: "Dr. Michael Boadi Nyamekye is a college professor and lead pastor at Maker's House Chapel (TMH). He holds a Ph.D. in Marketing from the University of Ghana Business School. He is also a preacher, business consultant, and the founder of BN Michael Ministries. He has a passion for marketing and its application in various sectors",
      social: {
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 6,
      name: "Prophet Gideon Danso Nyamekye",
      role: "Founder",
      organization: "Empowerment Worship Centre",
      image: "/images/speakers/prophet-gideon-danso.jpeg",
      bio: "Gideon Danso is a Prophet, Pastor, Bible Teacher, an internationally acclaimed conference speaker, Ministerial and Business Visionary, and Mentor. He is the founder and Global Lead Pastor of Empowerment Worship Centre, Accra-Ghana.",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      id: 7,
      name: "Abena Brigidi",
      role: "CEO",
      organization: "Nimed Capital Limited",
      image: "/images/speakers/abena-brigidi.png",
      bio: "Brigidi (Mrs.) is a Ghanaian investment analyst author and speaker. She is a certified financial analyst and a thoroughly bred banker with over a decade in the financial Industry. She is the founding Partner and the Chief Executive Officer of Nimed Capital Limited, a leading investment banking firm in Accra, Ghana.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 8,
      name: "Dr. Kwadwo Boateng Bempah",
      role: "Founder & President",
      organization: "Holy Hill Chapel",
      image: "images/speakers/dr-kwadwo-bempah.jpg",
      bio: "Dr. Kwadwo Boateng Bempah is a Ghanaian multi-gifted international preacher and teacher, a conference speaker and book author; A man associated with supernatural dimension of signs and wonders. He is the Senior Pastor of Holy Hill Chapel Assemblies of God",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 9,
      name: "Daniel Amoateng",
      role: "Prophet & Founder",
      organization: "Daniel Amoateng Ministries",
      image: "images/speakers/daniel-amoateng.jpg",
      bio: "Daniel Amoateng is one of the most dynamic prophetic voices to this generation, firebrand and prolific prophetic preacher with an accurate and cutting edge prophetic mantle. He operates in a sharp word of knowledge, cutting across race and gender coupled with a rare healing and deliverance ministry.",
      social: {
        twitter: "#",
        website: "#"
      }
    }
  ];
  
  const years = ["2025", "2024", "2023", "2022", "2021"];
  const categories = ["Leadership", "Entrepreneurship", "Faith", "Technology", "Arts", "Education"];
  
  const filteredSpeakers = speakers;

  return (
    <Layout>
      <PageHeader
        title="Our Speakers"
        subtitle="Meet the visionaries, leaders, and change-makers who share their wisdom at IYES"
      />
      
      {/* Filters */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3">
              <div>
                <label htmlFor="yearFilter" className="block text-white/80 text-sm mb-1">
                  Filter by Year
                </label>
                <select
                  id="yearFilter"
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="bg-background border border-border rounded px-3 py-2 text-white"
                >
                  <option value="all">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="categoryFilter" className="block text-white/80 text-sm mb-1">
                  Filter by Category
                </label>
                <select
                  id="categoryFilter"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-background border border-border rounded px-3 py-2 text-white"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto">
                Submit to Speak
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Speakers Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
          
          {filteredSpeakers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-white mb-2">No speakers found</h3>
              <p className="text-white/70">Try changing your filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Past Keynotes */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Notable Past Keynote Speakers
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              IYES has hosted some of the world's most influential leaders over the years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Mensa Otabil",
                role: "Renowned Pastor",
                year: "2020",
                image: "/images/speakers/Mensa_Otabil.jpg"
              },
              {
                name: "Strive Masiyiwa",
                role: "Entrepreneur & Philanthropist",
                year: "2018",
                image: "/images/speakers/strive_masiyiwa.png"
              },
              {
                name: "Bishop T.D. Jakes",
                role: "Global Faith Leader",
                year: "2016",
                image: "images/speakers/TD_Jakes.jpg"
              },
              {
                name: "Sarkodie",
                role: "Musician & Philanthropist",
                year: "2015",
                image: "/images/speakers/sark-iyes.jpg"
              }
            ].map((speaker, idx) => (
              <div key={idx} className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 border-4 border-primary/30">
                  <img 
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-anton text-white text-xl">{speaker.name}</h3>
                <p className="text-white/70">{speaker.role}</p>
                <p className="text-accent text-sm">IYES {speaker.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-anton gradient-text mb-6">
            Interested in Speaking at IYES?
          </h2>
          <p className="text-white/80 mb-8">
            We're always looking for passionate, experienced speakers who can inspire and empower the next generation of leaders. If you have expertise to share, we'd love to hear from you.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Submit Your Proposal
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
