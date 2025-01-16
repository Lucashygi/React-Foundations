export default function WithParameters(props) {
    const { title, subtitle, duration } = props;
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>Subtitle: {subtitle}</p>
            <p>Duration: {duration}</p>
        </div>
    )
}