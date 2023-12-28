import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFileDownload } from "react-icons/fa";
import { Container, Content, BoxContent, BoxInvoices } from './InvoiceLibraryStyle';

const InvoiceLibrary = () => {
  // Declaração de estados usando o Hook useState do React
  const [invoices, setInvoices] = useState([]);  // Estado para armazenar a lista de faturas
  const [clients, setClients] = useState([]);  // Estado para armazenar a lista de clientes
  const [selectedClient, setSelectedClient] = useState('');  // Estado para armazenar o cliente selecionado

  // É executado após a renderização inicial para buscar a lista de clientes do backend
  useEffect(() => {
    axios.get('http://localhost:3000/clientes')
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar lista de clientes:', error);
      });
  }, []);

  // É executado sempre que o cliente selecionado é alterado para buscar as faturas correspondentes
  useEffect(() => {
    if (selectedClient) {
      axios.get(`http://localhost:3000/cliente/${selectedClient}`)
        .then((response) => {
          setInvoices(response.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar faturas do cliente:', error);
        });
    }
  }, [selectedClient]);

  // Função para lidar com a mudança de cliente selecionado
  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  // Função para lidar com o download de uma fatura
  const handleDownload = (fileName) => {
    const downloadUrl = `http://localhost:3000/download/${fileName}`;
    window.open(downloadUrl, '_blank');  // Abre uma nova janela para iniciar o download
  };

  // Renderização do componente
  return (
    <Container>
      <Content>
        <h2>Biblioteca de Faturas</h2>
        <BoxContent>
          <label>Selecione o Nº do Cliente: </label>
          <select value={selectedClient} onChange={handleClientChange}>
            <option value="">--Selecionar--</option>
            {clients.map((client) => (
              <option key={client} value={client}>
                {client}
              </option>
            ))}
          </select>
        </BoxContent>
      </Content>
      <BoxInvoices>
        <h3>Selecione uma opção para exibir as faturas disponíveis</h3>
        {invoices && invoices.map((invoice) => (
          <ul key={invoice.fileName}>
            <li>
              {invoice.data.mesReferencia}
              <button onClick={() => {
                handleDownload(invoice.fileName);
              }}><FaFileDownload /></button>
            </li>
          </ul>
        ))}
      </BoxInvoices>
    </Container>
  );
};

export default InvoiceLibrary;