import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 40%;
    height: 100%;
    margin-top: 30px;
    padding: 20px;
    border-radius: 10px;
    background-color: #1f1f21;
    box-shadow: 3px 3px 3px #0000008d;

    h2 {
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 2px 2px 2px #0000004b;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-top: 60px;        
    }

`;

export const BoxContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    label {
        width: 80%;
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 2px 2px 2px #0000004b;
    }

    select {
        width: 100%;
        height: 30px;
        border: none;
        padding: 0 10px;
        border-radius: 5px;
        font-weight: bold;
        text-shadow: 1px 1px 1px #0000004b;
        color: #d4d4d8;
        background-color: #00305f;
        cursor: pointer;

        &:focus {
            outline: none;
        
        }
    }

    option {
       border: none;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        label {
            width: 90%;
            text-align: center;
        }

        select {
            width: 100%;
            margin-top: 10px;
        }
    
    }
`;

export const BoxChartEnergy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 50px;

    h3 {
        margin-bottom: 50px;
        font-size: 25px;
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 1px 1px 1px #0000004b;
    }

    p {
        font-size: 20px;
        font-weight: bold;
        color: #1f1f21;        
        text-shadow: 2px 2px 2px #0000004b;
    }

    .apexcharts-canvas {
        width: 900px;
        height: 500px;
    }

    @media screen and (max-width: 768px) {
        h3 {
            width: 90%;
            text-align: center;
        }

        p {
            width: 90%;
            text-align: center;
        }

        .apexcharts-canvas {
            width: 450px;
        }
    }

`;

export const BoxChartValues = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 50px;

    h3 {
        margin-bottom: 50px;
        font-size: 25px;
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 1px 1px 1px #0000004b;
    }

    p {
        font-size: 20px;
        font-weight: bold;
        color: #1f1f21;        
        text-shadow: 2px 2px 2px #0000004b;
    }

    .apexcharts-canvas {
        width: 900px;
        height: 500px;
    }

    @media screen and (max-width: 768px) {
        h3 {
            width: 90%;
            text-align: center;
        }

        p {
            width: 90%;
            text-align: center;
        }

        .apexcharts-canvas {
            width: 450px;
        }
    }
`;