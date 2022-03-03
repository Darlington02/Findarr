import React from 'react'
import styled from 'styled-components'

const Index = () => {
    return (
        <Container>
            <BackgroundImg>
                <img src="/img/blockchain.jpg" />
            </BackgroundImg>

            <Logo>
                Findarr🔎
            </Logo>

            <p className="text-white mt-2 text-center text-xl">Welcome to Findarr, the bridge between the Centralized and Decentralized web.</p>

            <div className="flex justify-center mt-5">
                <a href="/search" className="bg-blue-400 text-white mt-2 mr-2 hover:bg-blue-700 py-5 px-9 rounded-md"><button>Centralized Search</button></a>
                <a href="" className="bg-blue-700 text-white mt-2 mr-2 hover:bg-blue-400 py-5 px-9 rounded-md"><button>Decentralized Wiki</button></a>
            </div>
        </Container>
    )
}

export default Index

const Container = styled.div `
    position: relative;
    font-family: times new roman;
`
const BackgroundImg = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Logo = styled.div `
    text-align: center;
    margin-top: 200px;
    font-size: 70px;
    font-weight: 700;
    color: white;
`