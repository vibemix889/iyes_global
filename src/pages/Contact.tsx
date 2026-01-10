
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to us with your questions, suggestions, or collaborations"
      />
      
      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about upcoming events, want to volunteer, or are interested in partnerships, we'd love to hear from you.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">contact@iyessummit.org</p>
                    <p className="text-muted-foreground">info@iyessummit.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+233 20 123 4567</p>
                    <p className="text-muted-foreground">+233 30 987 6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">IYES Headquarters</p>
                    <p className="text-muted-foreground">123 Independence Avenue</p>
                    <p className="text-muted-foreground">Accra, Ghana</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-heading text-foreground mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-secondary/30 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-heading text-foreground mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about IYES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "When is the next IYES event?",
                answer: "The next IYES event is scheduled for August 15-17, 2025. Registration is already open on our website."
              },
              {
                question: "How can I register for IYES?",
                answer: "You can register by clicking the 'Register Now' button on our homepage or by visiting the registration page directly."
              },
              {
                question: "Are there scholarships available for IYES?",
                answer: "Yes, we offer a limited number of scholarships for deserving young people. Applications typically open 4-6 months before the event."
              },
              {
                question: "How can I become a volunteer?",
                answer: "We're always looking for passionate volunteers. Please fill out the volunteer application form on our website or contact our team directly."
              },
              {
                question: "Can I propose a speaker for IYES?",
                answer: "Absolutely! We welcome speaker recommendations. Please send your suggestions through our contact form with details about the potential speaker."
              },
              {
                question: "Is there an age limit for participants?",
                answer: "While IYES primarily targets young people ages 18-35, we welcome participants of all ages who are passionate about youth empowerment."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-card/70 border border-border/60 p-6 rounded-xl">
                <h3 className="text-lg font-heading text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
              Find Us
            </h2>
          </div>
          
          <div className="h-80 md:h-96 w-full bg-secondary/50 rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-muted-foreground/80">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
