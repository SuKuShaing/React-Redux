import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const StarButton = ({ isFavorite, onClick }) => {
    const Icon = isFavorite ? StarFilled : StarOutlined; 
    return <Button icon={<Icon />} onClick={onClick} />; // en Icon se renderiza StarFilled o StarOutlined según el valor de isFavorite
}

export default StarButton;