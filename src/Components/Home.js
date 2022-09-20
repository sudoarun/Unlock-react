import React from 'react';
import RegForm from './service/RegistrationForm';

function Home() {
    return (
        <section className="mt-5 pt-7">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-md-start text-center py-6" id="home">
                        <h1 className="mb-4 fs-9 fw-bold">The Ultimate Solution For Your Device</h1>
                        <p className="mb-6 lead text-secondary">Tools tutorials, design and innovation experts, all<br
                            className="d-none d-xl-block" />in one place! The most intuitive way to imagine<br
                                className="d-none d-xl-block" />your next user experience.</p>
                        <div className="text-center text-md-start" id="register">
                            <button type="button" className="btn btn-outline-warning me-3 btn-lg" data-bs-toggle="modal" data-bs-target="#RegModal">
                                Register Here <span role="img" aria-label='Emoji'>😉</span>
                            </button></div>
                    </div>
                    <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src={require('../images/hero-img.png')}
                        alt="" />

                    </div>
                </div>
            </div>

        <RegForm />
            
        </section>
    )
}

export default Home;