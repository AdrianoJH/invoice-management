import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Container, Content, BoxContent, BoxChartEnergy, BoxChartValues } from './DashboardStyle';

const Dashboard = () => {
    // Estados para armazenar dados dos gráficos, cliente selecionado e lista de clientes
    const [chartDataEnergy, setChartDataEnergy] = useState({});
    const [chartDataValues, setChartDataValues] = useState({});
    const [selectedClient, setSelectedClient] = useState('');
    const [clients, setClients] = useState([]);

    // Opções para os gráficos (eixo X)
    const options = {
        xaxis: {
            categories: chartDataEnergy.labels,
        }
    };

    // Busca a lista de clientes ao carregar o componente
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://localhost:3000/clientes');
                const clientsData = await response.json();
                setClients(clientsData);
            } catch (error) {
                console.error('Erro ao buscar dados dos clientes:', error);
            }
        };

        fetchClients();
    }, []);

    // Busca dados do cliente selecionado ao mudar a seleção
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/cliente/${selectedClient}`);
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    
                    // Processa os dados para criar séries para os gráficos
                    const labels = data.map((item) => item.fileName);

                    const seriesEnergy = [
                        {
                            name: 'Consumo de Energia (kWh)',
                            data: data.map((item) => {
                                const consumptionEntries = item.data.energiaSCEE.filter(entry => entry.includes('/'));
                                const totalConsumption = consumptionEntries.reduce((acc, entry) => {
                                    const consumptionMatch = entry.match(/(\d+\.\d+|\d+)/);
                                    return acc + (consumptionMatch && consumptionMatch[0] ? parseFloat(consumptionMatch[0]) : 0);
                                }, 0);
                                return totalConsumption;
                            }),
                        },
                        {
                            name: 'Energia Compensada (kWh)',
                            data: data.map((item) => {
                                const compensatedEntries = item.data.compensadaGDI.filter(entry => entry.includes('/'));
                                const totalCompensated = compensatedEntries.reduce((acc, entry) => {
                                    const compensatedMatch = entry.match(/(\d+\.\d+|\d+)/);
                                    return acc + (compensatedMatch && compensatedMatch[0] ? parseFloat(compensatedMatch[0]) : 0);
                                }, 0);
                                return totalCompensated;
                            }),
                        },
                    ];

                    const seriesValues = [
                        {
                            name: 'Valor Total sem GD (R$)',
                            data: data.map((item) => {
                                const valueTotalEntries = item.data.energiaSCEE.filter(entry => !isNaN(entry));
                                const totalValue = valueTotalEntries.reduce((acc, entry) => {
                                    const value = parseFloat(entry);
                                    return !isNaN(value) ? acc + value : acc;
                                }, 0);
                                return totalValue;
                            }),
                        },
                        {
                            name: 'Economia GD (R$)',
                            data: data.map((item) => {
                                const economyGDEntry = item.data.compensadaGDI.filter(entry => !isNaN(entry));
                                const totalEconomyGD = economyGDEntry.reduce((acc, entry) => {
                                    const value = parseFloat(entry);
                                    return !isNaN(value) ? acc + value : acc;
                                }, 0);
                                return totalEconomyGD;
                            }),
                        },
                    ];

                    // Atualiza os estados com os dados processados
                    setChartDataEnergy({ labels, series: seriesEnergy });
                    setChartDataValues({ labels, series: seriesValues });
                } else {
                    console.error('Erro: A resposta da API não contém dados válidos.');
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        // Verifica se um cliente foi selecionado antes de chamar a função fetchData
        if (selectedClient) {
            fetchData();
        }
    }, [selectedClient]);

    // Função para lidar com mudanças na seleção do cliente
    const handleClientChange = (event) => {
        setSelectedClient(event.target.value);
    };

    return (
        <Container>
            <Content>
                <h2>Dashboard</h2>
                <BoxContent>
                    {/* Seleção do cliente */}
                    <label>Selecione o Nº do Cliente: </label>
                    <select onChange={handleClientChange} value={selectedClient}>
                        <option value="0">--Selecionar--</option>
                        {clients.map((client) => (
                            <option key={client} value={client}>
                                {client}
                            </option>
                        ))}
                    </select>
                </BoxContent>
            </Content>
            {/* Gráfico de Consumo de Energia e Energia Compensada */}
            <BoxChartEnergy>
                <h3>Consumo de Energia e Energia Compensada</h3>
                {chartDataEnergy.labels && chartDataEnergy.series ? (
                    <Chart options={options} series={chartDataEnergy.series} type="line" />
                ) : (
                    <p>Selecione uma opção para exibir o gráfico.</p>
                )}
            </BoxChartEnergy>
            {/* Gráfico de Valores Monetários e Economia GD */}
            <BoxChartValues>
                <h3>Valores Monetários e Economia GD</h3>
                {chartDataValues.labels && chartDataValues.series ? (
                    <Chart options={options} series={chartDataValues.series} type="line" />
                ) : (
                    <p>Selecione uma opção para exibir o gráfico.</p>
                )}
            </BoxChartValues>
        </Container>
    );
};

export default Dashboard;
