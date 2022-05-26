import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  
} from "react-native";
import styles from "./UniversitiesStyle";
import database from "@react-native-firebase/database";
import React, { useState, useEffect, Component } from "react";
let itemsRefUsers = database().ref("/Users/");
let itemsRef = database().ref("/university-listing-data/");

export default class Universities extends Component {
  state = {
    show: false,
    data: [],
    universities: [],

    filters: [
      {
        title: "Fee",
      },
      {
        title: "Ranking",
      },
      {
        title: "Merit",
      },
      {
        title: "Type",
      },
      {
        title: "Admission",
      },
      {
        title: "Status",
      },
      {
        title: "Admission",
      },
      {
        title: "Status",
      },
      {
        title: "Location",
      },
    ],

    
  };

  createUsers(){
    itemsRefUsers.
    set([{
      name: 'admin',
      pass: 'admin',
    },{
      name: 'test2',
      pass: 'test2',
    }
  ])
    .then(() => console.log('Data set.'));
    
  }
 

  componentDidMount() {
      itemsRef.on("value", (snapshot) => {
          this.setState({universities:snapshot.val()})
        })
    console.log("componentDidMount");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.universitiesWrapper}>
         
          
          <FlatList
            data={this.state.universities}
            renderItem={({ item }) => (
              <View
                key={item.key}
                style={styles.singleUniversity}
                elevation={5}
              >
                <View style={styles.rankingTextWrapper}>
                  <Text style={styles.rankingText}>Ranking {item.ranking}</Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("SingleUniversity")
                  }
                >
                  <View style={{ flex: 0.85, flexDirection: "row" }}>
                    <View style={styles.imageWrapper}>
                      <Image
                        style={{
                          height: "75%",
                          width: "100%",
                          borderRadius: 50,
                          marginLeft: 5,
                        }}
                        source={require("./logo.png")}
                      />
                    </View>
                    <View style={styles.universityDetailWrapper}>
                      <Text
                        style={[
                          styles.universityDetailText,
                          styles.usiversityName,
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text style={styles.universityDetailText}>
                        Fee : {item.fee}
                      </Text>
                      {/* <Text style={styles.universityDetailText}>Admission : {item.detail.admission}</Text> */}

                      <View style={styles.locAndPhoneWrapper}>
                        <Text style={styles.universityDetailText}>
                          Location : {item.location}
                        </Text>
                        {/* <Text style={styles.phone}>Phone</Text> */}
                      </View>
                      <Text
                        style={[
                          styles.universityDetailText,
                          styles.DeadlineText,
                        ]}
                      >
                        Deadline : {item.deadline}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            // ItemSeparatorComponent={() => <Separator />}
          />
        </View>
       
      </SafeAreaView>
    );
  }
}
