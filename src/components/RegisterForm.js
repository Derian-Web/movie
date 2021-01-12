import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'
import { onChange } from 'react-native-reanimated';
import { validateEmail} from '../utils/validation' ;
import firebase from "../utils/firebase"

export default function RegisterForm(props) {
    const { changeForm} = props;
    const [FormData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});  



    const register = () =>{
        let errors = {};
        if(!FormData.email || !FormData.password || !FormData.repeatPassword ){
            if(!FormData.email) errors.email = true;
            if(!FormData.password) errors.password = true;
            if(!FormData.repeatPassword) errors.repeatPassword = true;
            
        }else if(!validateEmail(FormData.email)){
            errors.email = true;
        } else if(FormData.password !== FormData.repeatPassword){
            errors.password = true;
            errors.repeatPassword = true;
        }else if(FormData.password.length < 6){
            errors.password = true;
            errors.repeatPassword = true;
        }else{
            firebase.auth().createUserWithEmailAndPassword(FormData.email, FormData.password)
            .then(() => {
                console.log("cuenta creada")
            }).catch(() =>{
                setFormError({
                    email: true,
                    password: true,
                    repeatPassword: true
                })
            })
        }
        setFormError(errors);
       
    };

    return (
        <>
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={e => setFormData({...FormData, email: e.nativeEvent.text})}
            />
            <TextInput
            style={[styles.input, formError.password &&  styles.error]}
            placeholder="Contraseña"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            onChange={e => setFormData({...FormData, password: e.nativeEvent.text})}
           
            
            />

            <TextInput
             style={[styles.input, formError.repeatPassword && styles.error]}
             placeholder=" Repetir Contraseña"
             placeholderTextColor="#969696"
             secureTextEntry={true}
             onChange={e => setFormData({...FormData, repeatPassword: e.nativeEvent.text})}
            
            />

           <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>

            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Iniciar seccion</Text>
                </TouchableOpacity>
            </View>
           
        </>
    )
}

function defaultValue(){
    return{
        email: "",
        password: "",
        repeatPassword: "",
    }
}

const styles = StyleSheet.create({
    btnText:{
        color: "#fff",
        fontSize: 18,
    },
    input:{
        height: 40,
        color: "#fff",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20, 
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040",
    },
    login:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    error:{
        borderColor: "#940c0c"
    }
})
