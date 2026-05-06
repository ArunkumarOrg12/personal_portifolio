export function Experience() {
  const roles = [
    { year: "2023 - Present", title: "Creative Director", company: "Marking®" },
    { year: "2020 - 2023", title: "Senior Designer", company: "Studio Alpha" },
    { year: "2018 - 2020", title: "UI/UX Designer", company: "Digital Core" },
    { year: "2016 - 2018", title: "Design Intern", company: "Creative Minds" },
  ];

  return (
    <section className="py-32 px-4 md:px-6 w-full max-w-[1280px] mx-auto relative z-10">
      <h2 className="text-display-lg text-text-primary mb-16 border-b border-border-subtle pb-8 tracking-tighter">
        Experience
      </h2>
      <div className="flex flex-col">
        {roles.map((role, i) => (
          <div 
            key={i} 
            className="flex flex-col md:flex-row py-8 border-b border-border-subtle group hover:bg-bg-secondary transition-colors duration-300 -mx-4 px-4 md:-mx-6 md:px-6 cursor-default"
          >
            <div className="w-full md:w-1/4 text-caption text-text-muted mb-2 md:mb-0 pt-2 font-mono">
              (0{i + 1}) — {role.year}
            </div>
            <div className="w-full md:w-3/4 flex justify-between items-center">
              <div className="text-heading-md text-text-primary group-hover:translate-x-2 transition-transform duration-300">
                {role.title}
              </div>
              <div className="text-body-sm text-text-muted">
                {role.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
