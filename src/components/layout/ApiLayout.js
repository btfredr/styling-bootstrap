import ApiContent from './ApiContent'

const ApiLayout = ({ items, isLoading }) => {
    return isLoading ? <h1>Loading currencies...</h1> : <section>
        {items.map(item => (
            <ApiContent key={item.id} item={item}></ApiContent>
        ))}
    </section>
}

export default ApiLayout
