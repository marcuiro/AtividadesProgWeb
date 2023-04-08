import React from 'react';

function Navbar() {
    return (

        <div>
            <a href="#javascript:;" data-target="#collapse-content-arp" className="collapse-btn" data-toggle="collapse">
                ARP - Ciclo 1
            </a>
            <a href="#javascript:;" data-target="#collapse-content-apS1" className="collapse-btn active">
                Atividades Práticas
            </a>
            <div className="row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="row col-md-5">
                    <div style={{ color: 'white' }}>Curso de Engenharia de Software - UniEVANGÉLICA</div>
                    <div style={{ color: 'white' }}>Disciplina de Programação Web</div>
                </div>
                <div className="row col-md-3">
                    <div style={{ color: 'white' }}>Dev: Marco Antônio Martins</div>
                    <div style={{ color: 'white' }}>01/04/2023</div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;