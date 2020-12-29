import './Book.css'

const Book = (props) => {
    const {id, title, author, img} = props.book
    const {data, i} = props
    const lastI = data.length - 1
    return (
        <div>
            <section>
                {img}
            </section>
            <section>
                {title} by {author}
            </section>
        </div>
    )
}

export default Person