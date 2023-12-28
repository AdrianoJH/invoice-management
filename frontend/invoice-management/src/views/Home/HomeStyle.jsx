import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-left: 50px;

    h1 {
        margin-bottom: 50px;
        font-size: 50px;
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 2px 2px 2px #0000004b;
    }

    p {
        width: 60%;
        font-size: 20px;
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 1px 1px 1px #0000004b;
        line-height: 30px;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        padding: 0;

        h1 {
            font-size: 40px;
            margin-top: 50px;
            text-align: center;
        }

        p {
            width: 90%;
            text-align: center;
        }
    }
`;

export const BoxImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        margin-top: 50px;
        filter: drop-shadow( 10px 10px 10px #0000004b);
    }

    @media screen and (max-width: 768px) {
        align-items: center;
    }

`;