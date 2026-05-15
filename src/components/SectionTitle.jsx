function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-16">

      <h1 className="text-4xl md:text-6xl font-bold uppercase">

        {title}{" "}

        <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          {highlight}
        </span>

      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;