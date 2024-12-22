/** @format */

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, GraduationCap, Brain, Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const highlightColors = {
  "MERN Developer": {
    primary: "bg-blue-500",
    secondary: "bg-blue-100",
    text: "text-blue-700",
  },
  "AI Enthusiast": {
    primary: "bg-purple-500",
    secondary: "bg-purple-100",
    text: "text-purple-700",
  },
  "Computer Engineering": {
    primary: "bg-green-500",
    secondary: "bg-green-100",
    text: "text-green-700",
  },
};

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-5 w-5 text-blue-600" />,
      title: "MERN Developer",
      description: "Specialized in building full-stack web applications",
    },
    {
      icon: <Brain className="h-5 w-5 text-purple-600" />,
      title: "AI Enthusiast",
      description: "Exploring the fascinating world of Machine Learning",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-green-600" />,
      title: "Computer Engineering",
      description: "Student pursuing technical excellence",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 animate-pulse">
            Get to Know Me
          </Badge>
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Coffee className="h-4 w-4" />
            <span>Fueled by coffee and passion for technology</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-2xl" />
              <Card className="relative h-full overflow-hidden bg-inherit rounded-3xl border-2 border-border/50 group">
                <img
                  src="/anish.png"
                  alt="Profile"
                  className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Floating Badges */}
                <div className="absolute bottom-2 left-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium border border-border/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                    <span>Learning & Growing</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Text */}
            <div className="space-y-4  text-md sm:text-lg">
              <p className="leading-relaxed">
                I&apos;m a Computer Engineering student who started my journey
                in 2023. As a MERN (MongoDB, Express.js, React, Node.js)
                developer, I&apos;m passionate about building full-stack web
                applications and exploring new technologies.
              </p>
              <p className="leading-relaxed">
                Currently, I&apos;m expanding my skills by delving into the
                world of Machine Learning. I&apos;m fascinated by the potential
                of AI and how it can be integrated into web applications to
                create more intelligent and responsive user experiences.
              </p>
              <p className="leading-relaxed">
                My goal is to become a versatile developer who can bridge the
                gap between web development and machine learning, creating
                innovative solutions that push the boundaries of what&apos;s
                possible in tech.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => {
                const color = highlightColors[item.title];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className={`p-4 border border-border/50 group hover:shadow-lg transition-all duration-300 
                        hover:border-${color.primary.replace("bg-", "")}/50 
                        transform hover:-translate-y-2`}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className={`p-2 ${color.secondary} rounded-lg`}>
                          {React.cloneElement(item.icon, {
                            className: `${item.icon.props.className} group-hover:rotate-12 transition-transform`,
                          })}
                        </div>
                        <h3 className={`font-medium ${color.text}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
