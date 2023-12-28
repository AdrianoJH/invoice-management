import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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

        label {
            width: 100%;
            text-align: center;
        }

        select {
            width: 100%;
            margin-top: 10px;
        }
    }
`;

export const BoxInvoices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
        font-weight: bold;
        color: #1c6ebf;
        text-shadow: 1px 1px 1px #0000004b;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 40%;
        height: 100%;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 45px;
            padding: 10px;
            font-weight: bold;
            color: #1c6ebf;
            text-shadow: 1px 1px 1px #0000004b;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25px;
                height: 25px;
                font-size: 25px;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                color: #1c6ebf;
                background-color: transparent;
                filter: drop-shadow( 3px 3px 3px #0000004b);

                cursor: pointer;

                &:hover {
                    color: #00305f;
                }
            }
        }

        &:nth-child(even) {
            background-color: #1f1f21;
            font-weight: bold;
            border-radius: 5px;
            text-shadow: 1px 1px 1px #0000004b;
            box-shadow: 3px 3px 3px #0000008d;

        }
    }

    @media screen and (max-width: 768px) {
        h3 {
           width: 90%;
           text-align: center;
        }

        ul {
            width: 90%;
        }
    }
`;