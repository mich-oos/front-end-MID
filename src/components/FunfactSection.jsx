const FunfactSection = ({ data }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Fun Fact Tentang Saya</h2>
      <ul className="list-disc list-inside bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        {data.map((fact) => (
          <li key={fact.id}>{fact.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default FunfactSection;
