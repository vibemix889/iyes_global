
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/40"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/40"
            placeholder="johndoe@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white appearance-none"
        >
          <option value="" className="bg-secondary text-white">Select a subject</option>
          <option value="general" className="bg-secondary text-white">General Inquiry</option>
          <option value="registration" className="bg-secondary text-white">Registration</option>
          <option value="sponsorship" className="bg-secondary text-white">Sponsorship</option>
          <option value="speaking" className="bg-secondary text-white">Speaking Opportunity</option>
          <option value="other" className="bg-secondary text-white">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/40"
          placeholder="Your message here..."
        />
      </div>
      
      <div>
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
