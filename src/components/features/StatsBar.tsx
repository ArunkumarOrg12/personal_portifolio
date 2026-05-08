export function StatsBar() {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: " happy clients", value: "03" },
    { label: "Years Experience", value: "02" },
  ];

  return (
    <section className="w-full border-y border-border-subtle bg-bg-primary relative z-10">
      <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-border-subtle max-w-[1280px] mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-12 px-8 w-full md:w-1/3 hover:bg-bg-secondary transition-colors cursor-default">
            <span className="text-display-md text-text-primary">{stat.value}</span>
            <span className="text-caption text-text-muted mt-2 uppercase">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
