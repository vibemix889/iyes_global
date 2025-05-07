import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    {
      year: "2010",
      title: "The Beginning",
      description: "IYES was founded with the first conference hosting 500 youth from across Ghana."
    },
    {
      year: "2013",
      title: "Regional Growth",
      description: "Expanded to include participants from West Africa with over 2,000 attendees."
    },
    {
      year: "2015",
      title: "5th Anniversary",
      description: "Celebrated 5 years with renowned international speakers and 5,000 participants."
    },
    {
      year: "2018",
      title: "Going International",
      description: "First satellite events in Europe and North America connecting the diaspora."
    },
    {
      year: "2020",
      title: "Virtual Summit",
      description: "Adapted to the global pandemic with a virtual summit reaching 30,000 youth worldwide."
    },
    {
      year: "2023",
      title: "Global Partnership",
      description: "Partnered with UN Youth programs and major corporations to expand opportunities."
    },
    {
      year: "2025",
      title: "15th Anniversary",
      description: "Celebrating 15 years of impact with our biggest summit yet and new initiatives."
    }
  ];

  const coreValues = [
    { 
      title: "Leadership", 
      description: "Developing visionary leaders who can guide their communities with integrity and purpose." 
    },
    { 
      title: "Excellence", 
      description: "Pursuing the highest standards in everything we do, rejecting mediocrity in all forms." 
    },
    { 
      title: "Innovation", 
      description: "Encouraging creative thinking and new approaches to solving contemporary challenges." 
    },
    { 
      title: "Service", 
      description: "Promoting a heart for serving others and making positive contributions to society." 
    },
    { 
      title: "Faith", 
      description: "Grounding our work in spiritual values that provide meaning and direction." 
    },
    { 
      title: "Community", 
      description: "Building strong networks of support and collaboration among young people." 
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="About IYES" 
        subtitle="Our mission, history, and the vision that drives us forward"
        background="gradient"
      />

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-anton gradient-text mb-6">Our Vision</h2>
              <p className="text-white/80 mb-8">
                To raise a generation of empowered youth who are equipped with the knowledge, skills, and spiritual foundation to transform their communities, nations, and the world at large.
              </p>
              
              <h2 className="text-3xl font-anton gradient-text mb-6">Our Mission</h2>
              <p className="text-white/80">
                To provide platforms, resources, and mentorship that inspire, equip, and connect young people for leadership and impact in every sphere of society.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
              <div className="bg-secondary/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-anton text-white mb-6">Why IYES Matters</h3>
                <ul className="space-y-4">
                  {[
                    "Creates a platform for youth to discover their purpose and potential",
                    "Connects young leaders with mentors and opportunities",
                    "Provides practical skills and knowledge for personal and professional growth",
                    "Builds a community of like-minded individuals committed to positive change",
                    "Inspires faith-based leadership that transforms society"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">Our Core Values</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              These principles guide everything we do at IYES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-background/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
                <h3 className="text-xl font-anton text-white mb-2">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary's Profile */}
      <section id="visionary" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-accent opacity-30 blur-lg"></div>
                <img
                  src="images/pastor-brian-bw.jpg"
                  alt="Pastor Brian Jones Amoateng"
                  className="relative rounded-xl w-full shadow-lg"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-6">
                Pastor Brian Jones Amoateng
              </h2>
              <h3 className="text-xl text-white/90 mb-6">Founder & Visionary</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  Pastor Brian Jones Amoateng is a dynamic preacher, visionary leader, and philanthropist with a passion for youth empowerment and development. Born and raised in Ghana, he founded the International Youth Empowerment Summit (IYES) in 2010 with a vision to inspire young people to discover and fulfill their God-given potential.
                </p>
                <p>
                  Beyond his role as the visionary behind IYES, Pastor Brian leads a vibrant ministry that touches lives across the globe. His messages of hope, purpose, and excellence have inspired thousands to pursue their dreams with faith and determination.
                </p>
                <p>
                  As a sought-after speaker, Pastor Brian has addressed audiences in over 20 countries, sharing platforms with world leaders, business executives, and renowned ministers. His unique ability to connect biblical principles with practical life applications has made him a trusted voice for this generation.
                </p>
                <p>
                  Through his charity foundation, he has implemented numerous community development projects, including scholarships for underprivileged students, healthcare initiatives, and entrepreneurship programs for young people.
                </p>
                <p>
                  Pastor Brian holds degrees in Theology and Business Administration and is the author of several books on leadership, purpose, and spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-4">
              Our Journey Through the Years
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              From humble beginnings to a global movement
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 bg-primary z-10"></div>
                  <div className="md:w-1/2 bg-secondary/50 p-6 rounded-xl border border-white/10 relative">
                    <span className="inline-block text-2xl font-anton text-accent mb-2">{milestone.year}</span>
                    <h3 className="text-xl font-anton text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-anton gradient-text mb-6">
            Join Us in Empowering the Next Generation
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether you're looking to attend IYES, become a partner, or support our vision, we invite you to be part of this transformative movement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Get Involved
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline">
                See Past Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
