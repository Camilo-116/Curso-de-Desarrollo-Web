import React from "react";
import "../../styles/footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="bg-primary">
                    <p className="position-absolute lead start-0 ms-3 mt-2 mb-2 text-light">Comparte la música</p>
                    <p className="position-absolute lead end-0 me-3 mt-2 mb-2 text-light">&copy;Derechos reservados</p>
            </div>
        );
    }
}

export default Footer;