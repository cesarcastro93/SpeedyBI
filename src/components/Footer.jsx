import React from 'react';
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <div>
            

                <footer className="text-center text-lg-start FooterSection" >
                    <div className="d-flex justify-content-center py-5">
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                        <i className="bi bi-facebook"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="bi bi-youtube"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="bi bi-instagram"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
                            <i className="bi bi-twitter"></i>
                        </button>
                    </div>


                    <div className="text-center text-white p-3 Footerfooter" >
                        © 2022 Copyright :
                        <a className="text-white" >  Desarrollado por virtual technologies</a>
                    </div>

                </footer>

            </div>
      
    );
}
