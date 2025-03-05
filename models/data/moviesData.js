import "dotenv/config.js"
import "../../config/database.js"
import Movie from "../Movie.js"


let movies = [
    {
      "title": "Inception",
      "year": 2010,
      "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "awards": {"Oscars": 4, "Golden Globes": 1},
      "streaming": ["Netflix", "HBO Max"],
      "gender": "Sci-Fi"
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "cast": ["Christian Bale", "Heath Ledger", "Gary Oldman"],
      "awards": {"Oscars": 2, "BAFTA": 1},
      "streaming": ["Prime Video", "HBO Max"],
      "gender": "Action"
    },
    {
      "title": "Parasite",
      "year": 2019,
      "cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
      "awards": {"Oscars": 4, "Cannes": 1},
      "streaming": ["Hulu"],
      "gender": "Drama"
    },
    {
      "title": "Interstellar",
      "year": 2014,
      "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "awards": {"Oscars": 1, "BAFTA": 1},
      "streaming": ["Netflix", "HBO Max"],
      "gender": "Sci-Fi"
    },
    {
      "title": "Avengers: Endgame",
      "year": 2019,
      "cast": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      "awards": {"MTV": 3, "People's Choice": 2},
      "streaming": ["Disney+"],
      "gender": "Superhero"
    },
    {
      "title": "Joker",
      "year": 2019,
      "cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
      "awards": {"Oscars": 2, "BAFTA": 3},
      "streaming": ["HBO Max"],
      "gender": "Drama"
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
      "awards": {"Oscars": 3, "Golden Globes": 4},
      "streaming": ["Paramount+"],
      "gender": "Crime"
    },
    {
      "title": "Pulp Fiction",
      "year": 1994,
      "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "awards": {"Oscars": 1, "Cannes": 1},
      "streaming": ["Netflix", "HBO Max"],
      "gender": "Crime"
    },
    {
      "title": "The Matrix",
      "year": 1999,
      "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "awards": {"Oscars": 4, "BAFTA": 2},
      "streaming": ["HBO Max"],
      "gender": "Sci-Fi"
    },
    {
      "title": "Titanic",
      "year": 1997,
      "cast": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
      "awards": {"Oscars": 11, "Golden Globes": 4},
      "streaming": ["Disney+"],
      "gender": "Romance"
    },
    {
      "title": "Forrest Gump",
      "year": 1994,
      "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      "awards": {"Oscars": 6, "Golden Globes": 3},
      "streaming": ["Netflix"],
      "gender": "Drama"
    },
    {
      "title": "Shutter Island",
      "year": 2010,
      "cast": ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
      "awards": {"Saturn": 1, "Empire": 1},
      "streaming": ["Netflix"],
      "gender": "Thriller"
    },
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "awards": {"Oscars": 0, "Golden Globes": 1},
      "streaming": ["HBO Max"],
      "gender": "Drama"
    },
    {
      "title": "Whiplash",
      "year": 2014,
      "cast": ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
      "awards": {"Oscars": 3, "BAFTA": 1},
      "streaming": ["Prime Video"],
      "gender": "Music"
    },
    {
      "title": "Django Unchained",
      "year": 2012,
      "cast": ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
      "awards": {"Oscars": 2, "Golden Globes": 2},
      "streaming": ["Netflix"],
      "gender": "Western"
    }
]

  
export default movies


