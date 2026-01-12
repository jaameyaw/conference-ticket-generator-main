import '../App.css';

export default function HeroParagraph({paragraph = "Secure your spot at next year's biggest coding conference."}) {
    return (
        <p className="hero-paragraph">
            {paragraph}
        </p>
    )
}