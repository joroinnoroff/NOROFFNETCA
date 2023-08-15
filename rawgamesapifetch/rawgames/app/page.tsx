import NavBar from "@/components/NavBar";
import Image from "@/node_modules/next/image";
import Link from 'next/link';

type Game = {
  background_image: string | undefined;
  id: number,
  backround_image: string,
  rating: number,
  name: string,
  
}

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=5202d8bd1e9c4e299d16256a2c7748b6`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  await new Promise((resolve => setTimeout(resolve, 2000)))
  const data = await res.json();
  return data.results;
};

export default async function Home() {
const games = await getGames();

  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12">
      
      {games.map((game) => (
        <div className="bg-white p-8 col-span-4 md:col-span-2" key={game.id}>
          <h1 className="">{game.name}</h1>
          <p className="font-bold text-sm mb-4">Rating {game.rating}</p>
          <div className="aspect-square relative">
          <Image src={game.background_image} alt={game.name} fill className="object-cover rounded-md"
           />
           </div>
        </div>
      ))}

    </main>
  );
}
