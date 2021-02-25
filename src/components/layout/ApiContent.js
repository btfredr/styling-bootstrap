import Heading from './Heading';
import Paragraph from './Paragraph';

const ApiContent = ({ item }) => {
    return (
        <>
            <Heading title={item.name} />
            <Paragraph content={item.price} />
        </>



    );
};

export default ApiContent