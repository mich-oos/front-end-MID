import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import ContactsSection from "./components/ContactsSection";
import FunfactSection from "./components/FunfactSection";

const RestAPI = () => {
  const [profile, setProfile] = useState([]);
  const [education, setEducation] = useState([]);
  const [contacts, setContacts] = useState({});
  const [funfact, setFunfact] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/profile").then((res) => setProfile(res.data));
    axios.get("http://localhost:3000/education").then((res) => setEducation(res.data));
    axios.get("http://localhost:3000/contacts").then((res) => setContacts(res.data));
    axios.get("http://localhost:3000/funfact").then((res) => setFunfact(res.data));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8">BIODATA</h1>

      <ProfileSection data={profile} />
      <EducationSection data={education} />
      <ContactsSection data={contacts} />
      <FunfactSection data={funfact} />
    </div>
  );
};

export default RestAPI;
