import { CardColumns } from "react-bootstrap";
import MemeCard from "./MemeCard";

export default function MemeCardList({ memes }) {
  return (
    <div className="container-sm" style={{ maxWidth: "500px" }}>
      <CardColumns>
        {memes.map((meme) => (
          <MemeCard key={meme._id} meme={meme} />
        ))}
      </CardColumns>
    </div>
  );
}
