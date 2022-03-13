import { useEffect, useState } from 'react';
import { Pokemon } from '../../models/pokemon';
import { PokemonDetailsProps } from '../../models/pokemon-details-props';
import { fetchPokemon } from '../api/service';
import Image from 'next/image';
import styles from '../../styles/PokemonDetails.module.css';

const PokemonDetails = ({ pokemonName }: PokemonDetailsProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [accordingTypePokemon, setAccordingTypePokemon] = useState('');

  useEffect(() => {
    getPokemon(pokemonName || 'bulbasaur');
  }, [pokemonName]);

  async function getPokemon(searchByPokemonName: string) {
    const res = await fetchPokemon(searchByPokemonName);

    console.log(res);

    const pokemonResponse = composePokemonResponse(
      JSON.parse(JSON.stringify(res))
    );

    setPokemon(pokemonResponse);
  }

  function composePokemonResponse(response): Pokemon {
    const { name, types, stats, sprites } = response;

    const firstType = types[0].type.name;
    const image = sprites.other.dream_world.front_default;

    setColorAccordingTypePokemon(firstType);

    return {
      name,
      types,
      stats,
      image,
    };
  }

  function setColorAccordingTypePokemon(type) {
    const colors = {
      grass: '#1B7C3D',
      fire: '#AB1F23',
      water: '#1552E2',
      electric: '#E3E32A',
      poison: '#5F2F8F',
      ice: '#C7F4FF',
      bug: '#1C4B27',
      dragon: '#61CAD9',
      psychic: '#AC2571',
      ghost: '#343269',
      dark: '#5A5979',
      fairy: '#941942',
      fighting: '#994026',
      flying: '#49677D',
      ground: '#6E4920',
      normal: '#75515B',
      rock: '#48180B',
      steel: '#42BD94',
    };

    setAccordingTypePokemon(colors[type]);
  }

  return (
    <div
      className={styles.pokemonImage}
      style={{ backgroundColor: accordingTypePokemon }}
    >
      {pokemon ? (
        <Image
          alt={pokemon.name}
          src={pokemon.image}
          width={150}
          height={150}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PokemonDetails;
