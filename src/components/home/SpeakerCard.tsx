
import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface Speaker {
  id: number;
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string;
  featured?: boolean;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

interface SpeakerCardProps {
  speaker: Speaker;
  featured?: boolean;
}

const SpeakerCard = ({ speaker, featured = false }: SpeakerCardProps) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div 
      className={`group relative rounded-xl overflow-hidden bg-secondary hover:shadow-xl transition-all duration-300 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-heading text-white">{speaker.name}</h3>
          <p className="text-white/80 text-sm mt-1">
            {speaker.role}, {speaker.organization}
          </p>
          
          <div className="flex space-x-2 mt-3">
            {speaker.social?.twitter && (
              <a 
                href={speaker.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            )}
            {speaker.social?.linkedin && (
              <a 
                href={speaker.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            )}
            {speaker.social?.website && (
              <a 
                href={speaker.social.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/70 hover:text-white p-0 h-auto hover:bg-transparent"
              onClick={() => setShowBio(!showBio)}
            >
              {showBio ? "Hide Bio" : "View Bio"}
            </Button>
          </div>
          
          {showBio && (
            <div className="mt-3 text-sm text-white/70 animate-fade-in">
              <p>{speaker.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
