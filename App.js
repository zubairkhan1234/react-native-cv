import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          {/* ------------------------------------------------------- */}

          <View style={{ display: 'flex', justifyContent: 'center' }}>
            <View style={{ width: '300px', height: 'auto', margin: 20, padding: '20px', boxShadow: '0px 5px 10px grey', borderRadius: '8px' }}>
              <Image
                source={require('./assets/zubair.jpg')}
                style={{ width: '100%', height: '350px', borderRadius: '10px' }}
              />
              <Text style={{ fontWeight: 'bold', }}>Muhammad Zubair</Text>
              <Text style={{ fontWeight: 'bold', }}>I'm full stack developer </Text>
            </View>

            {/* ---------------------------------------------- */}

            <View style={{ width: '300px', height: 'auto', margin: '20px', padding: '20px', boxShadow: '0px 5px 10px grey', borderRadius: '8px' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Persnol Data </Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Nationality  </Text>
                </View>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Pakistan</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>City </Text>
                </View>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Karachi </Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Martia Status </Text>
                </View>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Single </Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Place of Birth </Text>
                </View>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>Karachi </Text>
                </View>
              </View>
            </View>

            {/* ------------------------------------------- */}

            <View style={{ width: '300px', height: 'auto', margin: 20, padding: '20px', boxShadow: '0px 5px 10px grey', borderRadius: '8px' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Qualification </Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '100%' }}>
                  <Text style={{ fontWeight: 'bold', }}>2016 :  </Text>
                  <Text style={{ fontWeight: 'bold', }}>Matric form Matric board of karachi</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '100%' }}>
                  <Text style={{ fontWeight: 'bold', }}>2019 ; </Text>
                  <Text style={{ fontWeight: 'bold', }}>Inter (commerce) fron inter board of karaht </Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '100%' }}>
                  <Text style={{ fontWeight: 'bold', }}>B.Com</Text>
                  <Text style={{ fontWeight: 'bold', }}>Continue Study in B.Com from Univercity of karachi</Text>
                </View>
              </View>
            </View>

            {/* ------------------------------------------------------ */}

            <View style={{ width: '300px', height: 'auto', margin: 20, padding: '20px', boxShadow: '0px 5px 10px grey', borderRadius: '8px' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Skills </Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '40%' }}>
                  <Text style={{ fontWeight: 'bold', }}>1) HTML5  </Text>
                  <Text style={{ fontWeight: 'bold', }}>2) CSS3  </Text>
                  <Text style={{ fontWeight: 'bold', }}>3) JavaScript  </Text>
                  <Text style={{ fontWeight: 'bold', }}>4) React js  </Text>
                  <Text style={{ fontWeight: 'bold', }}>5) React Native  </Text>
                  <Text style={{ fontWeight: 'bold', }}>6) Express  </Text>
                  <Text style={{ fontWeight: 'bold', }}>7) Nodejs  </Text>
                  <Text style={{ fontWeight: 'bold', }}>8) Mongodb  </Text>
                </View>                
              </View>
            </View>

            {/* ----------------------------------------------------- */}

          </View>
        </View>
      </ScrollView>
    </>
  );
}



