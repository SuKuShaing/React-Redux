import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = () => {
	return (
		<Card
			title="Ditto"
			cover={
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" />
			}
			alt="Ditto"
			extra={<StarOutlined />}
		>
			<Meta description="Fire, magic" />
		</Card>
	);
};

export default PokemonCard;
