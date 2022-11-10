import React from 'react'
import { Avatar, Text } from 'react-native-paper';

const Space = (props) => {
    return(
        <div style={{height : props.height}}></div>
    );
}

export default function AboutPage() {

    return (
        <>
        <div style={
            {
                padding : 20
            }
        }>
            <center>
                <Avatar.Image size={250} source={require('../../assets/profile_1.jpg')} />
                <Space height={30}/>
                <Text style={{fontWeight : "bold", fontSize : 20}}>ANDONIAINA Nomenjanahary</Text>
                <Space height={30}/>
                <Text style={{fontWeight : "bold", fontSize : 18}}>Mobile/Web Developer</Text>
                <Space height={18}/>
                <Text>Study at : <b>ESTI Antanimena</b></Text>
                <Space height={18}/>
                <Text>MASTER I in <b>Information System Management</b></Text>
            </center>
        </div>
        </>
    )
}
