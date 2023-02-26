import { StyleSheet } from "react-native";

const lightstyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: '#07dfef',
        

    },

    alco: {
        alignSelf: 'center',
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',

    },
    weight: {
        alignSelf: 'center',
        paddingBottom: 10,
        fontSize: 18,

    },
    input: {
        alignSelf: 'center',
        paddingBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: 300
    },
    bottles: {
        alignSelf: 'center',
        paddingBottom: 10,
        fontSize: 18,

    },
    num: {
        alignSelf: 'center',
        paddingBottom: 10,

    },
    hours: {
        alignSelf: 'center',
        paddingBottom: 10,
        fontSize: 18,

    },
    radio: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },


    button: {
        borderRadius: 5,
        backgroundColor: '#1020b3',
        alignSelf: 'center',
        width: 150,
        color: '#ffffff'

    },

    switch: {
        paddingBottom: 35

    },
    print: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'center'

    },


});

const darkstyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: '#58d107',
    },

    alco: {
        ...lightstyle.alco,
    },
    weight: {
        ...lightstyle.weight,
    },
    input: {
        ...lightstyle.input,
    },
    bottles: {
        ...lightstyle.bottles,
    },
    num: {
        ...lightstyle.num,
    },
    hours: {
        ...lightstyle.hours,
    },
    radio: {
        ...lightstyle.radio,
    },
    button: {
        ...lightstyle.button,
        backgroundColor: '#056216',
    },
    switch: {
        ...lightstyle.switch
    },
    radioGroup: {
        ...lightstyle.radioGroup,
    },
    radioButton: {
        ...lightstyle.radioButton,
    },
    print: {
        ...lightstyle.print,
    },

})


export { darkstyle, lightstyle };