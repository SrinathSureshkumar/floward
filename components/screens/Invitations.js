import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Invitations = () => {

  const imageData = [
    require('../../assets/invitation_baaby_boy_welcome_img.jpg'),
    require('../../assets/invitation_baby_girl_welcome_img.jpg'),
    require('../../assets/invitation_baby_img.jpg'),
    require('../../assets/invitation_baby_reveal_img.jpg'),
    require('../../assets/invitation_birthday_img.jpeg'),
    require('../../assets/invitation_celebration_img.png'),
    require('../../assets/invitation_its_baby_girl_img.jpg'),
    require('../../assets/invitation_girl_baby_img.png'),
    require('../../assets/invitation_love_img.jpg'),
    require('../../assets/invitation_welcome_img.jpg'),
  ];

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth * 0.65;
  const itemSpacing = 10;

  return (
    <View style={{ flex: 1, backgroundColor: '#f7f6f2' }}>
      <View style={styles.container}>
        <Text style={{ color: 'white', fontSize: 30, fontFamily: 'montas-regular', }}>Floward Invites</Text>
        <Text style={{ color: 'white', fontSize: 15 }}>Beautiful, personalized e-invites in minutes</Text>
      </View>

      <ScrollView style={{ marginTop: -50 }}>
        <View style={styles.card}>
          <Text style={{ fontSize: 25, fontFamily: 'montas-regular', color: '#165963' }}>Upload your own design</Text>
          <Image source={require('../../assets/file_upload_img.png')} style={{ width: 60, height: 60, borderRadius: 10, marginTop: 30 }} resizeMode="contain" />
          <Text style={{ fontSize: 12, color: '#165963', marginTop: 30 }}>Already have a design? Upload it now to get started</Text>
          <Text style={styles.uploadBtn}>Upload Now</Text>
          <Text style={{ fontSize: 12, color: '#165963', marginTop: 10 }}>*Image max size:20MB(jpeg/png/pdf)</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontFamily: 'montas-regular', color: '#165963', marginTop: 20, textAlign: 'center' }}>Or</Text>
          <Text style={{ fontSize: 26, fontFamily: 'montas-regular', color: '#165963', marginTop: 10, textAlign: 'center' }}>Select from our designs</Text>

          <View style={{ flex: 1, backgroundColor: '#f7f6f2', marginTop: 10, marginBottom: 20 }}>
            <FlatList
              data={imageData}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + itemSpacing}
              decelerationRate="fast"
              contentContainerStyle={{ paddingHorizontal: 20 }}
              renderItem={({ item }) => (
                <View style={styles.imageWrapper}>
                  <Image
                    source={item}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#165963',
    paddingVertical: 75,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 0,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  uploadBtn: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#165963',
    borderStyle: 'solid',
    borderRadius: 99,
    paddingHorizontal: 30,
    paddingVertical: 20,
    textAlign: 'center',
    width: '100%'
  },
  imageWrapper: {
    width: Dimensions.get('window').width * 0.65,
    height: 300, // Reduced height for better balance
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Invitations;
