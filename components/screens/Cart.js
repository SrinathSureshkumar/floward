import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/cartImage.png')}
        style={{ width: '100%', height: 300 }} />
      <Text style={styles.cartEmptyTxt}>Your Cart is Empty!</Text>
      <Text style={styles.cartEmptyTxt2}>Looks like you haven't added anything to your cart yet.</Text>
      <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('HOME')}>
        <Text style={styles.submitBtnText}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#fff'
  },
  cartEmptyTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20
  },
  cartEmptyTxt2: {
    fontSize: 14,
    color: '#444',
    marginTop: 20
  },
  submitBtn: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: '#006782',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 35,
  },
  submitBtnText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
})