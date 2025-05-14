import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, number }) => {
	return (
		<Card
			title={name}
			cover={
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
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
			extra={<StarOutlined />}
		>
			<Meta description="Fire, magic" />
		</Card>
	);
};

export default PokemonCard;
