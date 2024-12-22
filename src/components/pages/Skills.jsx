/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BrainCircuit,
  Database,
  Globe,
  Layers,
  Cpu,
  Code2,
  GitBranch,
} from "lucide-react";

// Color configurations for skills
const skillColors = {
  Frontend: {
    primary: "bg-blue-500",
    secondary: "bg-blue-100",
    text: "text-blue-700",
  },
  Backend: {
    primary: "bg-green-500",
    secondary: "bg-green-100",
    text: "text-green-700",
  },
  "Tools & Others": {
    primary: "bg-purple-500",
    secondary: "bg-purple-100",
    text: "text-purple-700",
  },
};

const skillCategories = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5 text-blue-500" />,
    skills: [
      {
        name: "React",
        level: 85,
        icon: <Code2 className="h-4 w-4 text-blue-600" />,
      },
      {
        name: "JavaScript",
        level: 90,
        icon: <Code2 className="h-4 w-4 text-yellow-500" />,
      },
      {
        name: "HTML/CSS",
        level: 85,
        icon: <Layers className="h-4 w-4 text-orange-500" />,
      },
    ],
  },
  {
    category: "Backend",
    icon: <Database className="h-5 w-5 text-green-500" />,
    skills: [
      {
        name: "Node.js",
        level: 80,
        icon: <Code2 className="h-4 w-4 text-green-600" />,
      },
      {
        name: "Express.js",
        level: 75,
        icon: <Code2 className="h-4 w-4 text-gray-600" />,
      },
      {
        name: "MongoDB",
        level: 80,
        icon: <Database className="h-4 w-4 text-green-700" />,
      },
    ],
  },
  {
    category: "Tools & Others",
    icon: <Cpu className="h-5 w-5 text-purple-500" />,
    skills: [
      {
        name: "Git",
        level: 70,
        icon: <GitBranch className="h-4 w-4 text-orange-600" />,
      },
      {
        name: "Machine Learning",
        level: 40,
        icon: <BrainCircuit className="h-4 w-4 text-purple-600" />,
      },
    ],
  },
];

const SkillCard = ({ skill, categoryColor }) => {
  return (
    <div className="group relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {React.cloneElement(skill.icon, {
            className: `${skill.icon.props.className} transition-transform group-hover:scale-110`,
          })}
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className={`text-sm font-semibold ${categoryColor.text}`}>
          {skill.level}%
        </span>
      </div>
      <div
        className={`h-2 w-full ${categoryColor.secondary} rounded-full overflow-hidden`}
      >
        <div
          className={`h-full ${categoryColor.primary} transition-all duration-700 ease-out rounded-full group-hover:opacity-80`}
          style={{
            width: `${skill.level}%`,
            animation: "fillSkill 1.5s ease-out",
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-pulse">
            Technical Proficiency
          </Badge>
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Skills & Expertise
          </h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical skills and proficiency
            levels across different technologies and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const categoryColor = skillColors[category.category];
            return (
              <Card
                key={category.category}
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div
                      className={`p-2 ${categoryColor.secondary} rounded-lg`}
                    >
                      {React.cloneElement(category.icon, {
                        className: `${category.icon.props.className} transition-transform group-hover:rotate-6`,
                      })}
                    </div>
                    <h3
                      className={`text-xl font-semibold ${categoryColor.text}`}
                    >
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        categoryColor={categoryColor}
                      />
                    ))}
                  </div>
                </CardContent>

                {/* Decorative Elements */}
                <div
                  className={`absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 ${categoryColor.secondary} rounded-full blur-3xl`}
                />
                <div
                  className={`absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 ${categoryColor.secondary} rounded-full blur-3xl`}
                />
              </Card>
            );
          })}
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fillSkill {
          from {
            width: 0%;
          }
          to {
            width: var(--skill-level);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
