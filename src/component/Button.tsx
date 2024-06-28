import React from 'react'
import { Button ,Text} from "native-base";
import { StyleSheet } from 'react-native';

type btnProps = {
    text:string,
    color:string,
    marginTop:number
}
export const CusButton = (props:btnProps) => {
  return (
    <Button style={[style.btnStyle,{ backgroundColor:props.color,marginTop:props.marginTop}]}>
        {props.text}
    </Button>
  )
}

const style = StyleSheet.create({
    btnStyle:{
        margin:20,
        borderRadius:20,
    }
})