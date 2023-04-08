import React from 'react';

function Formulario() {
  return (
    <div className="row col-md-12" style={{margin: 'auto'}}>
      <div className="row col-md-12 align-items-center"
        style={{width: '93%', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
        <h1 className="col-md-10">Formulários</h1>
      </div>
      <div style={{width: '91%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>
        <InputTexto />
        <InputData />
        <InputCPF />
        <InputEndereco />
        <SelectOpcoes />
      </div>
    </div>
  );
}

function InputTexto() {
  return (
    <div>
      <label htmlFor="inputTexo">Texto</label>
      <input className="form-control" type="text" id="inputTexo"></input>
    </div>
  );
}

function InputData() {
  return (
    <div>
      <label htmlFor="inputData">Data</label>
      <input className="form-control" id="inputData" type="datetime-local"></input>
    </div>
  );
}

function InputCPF() {
  return (
    <div>
      <label htmlFor="inputNumber">CPF</label>
      <input className="form-control" type="number" id="inputNumber"></input>
    </div>
  );
}

function InputEndereco() {
  return (
    <div>
      <label htmlFor="endereco">Endereço</label>
      <input className="form-control" type="text" id="endereco"></input>
    </div>
  );
}

function SelectOpcoes() {
  return (
    <div>
      <label htmlFor="selecao">Seleção</label>
      <select className="form-control">
        <option>Opção 1</option>
        <option>Opção 2</option>
        <option>Opção 3</option>
        <option>Opção 4</option>
      </select>
    </div>
  );
}

export default Formulario;
