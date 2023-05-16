import languages from "../data/languages.json";
import Language from "../components/Language";

export default function Languages() {
    let langCount = -1;

    const langElements = languages.map(lang => {
        langCount++;
        return <Language order={langCount} key={lang.id} item={lang}/>
    });

    return (
        <>
            <h1>Languages</h1>
            <p className="mb-5">
                Languages are a guilty pleasure of mine, as I love learning about different cultures
                and thus their languages. Here, you will find all the languages I have learned/tried
                to learn thus far. Note that the levels stated are only my own estimates based on the
                CEFR-Framework and that they might differ from my actual command of the language.
            </p>
            {langElements}
        </>
    )
}