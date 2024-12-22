import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "anishghimire178@gmail.com",
      link: "mailto:anishghimire178@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+977 9819326210",
      link: "tel:+9779812345678"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Dharan, Nepal"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const backgroundVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 0.1,
      transition: {
        duration: 1,
        type: "spring"
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        variants={backgroundVariants}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        variants={backgroundVariants}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <Badge variant="outline" className="mb-4">
            Get in Touch
          </Badge>
          <motion.h2 
            className="text-3xl font-bold mb-4 tracking-tight"
            variants={itemVariants}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            variants={itemVariants}
          >
            Have a question or want to work together? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info Cards */}
            <motion.div 
              className="lg:col-span-2 space-y-4"
              variants={itemVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="group hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="flex items-start space-x-4 group-hover:text-primary transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{info.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{info.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-3">Follow Me</h3>
                    <div className="flex gap-2">
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="hover:text-primary transition-colors"
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.label}
                            >
                              {social.icon}
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              variants={itemVariants}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.form 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Name
                        </label>
                        <Input placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email
                        </label>
                        <Input type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Subject
                      </label>
                      <Input placeholder="How can I help you?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <Textarea
                        placeholder="Write your message here..."
                        className="min-h-[150px] resize-none"
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;