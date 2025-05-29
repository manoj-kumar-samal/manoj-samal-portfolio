import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import resume from "../../public/Manoj_Resume.pdf"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manojkumarsamal2001@gmail.com",
      href: "mailto:manojkumarsamal2001@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6372738165",
      href: "tel:6372738165"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Telangana, Hyderabad",
      href: "#"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="bg-slate-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and interesting projects.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-gray-700/50">
                  <info.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <a
                    href={info.href}
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-2">Ready to start a project?</h4>
            <p className="text-gray-300 text-sm mb-4">
              I'm available for freelance work and exciting collaborations.
            </p>
            <a
              href={resume}
              target="_blank"
              // download="Manoj_Resume.pdf"
              className=" text-white px-4 py-2 rounded border border-blue-500 hover:bg-blue-500 text-sm transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};