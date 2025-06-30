import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <FontAwesomeIcon name="search" size={18} color={'#074e59'} />
            <Text style={styles.searchInput}>Search for flowers, gifts, and more</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>

        {/* Vertical Images */}
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
          <View style={{ position: 'relative' }}>
            <Image source={require('../../assets/explore_moments_img.webp')} style={{ width: 150, height: 180, borderRadius: 10 }} />
            <Text style={styles.imgInsideTxt}>
              Moments
            </Text>
          </View>
          <View style={{ position: 'relative' }}>
            <Image source={require('../../assets/explore_recipients_img.jpeg')} style={{ width: 150, height: 180, borderRadius: 10 }} />
            <Text style={styles.imgInsideTxt}>Recipients</Text>
          </View>
        </View>

        {/* Vertical Text container */}
        <View style={[styles.verticalTextContainer, { marginTop: 25 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: '#165963', marginLeft: 20, fontFamily: 'montas-regular' }}>
              Flowers & Plants
            </Text>
          </View>
          <Image source={require('../../assets/explore_flowers_plants_img.jpg')} style={{ width: 50, height: 60, marginRight: 10 }} />
        </View>

        <View style={[styles.verticalTextContainer, { marginTop: 3 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: '#165963', marginLeft: 20, fontFamily: 'montas-regular' }}>
              Flowers & Gifts
            </Text>
          </View>
          <Image source={require('../../assets/explore_flowers_gifts_img.jpg')} style={{ width: 50, height: 60, marginRight: 10 }} />
        </View>

        {/* Horizontal Images */}
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/explore_express_delivery_img.jpg')} style={{ width: 150, height: 120, borderRadius: 10 }} />
            <Text style={{ fontFamily: 'montas-regular', color: '#165963', marginTop: 10, fontSize: 18 }}>Express Delivery</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/explore_floral_subscription_img.jpeg')} style={{ width: 150, height: 120, borderRadius: 10 }} />
            <Text style={{ fontFamily: 'montas-regular', color: '#165963', marginTop: 10, fontSize: 18 }}>Floral Subscription</Text>
          </View>
        </View>

        {/* Brands You Love */}
        <View>
          <Text style={{ fontSize: 24, color: '#165963', marginLeft: 20, marginTop: 30, fontFamily: 'montas-regular' }}>
            Brands You Love
          </Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#f7f6f2'
  },
  title: {
    fontSize: 26,
    fontFamily: 'montas-regular',
    color: '#165963'
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignContent: 'center',
    padding: Platform.OS == 'ios' ? 12 : 8,
    borderRadius: 99,
    color: 'black',
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 12,
    width: '90%',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 50,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    paddingLeft: 10,
    textAlign: 'left',
    color: '#d5e0e1',
    fontSize: 12,
  },
  imgInsideTxt: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 10,
    fontFamily: 'montas-regular',
    fontSize: 18,
  },
  verticalTextContainer: {
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: '#ececec',
    borderRadius: 8,
    paddingVertical: 10
  },
})