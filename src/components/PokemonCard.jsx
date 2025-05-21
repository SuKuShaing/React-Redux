import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorites } from "../actions";

const capitalize = (str) =>
	str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

const PokemonCard = ({ name, number, image, types, id, favorite }) => {
	const dispatch = useDispatch();

	const handleOnFavorite = () => {
		dispatch(setFavorites({id}));
	}

	return (
		// src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
		<Card
			title={capitalize(name)}
			cover={
				<img
					src={image}
					loading="lazy"
					alt={`imagen del pokemon ${name}`}
					style={{
						width: "100%",
						height: "auto",
						objectFit: "contain",
						// maxHeight: "200px",
						margin: "auto",
					}}
				/>
			}
			alt={`imagen del pokemon ${name}`}
			extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
		>
			<Meta
				description={types
					.map((type) => {
						return type.type.name;
					})
					.map((type) => {
						return capitalize(type);
					})
					.join(", ")
				}
			/>
		</Card>
	);
};

export default PokemonCard;
