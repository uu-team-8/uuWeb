import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <>
                <div class="container-fluid fixed-bottom bg-dark">
                    <footer class=" text-center text-lg-start">
                        <div class="text-center text-white p-3">
                            {"© 2023 Copyright: "}
                            <a
                                class="text-white"
                                href="https://vojtechpetrasek.com/"
                            >
                                Vojtěch Petrásek
                            </a>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Footer;
