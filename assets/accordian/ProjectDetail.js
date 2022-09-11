import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'

const ProjectDetail = (props) => {

    // console.log("the props are shown below====>", props)

    const [Expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }

    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Touchable}
                onPress={() => toggleExpand()}>

                <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '4.5%', left: '5%', }}/>

                    <View style={[styles.boxHeading, { width: '20%', left: '5%' }]}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 18, }]}>{props.date}</Text>
                        <Text style={[Textstyles.bold, { color: '#87ceeb', fontSize: Platform.OS === 'ios' ? 10 : 15, }]}>{props.month}</Text>
                    </View>

                    <View style={[styles.boxHeading, { width: '55%', left: '15%' }]}>
                        <Text style={[Textstyles.bold, styles.Billable]}>{props?.item?.item}</Text>
                        <Text style={[Textstyles.normal, styles.billableTime]}>{props.time}</Text>
                    </View>

            </TouchableOpacity>
            {
                Expand &&
                <View style={styles.ContainerExpanded}>

                    <View style={styles.Line}/>

                    <View style={styles.boxContainer}>
                        <View style={{ flexDirection: 'row', marginTop: '2%', width: Platform.OS === 'android' ? '60%' : null }}>
                            <Text style={[Textstyles.normal, styles.boxDetHeading]}>Project:  </Text>
                            <Text style={[Textstyles.bold, styles.boxDetail]}>{props.projectStatus}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                            <Text style={[Textstyles.normal, styles.boxDetHeading]}>Notes:  </Text>
                            <Text style={[Textstyles.bold, styles.boxDetail]}>{props.notes}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                            <Text style={[Textstyles.normal, styles.boxDetHeading]}>Status:  </Text>
                            <Text style={[Textstyles.bold, styles.boxDetail]}>{props.status}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                            <Text style={[Textstyles.normal, styles.boxDetHeading]}>Tracking:  </Text>
                            <Text style={[Textstyles.bold, styles.boxDetail]}>{props.tracking}</Text>
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

export default ProjectDetail

const styles = StyleSheet.create({
    detail: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041'
    },

    heading: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041'
    },

    boxDetHeading: {
        color: '#1b2041',
        textAlign: 'left'
    },

    boxDetail: {
        color: '#1b2041',
        textAlign: 'left',
        // backgroundColor:'red',
        width: Platform.OS === 'ios' ? '67%' : null
    },

    boxContainer: {
        flexDirection: "column",
        alignSelf: "center",
        width: '90%',
        // height: Platform.OS === 'android' ? 110 : 100,
        marginTop: '2%',
        padding:2
    },

    Line: {
        borderWidth: 1,
        width: '94%',
        borderColor: '#1b2041',
        top: '2%',
        alignSelf: 'center'
    },

    Billable: {
        color: '#1b2041',
        fontSize: 18,
        textAlign: 'left'
    },

    billableTime: {
        color: '#1b2041',
        fontSize: 15,
        textAlign: 'left'
    },

    boxHeading: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    Container: {
        backgroundColor: "#fff",
        width: Platform.OS === 'ios' ? '46%' : '45%',
        // backgroundColor:'red',
        alignSelf: 'center',
        elevation: 5,
        borderRadius: 15,
        margin: '2%'
    },
    ContainerExpanded: {
        width: '100%',
        borderTopColor: 'transparent',
        // backgroundColor:'red',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    Touchable: {
        flexDirection: 'row',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    }
})
