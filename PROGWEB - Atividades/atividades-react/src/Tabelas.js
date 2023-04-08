import React from 'react';

function Tables() {
    return (
        <div className="row col-md-12">
            <div className="row col-md-12 align-items-center"
                style={{ width: '93%', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
                <h1 className="col-md-10">Tabelas</h1>
            </div>
            <table className="table" style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
                <thead>
                    <tr>
                        <th>Nome do Medicamento</th>
                        <th>Pesagem (gramas)</th>
                        <th>Princípio Ativo</th>
                        <th>Nome do Fabricante</th>
                        <th>Farmacêutico Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Medicamento1</td>
                        <td>500</td>
                        <td>Zolpidem</td>
                        <td>Hypera Pharma</td>
                        <td>Farmacêutico1</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', border: '1px solid black' }}>
                <thead>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Nome do Produto</th>
                        <th style={{ border: '1px solid black' }}>Preço</th>
                        <th style={{ border: '1px solid black' }}>Desconto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ border: '1px solid black' }}>Produto1</td>
                        <td style={{ border: '1px solid black' }}>R$ 5,00</td>
                        <td style={{ border: '1px solid black' }}>2%</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', border: '1px dotted black' }}>
                <thead>
                    <tr style={{ border: '1px dotted black' }}>
                        <th style={{ border: '1px dotted black' }}>Nome do Paciente</th>
                        <th style={{ border: '1px dotted black' }}>Data de Nascimento</th>
                        <th style={{ border: '1px dotted black' }}>CPF</th>
                        <th style={{ border: '1px dotted black' }}>Endereço</th>
                        <th style={{ border: '1px dotted black' }}>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: '1px dotted black' }}>
                        <td style={{ border: '1px dotted black' }}>Paciente1</td>
                        <td style={{ border: '1px dotted black' }}>15/06/1990</td>
                        <td style={{ border: '1px dotted black' }}>123.456.789-10</td>
                        <td style={{ border: '1px dotted black' }}>Rua: 1, Bairro: Bairro1</td>
                        <td style={{ border: '1px dotted black' }}>(62) 12345-6789</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default Tables;
