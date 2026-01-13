import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 relative mt-12 pt-4">
      <div className="flex justify-center">
        <p className="text-sm text-muted-foreground opacity-50">
          {" "}
          &copy; {new Date().getFullYear()} Lawrence Lu. All rights reserved.
        </p>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-6 bottom-3"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};