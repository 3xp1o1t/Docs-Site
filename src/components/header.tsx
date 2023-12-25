import { CommandMenu } from "@/components/command-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import { TablePropertiesIcon } from "lucide-react";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="hidden space-x-6 md:flex">
            <a href="/" className="flex items-center space-x-2">
              <TablePropertiesIcon className="h-6 w-6" />
              <span className="hidden cursor-pointer bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-bold text-transparent md:inline-block">
                Tablilla
              </span>
            </a>
            <nav className="flex items-center gap-4 text-sm">
              <a
                href="/"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Docs
              </a>
              <a
                href="/"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Github
              </a>
              <a
                href="/"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Example
              </a>
              <a
                href="/"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                About
              </a>
            </nav>
          </div>
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: 0,
                }}
              >
                <CommandMenu
                  commandItems={[
                    { id: "1", name: "Docs" },
                    { id: "2", name: "About" },
                  ]}
                  shortcutKey={"s"}
                />
              </motion.div>
            </div>
            <nav className="flex items-center">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
export default Header;
