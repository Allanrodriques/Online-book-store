import React from 'react';
import styled from "styled-components";

const Cover = () => {
    return (
        <div>
            <Wrap>


            </Wrap>


        </div>
    )
}
const Wrap = styled.div`
    width: 99vw;
    height: 35vw;
    background-image: url('https://imgix.bustle.com/uploads/shutterstock/2019/8/29/4226df28-b6cd-4b11-9478-f0ac376a5e47-shutterstock-1104409886.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg') ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-x:hidden;

    @media (max-width:680px){
        width:100%;
        height:50vh;
        margin:0;
    }
`
const Text = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    margin-top:11vh;
    font-weight: 500;
    font-size:2rem;
    background-color:white;
    opacity:0.7;
    max-width:600px;
`


export default Cover
