import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../News.css";

const fallbackImage = "path/to/fallback/image.jpg";

function NewsCard({ title, description, image, link }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image || fallbackImage}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="card-title"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button
          size="small"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default NewsCard;
