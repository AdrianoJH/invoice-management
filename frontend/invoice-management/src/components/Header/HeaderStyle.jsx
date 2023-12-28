import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;

    button#btn-mobile {
        display: none;
    }

    .visible {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding-left: 10px;
    }  

    .hidden {
        display: none;
    }   

    div#button {
        display: none;
    }

    

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;

        div#button {
            display: flex;
            justify-content: start;
            align-items: end;
            width: 100% ;
            height: 10px;
        }

        button#btn-menu-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 22px;
            height: auto;
            border: none;
            background: none;
            z-index: 99999;

            svg#open {
                position: absolute;
                width: 18px;
                height: 18px;
                top: 18px;
                left:10px;
                color: #1f1f21;
            }

            svg#close {
                position: absolute;
                width: 18px;
                height: 18px;
                top: 10px;
                left: 5px;
                color: #d4d4d8;            }
        }
    
    }

`;

export const ContentMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-left: 30px;
    background-color: #1f1f21;
    box-shadow: 0 -5px 3px 3px #1f1f21, 0 5px 3px 3px #1f1f21;

    svg {
        margin-left: 20px;
        font-size: 50px;
        color: #d4d4d8;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 40%;
        height: 100%;

        li {
            list-style: none;
            
            a {
                position: relative;
                text-decoration: none;
                font-size: 20px;
                font-weight: bold;
                color: #d4d4d8;

                &::after {
                        position: absolute;
                        width: 0;
                        height: 3px;
                        bottom: -5px;
                        left: 0;
                        content: " ";
                        background-color: #1c6ebf;
                        transition: 0.5s ease-in-out;
                }

                &:hover {
                        color: #1c6ebf;
                }    

                &:hover::after {
                        width: 100%;
                    
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const MobileMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    top: 0px;
    left: 0;
    background-color: #1f1f21;
    z-index: 10000;

    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 70px;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            list-style: none;
            margin-top: 25px;
            color: #d4d4d8;

            a {
                width: 50%;
                text-decoration: none;
                text-align: start;
                font-size: 15px;
                font-weight: bold;
                color: #d4d4d8;

            }

            svg {
                margin-right: 10px;
                color: #d4d4d8;
            }
            
        }
        
        svg {
            position: absolute;
            top: 160px;
            left: 33%;
            font-size: 50px;
            color: #d4d4d8;
        }
    }

`;