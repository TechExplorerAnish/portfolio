import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Code2, Eye, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ProjectLoader = () => (
  <div className="flex justify-center items-center h-full">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ 
        repeat: Infinity, 
        duration: 1, 
        ease: "linear" 
      }}
    >
      <Loader2 className="h-8 w-8 text-primary animate-pulse" />
    </motion.div>
  </div>
);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/TechExplorerAnish/repos", {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (!res.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data = await res.json();
        
        // Sort repos by stars and most recent
        const sortedRepos = data
          .filter(repo => !repo.fork) // Exclude forked repositories
          .sort((a, b) => b.stargazers_count - a.stargazers_count || 
                 new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);

        setRepos(sortedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <ProjectLoader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-red-500 text-lg font-semibold"
          >
            Error: {error}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 animate-pulse">
            My Work
          </Badge>
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Explore my latest projects and contributions to the open-source
            community. These repositories showcase my skills and coding journey.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3
              }}
            >
              <Card
                className="group hover:shadow-xl transition-all duration-300 
                border border-border/50 hover:border-primary/50 
                transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit">
                      <Code2 className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs group-hover:bg-primary/10 transition-colors"
                    >
                      {repo.language || "Various"}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                    {repo.name.replace(/-/g, ' ')}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 h-12">
                    {repo.description || "No description available."}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center hover:text-yellow-500 transition-colors">
                      <Star className="h-4 w-4 mr-1" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center hover:text-green-500 transition-colors">
                      <GitFork className="h-4 w-4 mr-1" />
                      {repo.forks_count}
                    </div>
                    <div className="flex items-center hover:text-blue-500 transition-colors">
                      <Eye className="h-4 w-4 mr-1" />
                      {repo.watchers_count}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  <Button 
                    asChild 
                    variant="default" 
                    className="w-full group/source"
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/source:rotate-[360deg] transition-transform" />
                      View Source
                    </a>
                  </Button>
                  {repo.homepage && (
                    <Button 
                      asChild 
                      variant="outline" 
                      size="icon"
                      className="group/live"
                    >
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live preview"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/live:scale-110 transition-transform" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="group"
          >
            <a
              href="https://github.com/TechExplorerAnish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4 group-hover:rotate-[360deg] transition-transform" />
              View More Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;