import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Hozzaad = () => {
  const [nev, setNev] = useState("");
  const [szuletesi_datum, setSzuletesi_datum] = useState("");
  const [telefonszam, setTelefonszam] = useState("");
  const [email, setEmail] = useState("");
  const [foglalt_napok_szama, setFoglalt_napok_szama] = useState("");
  const [osszeg, setOsszeg] = useState("");

  const feldolgoz = (event) => {
    event.preventDefault();

    const adatok = {
      nev,
      szuletesi_datum,
      telefonszam,
      email,
      foglalt_napok_szama,
      osszeg,
    };

    const elkuld = async () => {
      const adat = await fetch("http://localhost:3500/fesztivalhozzaad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adatok),
      });

      if (adat.ok) {
        const response = await adat.json();
        alert(response.msg);
        setNev("");
        setSzuletesi_datum("");
        setTelefonszam("");
        setEmail("");
        setFoglalt_napok_szama("");
        setOsszeg("");
      } else {
        const response = await adat.json();
        alert(response.msg);
      }
    };
    elkuld();
  };
  return (
    <div className="form-c">
      <div className="form">
        <Container>
          <Form onSubmit={feldolgoz}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Név</Form.Label>
              <Form.Control
                type="text"
                placeholder="Név"
                value={nev}
                onChange={(e) => {
                  setNev(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label>Születési Dátum</Form.Label>
              <Form.Control
                type="date"
                placeholder="Születési Dátum"
                value={szuletesi_datum}
                onChange={(e) => {
                  setSzuletesi_datum(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefonszám</Form.Label>
              <Form.Control
                type="text"
                placeholder="Telefonszám"
                value={telefonszam}
                onChange={(e) => {
                  setTelefonszam(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Foglalt napok száma</Form.Label>
              <Form.Control
                type="text"
                placeholder="Foglalt napok száma"
                value={foglalt_napok_szama}
                onChange={(e) => {
                  setFoglalt_napok_szama(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Összeg</Form.Label>
              <Form.Control
                type="text"
                placeholder="Összeg"
                value={osszeg}
                onChange={(e) => {
                  setOsszeg(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <div className="buttons">
            <Button onClick={feldolgoz}>Felvesz</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hozzaad;
