import PropTypes from "prop-types";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamCard({ avatarSrc, name, bio, socialIcons, email, chipText }) {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src={avatarSrc} sx={{ "--Avatar-size": "4rem" }} />
        {chipText && (
          <Typography
            level="body-sm"
            sx={{
              bgcolor: "background.level1",
              borderRadius: "0.5rem",
              p: 0.5,
            }}
          >
            {chipText}
          </Typography>
        )}
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          {bio}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": { borderRadius: "2rem" },
          }}
        >
          {socialIcons.map((icon, index) => (
            <IconButton
              key={index}
              size="sm"
              variant="plain"
              color="neutral"
              component="a"
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={icon.icon} />
            </IconButton>
          ))}
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button component="a" href={`mailto:${email}`}>
              Message
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}

TeamCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  email: PropTypes.string.isRequired,
  chipText: PropTypes.string,
};

export default TeamCard;
