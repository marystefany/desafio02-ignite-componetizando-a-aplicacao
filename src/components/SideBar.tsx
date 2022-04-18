import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface Props {
  genres: GenreResponseProps[];
  selectGenre: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, selectGenre, selectedGenreId }: Props) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => selectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
