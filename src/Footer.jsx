function Footer({ setSuchbegriff, setKantonAuswahl, setServiceTypAuswahl }) {



    return (
        <footer>
            <button id="ResetButton"
                onClick={() => {
                    setSuchbegriff("");
                    setKantonAuswahl("");
                    setServiceTypAuswahl("");
                }}
            >
                Reset
            </button>
        </footer>
    )
}
export default Footer;