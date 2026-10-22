import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Table from "./Table";
import Header from "./Header";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");
  console.log("Suchbegriff:", suchbegriff);
  console.log("ServiceTyp:", serviceTypAuswahl);
  console.log("Kanton:", kantonAuswahl);

  // Erzeugt eine Liste aller im Datensatz vorkommenden Kantone für das Auswahlmenü


  return (
    <div className="App">
      <Header
        setSuchbegriff={setSuchbegriff}
        setKantonAuswahl={setKantonAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
        suchbegriff={suchbegriff}
        kantonAuswahl={kantonAuswahl}
        serviceTypAuswahl={serviceTypAuswahl}
      />
      <Table
        suchbegriff={suchbegriff}
        kantonAuswahl={kantonAuswahl}
        serviceTypAuswahl={serviceTypAuswahl} />
      <Footer
        setSuchbegriff={setSuchbegriff}
        setKantonAuswahl={setKantonAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl} />
    </div>
  );
}

export default App;
