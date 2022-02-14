import { useRouter } from 'next/router';

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Details works {id}</div>;
};

export default PokemonDetails;
