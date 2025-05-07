export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  message: string;
  image: string;
  year: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-secondary/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-anton text-white text-lg">{testimonial.name}</h4>
            {testimonial.role && (
              <p className="text-white/60 text-sm">{testimonial.role}</p>
            )}
          </div>
        </div>
        <span className="text-white/60 text-sm">IYES {testimonial.year}</span>
      </div>
      
      <blockquote className="text-white/80">
        <p className="text-sm md:text-base">"{testimonial.message}"</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
