const EducationSection = ({ data }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Pendidikan</h2>
      {data.map((edu) => (
        <div
          key={edu.id}
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-3"
        >
          {edu.picture && (
            <div className="flex justify-center mb-3">
              <img
                src={edu.picture}
                alt="Education"
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          )}

          <p><strong>Universitas:</strong> {edu.university}</p>
          <p><strong>Fakultas:</strong> {edu.faculty}</p>
          <p><strong>Jurusan:</strong> {edu.major}</p>
          <p><strong>NIM:</strong> {edu.NIM}</p>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
