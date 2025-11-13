const ContactsSection = ({ data }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Kontak</h2>
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Telepon:</strong> {data.phone}</p>
      </div>
    </section>
  );
};

export default ContactsSection;
