export default function SocialRail() {
  const socials = [
    { label: "EMAIL.", href: "mailto:lawrencebdlu@gmail.com" },
    { label: "GITHUB.", href: "https://github.com/LawrenceBLu" },
    { label: "LINKEDIN.", href: "https://www.linkedin.com/in/lawrenceblu/" },
  ];

  return (
    <div className="fixed left-6 bottom-0 z-50 hidden md:flex flex-col items-center">
      {/* Text */}
      <div className="flex flex-col gap-6 mb-6 opacity-0 animate-fade-in-delay-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="
              text-xs tracking-widest text-foreground/70
              hover:text-primary transition-colors duration-300
              [writing-mode:sideways-lr]
            "
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Vertical line */}
      <div className="h-24 w-0.5 bg-foreground/25 opacity-0 animate-fade-in-delay-4" />
    </div>
  );
}
