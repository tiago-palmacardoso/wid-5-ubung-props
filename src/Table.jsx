import data from "./data/tableData.json"


function Table({ suchbegriff, kantonAuswahl, serviceTypAuswahl }) {
    const filteredData = data.filter((item) => {
        const filteredBySuchbegriff =
            !suchbegriff ||
            item.Beschreibung.toLowerCase().includes(suchbegriff.toLowerCase());
        const filteredByKanton = !kantonAuswahl || item.Kanton === kantonAuswahl;
        const filteredByServicetype =
            !serviceTypAuswahl || item.ServiceTyp === serviceTypAuswahl;
        return filteredBySuchbegriff && filteredByKanton && filteredByServicetype;
    });

    return (<div className="TableWrapper">
        <table border="1" cellPadding="4">
            <thead id="TableHeader">
                <tr>
                    <td>Kanton</td>
                    <td>Titel</td>
                    <td>Beschreibung</td>
                    <td>ServiceTyp</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody id="TableBody">
                {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.Kanton}</td>
                        <td>{item.Titel}</td>
                        <td>{item.Beschreibung}</td>
                        <td>{item.ServiceTyp}</td>
                        <td>{item.Score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    )
}
export default Table;