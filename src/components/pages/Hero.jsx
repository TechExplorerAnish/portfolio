import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowDown,
  Mail,
  Download
} from 'lucide-react';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative flex flex-col justify-center items-center px-6 py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="inline-block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-75" />
                <div className="relative bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2">
                  <p className="text-sm font-medium">👋 Welcome to my portfolio</p>
                </div>
              </motion.div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Anish Ghimire
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
            >
              Computer Engineering Student | MERN Developer | Tech Explorer
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: -15 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 animate-pulse" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-full border-2 border-border overflow-hidden aspect-square shadow-lg"
            >
              <img
                src="/pp.png"
                alt="Anish Ghimire"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button variant="ghost" size="icon" className="rounded-full group">
          <ArrowDown className="h-4 w-4 group-hover:animate-bounce" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;