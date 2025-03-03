import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageSquare, Plus } from "lucide-react";

const faqItems = [
  {
    question: "How can I find the right skincare products for my skin type?",
    answer: "You can start by taking our \"What's My Skin?\" quiz to determine your skin type. We also provide curated recommendations and detailed reviews to help you choose the best products for your unique needs."
  },
  {
    question: "Are the products reviewed on Bare Glow safe for sensitive skin?",
    answer: "Many of the products we review are specifically formulated for sensitive skin. In each review, we note whether a product is suitable for sensitive skin types and highlight any potential irritants or allergens."
  },
  {
    question: "Does Bare Glow only feature natural or clean beauty products?",
    answer: "We feature a wide range of products, including natural, clean, and conventional formulations. We believe in providing comprehensive information so you can make informed choices based on your personal preferences and skin needs."
  },
  {
    question: "How often should I change my skincare routine?",
    answer: "Your skin's needs can change with seasons, age, and other factors. We generally recommend reassessing your routine every 3-6 months, or whenever you notice significant changes in your skin's condition."
  },
  {
    question: "Can I trust the reviews on Bare Glow?",
    answer: "Absolutely! Our reviews are thoroughly researched and often tested by our team of skincare experts. We maintain editorial independence and always disclose any potential conflicts of interest."
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [activeAccordion, setActiveAccordion] = useState<string | null>("item-0");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleRecover = () => {
    toast.success("Recovery instructions sent to your email");
  };

  const handleHelpCenter = () => {
    toast.info("Redirecting to Help Center");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl font-light text-center mb-12">Contact Us</h1>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Help Center Card */}
            <div className="bg-rosegold-100 rounded-xl p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-medium mb-4">Need help?</h2>
              <p className="text-muted-foreground mb-6">Visit our Help Center for answers!</p>
              <Button 
                className="rounded-full bg-rosegold-500 hover:bg-rosegold-600 text-white"
                onClick={handleHelpCenter}
              >
                Go to Help Center
              </Button>
            </div>
            
            {/* Account Recovery Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-medium mb-4">Forgot your Username or Password?</h2>
              <p className="text-muted-foreground mb-6">We can help you recover your account.</p>
              <Button 
                className="rounded-full bg-rosegold-500 hover:bg-rosegold-600"
                onClick={handleRecover}
              >
                Recover Account
              </Button>
            </div>
          </div>
          
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light text-center mb-8">FAQ</h2>
            <h3 className="text-2xl font-medium text-center mb-6">Frequently Asked Questions</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find quick answers to common questions about our platform and skincare recommendations.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible defaultValue="item-0" 
                value={activeAccordion} 
                onValueChange={setActiveAccordion}
              >
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          
          {/* Contact Form */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-soft">
                <h2 className="text-2xl font-medium mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="rounded-full bg-rosegold-500 hover:bg-rosegold-600">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="bg-champagne-50 p-8 rounded-xl">
                <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-rosegold-100">
                      <Mail className="h-5 w-5 text-rosegold-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">support@bareglow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-rosegold-100">
                      <Phone className="h-5 w-5 text-rosegold-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-rosegold-100">
                      <MapPin className="h-5 w-5 text-rosegold-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Skincare Avenue<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-rosegold-100">
                      <MessageSquare className="h-5 w-5 text-rosegold-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Live Chat</h3>
                      <p className="text-muted-foreground">
                        Available Monday-Friday<br />
                        9am - 5pm PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
