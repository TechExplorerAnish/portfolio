import  { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, User, Code, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Home },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sheetCloseRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = () => {
    // Programmatically close the sheet
    if (sheetCloseRef.current) {
      sheetCloseRef.current.click();
    }
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 120 
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom) => ({
      opacity: 1, 
      x: 0,
      transition: { 
        delay: custom * 0.1,
        type: "spring",
        stiffness: 120 
      }
    }),
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 120 }
    },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial="hidden"
      animate="visible"
    >
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center space-x-2"
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            className="h-8 w-auto rounded-full"
            src="/react.svg"
            alt="Portfolio logo"
            initial={{ rotate: 0 }}
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          />
          <span className="font-bold text-xl hidden sm:inline-block">
            Portfolio
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex md:gap-x-6"
          initial="hidden"
          animate="visible"
        >
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
                variants={navItemVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div whileHover={{ rotate: 15 }}>
                  <Icon className="h-4 w-4" />
                </motion.div>
                <span>{item.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            
            <AnimatePresence>
              {isMenuOpen && (
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  
                  {/* Hidden close button to programmatically close sheet */}
                  <SheetClose ref={sheetCloseRef} />
                  
                  <motion.div 
                    className="flex flex-col space-y-4 mt-4"
                    variants={mobileNavVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
                          variants={mobileNavItemVariants}
                          whileHover="hover"
                          onClick={handleNavClick}
                        >
                          <motion.div whileHover={{ rotate: 15 }}>
                            <Icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.name}</span>
                        </motion.a>
                      );
                    })}
                  </motion.div>
                </SheetContent>
              )}
            </AnimatePresence>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;