import Image from 'next/image';
import { useEffect, useState } from 'react';

type Game = {
  background_image: string | undefined;
  id: number;
  rating: number;
  name: string;
};

const getGames = async (): Promise<Game[]> => {
  const res = await fetch('https://api.rawg.io/api/games?key=5202d8bd1e9c4e299d16256a2c7748b6');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data.results;
};

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <div className="bg-white p-8 col-span-4 md:col-span-2 mt-11">
    <div className=''>
    <h1>{game.name}</h1>
    <p className="font-bold text-sm mb-4">Rating {game.rating}</p>
    <div className="aspect-video relative">
      <Image src={game.background_image} alt={game.name} layout="fill" objectFit="cover" className="rounded-md" />
    </div>
  </div>
  </div>
);

const GetGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error.message);
      }
    };

    fetchGames();
  }, []);

  return (
    <main className="mt-24 rounded-md grid grid-cols-4 gap-12">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </main>
  );
};

export default GetGames;
