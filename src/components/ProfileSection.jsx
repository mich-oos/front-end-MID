const ProfileSection = ({ data }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Profil Saya</h2>
      {data.map((user) => (
        <div
          key={user.id}
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
        >
          <div className="flex justify-center mb-3">
            <img
              src={user.picture}
              alt={user.name}
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          <h3 className="text-lg font-semibold text-center">{user.name}</h3>
          <ul className="text-sm mt-3 space-y-1">
            <li><strong>Umur:</strong> {user.age}</li>
            <li><strong>Tempat, Tanggal Lahir:</strong> {user.birthplace}, {user.birthdate}</li>
            <li><strong>Alamat:</strong> {user.address}</li>
            <li><strong>Jenis Kelamin:</strong> {user.gender}</li>
            <li><strong>Agama:</strong> {user.agama}</li>
            <li><strong>Hobby:</strong> {user.hobby}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ProfileSection;
