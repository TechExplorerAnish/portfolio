import { Github, Linkedin, Twitter } from 'lucide-react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 w-full">
      <Card className="w-[calc(100%)] mx-auto">
        <CardContent className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 p-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Anish Ghimire. All rights reserved.
            </p>
          </div>
          
          <TooltipProvider>
            <div className="flex space-x-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/TechExplorerAnish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub Profile</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/anish-ghimire-18bb85292/"
                    className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter Profile</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;