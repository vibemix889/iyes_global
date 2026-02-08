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
      name: "Nicholas Duncan-Williams",
      role: "Founder & Senior Pastor",
      organization: "Action Chapel International",
      image: "images/speakers/2026/duncan-williams.webp",
      bio: "Nicholas Duncan-Williams is a Ghanaian charismatic pastor and Presiding Archbishop and General Overseer of the Action Chapel International (ACI) ministry, headquartered in Accra,. He is a prominent figure in Ghanaian gospel ministry and has been in the ministry for over 30 years.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Pastor Jerry Uchechukwu Eze",
      role: "Founder & Senior Pastor",
      organization: "Streams of Joy International",
      image: "images/speakers/2026/pastor-jerry-eze.webp",
      bio: "Pastor Jerry Uchechukwu Eze is a renowned Nigerian Pentecostal pastor, author, and founder of Streams of Joy International. He is best known as the convener of the New Season Prophetic Prayers and Declarations (NSPPD), a popular global daily online prayer platform with the slogan 'What God cannot do, does not exist'",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Richard Nii Armah Quaye",
      role: "Entrepreneur & Philanthropist",
      organization: "RNAQ Holdings",
      image: "images/speakers/2026/rnaq-2.webp",
      bio: "Richard Nii Armah Quaye is a prominent Ghanaian entrepreneur and angel investor. He is the President of RNAQ Holdings, the parent company for several of his business interests, including Bills Micro Credit and Quick Angels Limited.",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Stanley Uzochukwu",
      role: "Senior Pastor",
      organization: "Delborough Lagos",
      image: "images/speakers/2026/stanley-uzochukwu.webp",
      bio: "Stanley Uzochukwu is a Nigerian business magnet, investor and philanthropist. He was born into the family of Mr/Mrs Bartholomew Uzochukwu at Calabar, Cross River State. He is a native of Nnewi South Local Government Area of Anambra State.",
      social: {
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Wode Maya",
      role: "YouTuber",
      organization: "Wode Maya YouTube Channel",
      image: "/images/speakers/2026/wode-maya.jpg",
      bio: "Berthold Kobby Winkler Ackon (born March 3, 1994), popularly known as Wode Maya, is a Ghanaian YouTube personality, vlogger, digital media influencer, and aeronautical engineer. His name Wode Maya (Wǒ de Mà yà) translates as 'Oh my God' in the Chinese language.",
      social: {
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 7,
      name: "Dr Frank Ofosu Appiah",
      role: "Life Coach & Leadership Architect",
      organization: "All Nations Church",
      image: "/images/speakers/2026/dr-frank-ofosu.webp",
      bio: "Dr. Frank Ofosu-Appiah is an internationally recognized life coach and leadership architect. He is a respected speaker and author on issues related to leadership development and living a life of excellence. He has personally mentored, coached and acted as a consultant for a wide array of leaders in churches, businesses and government.",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      id: 8,
      name: "Mrs Beatrice Jones-Mensah",
      role: "CEO",
      organization: "Cybele Energy limited",
      image: "/images/speakers/2026/mrs-jones.webp",
      bio: "Mrs. Beatrice Jones Mensah Tayui, the CEO Of Cybele Energy limited has advised young women to back whatever they do up with substance and make sure to stay knowledgeable.",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    // {
    //   id: 8,
    //   name: "Dr. Kwadwo Boateng Bempah",
    //   role: "Founder & President",
    //   organization: "Holy Hill Chapel",
    //   image: "images/speakers/dr-kwadwo-bempah.jpg",
    //   bio: "Dr. Kwadwo Boateng Bempah is a Ghanaian multi-gifted international preacher and teacher, a conference speaker and book author; A man associated with supernatural dimension of signs and wonders. He is the Senior Pastor of Holy Hill Chapel Assemblies of God",
    //   social: {
    //     linkedin: "#"
    //   }
    // },
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
              <h3 className="text-xl text-foreground mb-2">No speakers found</h3>
              <p className="text-muted-foreground">Try changing your filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Past Keynotes */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Notable Past Keynote Speakers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                name: "Dr. Paul Enenche",
                role: "Senior Pastor",
                year: "2025",
                image: "/images/speakers/paul-enenche.jpg"
              },
              {
                name: "Appostle Joshua Selman",
                role: "Global Faith Leader",
                year: "2025",
                image: "images/speakers/joshua-selman.jpeg"
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
                <h3 className="font-heading text-foreground text-xl">{speaker.name}</h3>
                <p className="text-muted-foreground">{speaker.role}</p>
                <p className="text-accent text-sm">IYES {speaker.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
