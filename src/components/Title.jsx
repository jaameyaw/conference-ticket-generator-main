import '../App.css'

function Title({ title = 'Your Journey to Coding Conf', nLine = '2025 Starts Here!' }) {
    return (
        <h2 className="title">
            {title} <br /> {nLine}
        </h2>
    )
}

export default Title