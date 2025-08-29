import React, { useState } from "react";
import apple from "../assets/apple.png";

interface StaffMember {
  name: string;
  role?: string;
  pronouns: string;
  location: string;
  bio: string;
  img: string;
  favoriteApple: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Spike",
    pronouns: "he/him",
    location: "Berkeley, CA",
    bio: "I'm Spike!",
    img: apple,
    favoriteApple: "honeycrisp",
  },
  {
    name: "Skylar",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "Red delicious",
  },
  {
    name: "Julie",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Daphne",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Jiayi",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Olver",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Ramesh",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Sophia",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Taha",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hi everyone! I'm a senior studying APMA-CS. In my free time you can find me playing piano & guitar, reading, and solving the NYT Spelling Bee.",
    img: apple,
    favoriteApple: "red delicious",
  },
];

export default function Staff() {
  const [featured, setFeatured] = useState<StaffMember>(staffMembers[0]);

  return (
    <div className="staff-body">
      <div className="staff-feature">
        <img src={featured.img} alt={featured.name} />
        <h1>{featured.name}</h1>
        {featured.role && <h3>{featured.role}</h3>}
        <h4>
          {featured.pronouns} | {featured.location}
        </h4>
        <p>{featured.bio}</p>
        <p>
          <b>Favorite apple: </b>
          {featured.favoriteApple}
        </p>
      </div>

      <div className="staff-all">
        <div className="staff-cards">
          {staffMembers.map((member, idx) => (
            <div
              key={idx}
              className="staff-card"
              onClick={() => setFeatured(member)}
            >
              <img src={member.img} alt={member.name} />
              <h1>{member.name}</h1>
              {member.role && <h3>{member.role}</h3>}
              <h4>
                {member.pronouns} | {member.location}
              </h4>
              <p>{member.bio}</p>
              <p>
                <b>Favorite apple:</b>
                {featured.favoriteApple}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
