export default function Footer() {
    return (
        <div className="bg-dark footer d-lg-none d-flex justify-content-around position-fixed bottom-0 py-2">
            <a href="https://github.com/Noahgamerrr" className="d-lg-none d-inline-block" style={{margin: 0}}>
                <img src="./images/github.svg" alt="GitHub" className="github-img"
                    style={{width: "12vw", margin: "0", padding: "0"}}
                />
            </a>
            <a href="https://www.linkedin.com/in/arsicn/" className="d-lg-none d-inline-block" style={{margin: 0}}>
                <img src="./images/linkedin.svg" alt="LinkedIn" className="github-img"
                    style={{width: "12vw", margin: "0", padding: "0"}}
                />
            </a>
        </div>
    )
}