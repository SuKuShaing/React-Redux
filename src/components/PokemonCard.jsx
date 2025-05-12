import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({name, number}) => {
	return (
		<Card
			title={name}
			cover={
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`} loading="lazy" height={170} />
			}
			alt={`imagen del pokemon ${name}`}
			extra={<StarOutlined />}
		>
			<Meta description="Fire, magic" />
		</Card>
	);
};

export default PokemonCard;
