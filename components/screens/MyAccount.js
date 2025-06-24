import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';

const MyAccount = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <ScrollView style={{flex: 1}}>
            <Text style={styles.description}>Please sign in or create an account to send gifts,{"\n"}track order, and many more great features</Text>
            <Text style={styles.signInBtn}>SIGN IN OR CREATE ACCOUNT</Text>

            <View>
                <View style={styles.custmerCareContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='headset-outline' size={20} color={'#165963'} style={{ marginLeft: 15 }} />
                        <Text style={{ fontSize: 12, color: '#165963', fontWeight: '500', marginLeft: 10 }}>
                            Customer Care
                        </Text>
                    </View>
                    <Ionicons name='chevron-forward-outline' size={20} color={'#165963'} />
                </View>

                <View style={styles.languageChangeContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='language' size={20} color={'#165963'} style={{ marginLeft: 15 }} />
                        <Text style={{ fontSize: 12, color: '#165963', fontWeight: '500', marginLeft: 10 }}>
                            Language
                        </Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#165963', fontWeight: 'bold' }}>اللغة</Text>
                </View>
            </View>
            <View style={{ marginTop: -15 }}>
                <View style={styles.custmerCareContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='help-circle-outline' size={20} color={'#165963'} style={{ marginLeft: 15 }} />
                        <Text style={{ fontSize: 12, color: '#165963', fontWeight: '500', marginLeft: 10 }}>
                            FAQ
                        </Text>
                    </View>
                    <Ionicons name='chevron-forward-outline' size={20} color={'#165963'} />
                </View>

                <View style={styles.languageChangeContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='document-text-outline' size={20} color={'#165963'} style={{ marginLeft: 15 }} />
                        <Text style={{ fontSize: 12, color: '#165963', fontWeight: '500', marginLeft: 10 }}>
                            Tearms & Conditions
                        </Text>
                    </View>
                    <Ionicons name='chevron-forward-outline' size={20} color={'#165963'} />
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default MyAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60,
        backgroundColor: '#f7f6f2'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#165963'
    },
    description: {
        fontSize: 14,
        color: '#165963',
        marginTop: 15,
        paddingHorizontal: 10,
        textAlign: 'center',
        lineHeight: 18,
    },
    signInBtn: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#165963',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 99,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderColor: '#165963',
        textAlign: 'center'
    },
    custmerCareContainer: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between', // Pushes the chevron to the end
        alignItems: 'center', // Aligns items vertically
        marginTop: 25,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderBottomWidth: 0.2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 20,
    },
    languageChangeContainer: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between', // Pushes the chevron to the end
        alignItems: 'center', // Aligns items vertically
        marginLeft: 10,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 20,
    }
})