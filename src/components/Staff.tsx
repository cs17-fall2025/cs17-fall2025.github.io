import React, { useState } from "react";
import apple from "../assets/apple.png";
import daphne from "../assets/staff-images/daphne.jpg";
import jiayi from "../assets/staff-images/jiayi.jpg";
import julie from "../assets/staff-images/julie.jpg";
import oliver from "../assets/staff-images/oliver.jpg";
import ramesh from "../assets/staff-images/ramesh.jpg";
import skylar from "../assets/staff-images/skylar.png";
import sophia from "../assets/staff-images/sophia.jpg";
import spike from "../assets/staff-images/spike.jpg";
import taha from "../assets/staff-images/taha.jpg";
import abby from "../assets/staff-images/abby.png";
import nathan from "../assets/staff-images/nathan.png";
import ellis from "../assets/staff-images/ellis.jpg";

interface StaffMember {
  name: string;
  role?: string;
  pronouns: string;
  location: string;
  bio: string;
  img: string;
  favoriteApple: string;
  email?: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Spike",
    email: "jfh@cs.brown.edu",
    pronouns: "he/him",
    location: "Barrington, RI",
    bio: "I started in Math and drifted to CS many years ago. I've been at Brown long enough that I might have had your parents as students. My area of research has mostly been graphics, but in recent years I've been learning about proof assistants (tools for doing math with computers). ",
    img: spike,
    favoriteApple: "Wickson",
  },
  {
    name: "Skylar",
    email: "cs0170headtas@lists.brown.edu",
    role: "HTA",
    pronouns: "they/them",
    location: "Madison, NJ / Orlando, FL (?)",
    bio: "Hi everyone!! I'm a senior studying Computational Biology with a healthy dose of Lit Arts. When I'm not thinking about ReasonML, you can catch me playing banjo, reading Moby Dick, quilting, or doomscrolling on Facebook Marketplace. Super excited to meet you all :)",
    img: skylar,
    favoriteApple: "Obvious choice. Wickson",
  },
  {
    name: "Julie",
    email: "cs0170headtas@lists.brown.edu",
    role: "HTA",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hello! I'm a junior studying computer science. I love drawing, crocheting, and going on long walks. I'm also a big coffee enthusiast and enjoy exploring cafes around campus. Looking forward to a good semester!",
    img: julie,
    favoriteApple: "Lady Alice",
  },
  {
    name: "Abby",
    role: "UTA",
    pronouns: "she/her",
    location: "Abington, MA",
    bio: "Hey everyone! I am a sophomore studying CS-Econ. I love reading, hiking, Monopoly Deal, cold brew, and delicious breakfast sandwiches. Looking forward to a great semester! :)",
    img: abby,
    favoriteApple: "Gala",
  },

  {
    name: "Daphne",
    role: "UTA",
    pronouns: "she/her",
    location: "Westchester, NY",
    bio: "Hi guys, I'm a junior studying English and APMA-CS! I'm really into writing, reading (let me know if you have any recs!), watching obscure video essays, and listening to LE SSERAFIM. Really looking forward to meeting everyone :)",
    img: daphne,
    favoriteApple: "Belle d'Août",
  },
  {
    name: "Ellis",
    role: "Grad TA",
    pronouns: "he/him",
    location: "",
    bio: "Hi!! I'm a 5th year Master’s student at Brown studying Cybersecurity. During my undergrad, I did Computer Science and IAPA. When I'm not camped out at the CIT, I enjoy reading, listening to Darknet Diaries, swimming, and exploring New England. Super excited to be your TA!",
    img: ellis,
    favoriteApple:
      "🍏",
  },
  {
    name: "Jiayi",
    role: "UTA",
    pronouns: "she/they",
    location: "Ningbo, China",
    bio: "Hi! I’m a sophomore from Ningbo, China studying Math-CS and IAPA/Engineering (still deciding!). I enjoy caffeine, hyperpop, long walks through busy streets, and plank challenges. Excited to meet yall!:)",
    img: jiayi,
    favoriteApple: "Granny Smith",
  },
  {
    name: "Nathan",
    role: "UTA",
    pronouns: "he/him",
    location: "St. Charles, Illinois",
    bio: "Hey all! I'm a junior from the Chicago suburbs studying APMA-Econ. Outside of classes, I am a double bassist in the Brown University Orchestra and enjoy playing card games with friends. Looking forward to working with all of you!",
    img: nathan,
    favoriteApple: "Golden Delicious",
  },
  {
    name: "Oliver",
    role: "UTA",
    pronouns: "he/him",
    location: "Chevy Chase, MD",
    bio: "Hey y’all! I’m really excited to have the chance to be a TA for CS17 this year. I’m originally from Chevy Chase, MD and I’ve spent a good amount of time in Vermont and North Carolina. Outside of being a TA, I’m on the Brownian Motion Ultimate Frisbee team and love riding my bike around campus. I can’t wait to meet everyone!",
    img: oliver,
    favoriteApple: "Reinette Clochard of the de Parthenay variety, of course",
  },
  {
    name: "Ramesh",
    role: "UTA",
    pronouns: "he/him",
    location: "Miami, FL",
    bio: "Hi y'all! I'm a junior concentrating in astrophysics and CS. I was born in Miami and then moved to New York when I was thirteen. Outside of being your TA, I'm a coordinator for the Astronomy Club and president of Charcuterie Club! I'm super excited to get to know you all!",
    img: ramesh,
    favoriteApple: "Honeycrisp",
  },
  {
    name: "Sophia",
    role: "UTA",
    pronouns: "she/her",
    location: "New York, NY",
    bio: "Hi! I'm a sophomore from NYC studying APMA-CS. I love cats, skiing, taiko, and grinding Beli. Looking forward to meeting you!",
    img: sophia,
    favoriteApple: "Winter Banana Apple",
  },
  {
    name: "Taha",
    role: "UTA",
    pronouns: "he/him",
    location: "Singapore",
    bio: "Hi! I'm a junior studying APMA-CS from Singapore. I like playing badminton, failing NYT games and reading random wikipedia articles. Super excited to get know all of you this semester!",
    img: taha,
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
          <i>
            {featured.pronouns} | {featured.location}
          </i>
        </h4>
        {featured.email && <h5>{featured.email}</h5>}
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
