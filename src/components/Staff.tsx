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
    pronouns: "they/them",
    location: "Madison, NJ / Orlando, FL (?)",
    bio: "Hi everyone!! I'm a senior studying Computational Biology with a healthy dose of Lit Arts. When I'm not thinking about ReasonML, you can catch me playing banjo, reading Moby Dick, quilting, or doomscrolling on Facebook Marketplace. Super excited to meet you all :)",
    img: apple,
    favoriteApple: "Obvious choice. Wickson",
  },
  {
    name: "Julie",
    role: "HTA | jwang702",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hello! I'm a junior studying computer science. I love drawing, crocheting, and going on long walks. I'm also a big coffee enthusiast and enjoy exploring cafes around campus. Looking forward to a good semester!",
    img: apple,
    favoriteApple: "red delicious",
  },
  {
    name: "Daphne",
    role: "UTA | dcao7",
    pronouns: "she/her",
    location: "Westchester, NY",
    bio: "Hi guys, I'm a junior studying English and APMA-CS! I'm really into writing, reading (let me know if you have any recs!), watching obscure video essays, and listening to LE SSERAFIM. Really looking forward to meeting everyone :)",
    img: apple,
    favoriteApple: "Belle d'Août",
  },
  {
    name: "Jiayi",
    role: "UTA | jwu343",
    pronouns: "she/they",
    location: "Ningbo, China",
    bio: "Hi! I’m a sophomore from Ningbo, China studying Math-CS and IAPA/Engineering (still deciding!). I enjoy caffeine, hyperpop, long walks through busy streets, and plank challenges. Excited to meet yall!:)",
    img: apple,
    favoriteApple: "Granny Smith",
  },
  {
    name: "Oliver",
    role: "UTA | okahn1",
    pronouns: "he/him",
    location: "Chevy Chase, MD",
    bio: "Hey y’all! I’m really excited to have the chance to be a TA for CS17 this year. I’m originally from Chevy Chase, MD and I’ve spent a good amount of time in Vermont and North Carolina. Outside of being a TA, I’m on the Brownian Motion Ultimate Frisbee team and love riding my bike around campus. I can’t wait to meet everyone!",
    img: apple,
    favoriteApple: "Reinette Clochard of the de Parthenay variety, of course",
  },
  {
    name: "Ramesh",
    role: "UTA | rpererao",
    pronouns: "he/him",
    location: "Miami, FL",
    bio: "",
    img: apple,
    favoriteApple: "Honeycrisp",
  },
  {
    name: "Sophia",
    role: "UTA | swang484",
    pronouns: "she/her",
    location: "New York, NY",
    bio: "Hi! I'm a sophomore from NYC studying APMA-CS. I love cats, skiing, taiko, and grinding Beli. Looking forward to meeting you!",
    img: apple,
    favoriteApple: "Winter Banana Apple",
  },
  {
    name: "Taha",
    role: "UTA | tebrahim",
    pronouns: "he/him",
    location: "Singapore",
    bio: "",
    img: apple,
    favoriteApple:
      "have very little information with niche apple varieties :( probably honeycrisp",
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
