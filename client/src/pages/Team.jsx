// Team.jsx
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../Data/teamMembers";
import { Box } from "@mui/joy";
import "../Team.css";

const Team = () => {
  return (
    <>
      <div className="teamPageHeader">
        <h2>Meet Our Team</h2>
        <p>Reach Out To Members Using Their Socials</p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px 30px",
          justifyContent: "center",
          p: 2,
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 0 320px",
              maxWidth: "320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TeamCard
              avatarSrc={member.avatarSrc}
              chipText={member.chipText}
              name={member.name}
              bio={member.bio}
              socialIcons={member.socialIcons}
              email={member.email}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Team;
