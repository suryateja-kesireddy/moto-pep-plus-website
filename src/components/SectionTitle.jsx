function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-12 md:mb-16">

      <h1 className="automotive-heading text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">

        {title}{" "}

        <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
          {highlight}
        </span>

      </h1>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;