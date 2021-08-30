import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import * as Font from "expo-font";

export default class LoginScreen extends Component<any, any> {
  constructor(props: { type: any }) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "viga-regular": require("../../assets/fonts/Viga-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.customHeader}>
          <Text style={styles.customTitle}>Bluemporium</Text>
        </View>
        <ScrollView style={{ width: "85%" }} showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <Image style={{ width: 216, height: 216 }} resizeMode="center" source={require("../../assets/illustrations/Login-cuate.png")} />
            <Text style={styles.subtitle}>Login to continue</Text>
            <View style={styles.form}>
              <Image style={styles.icon} source={require("../../assets/icons/email-fill.png")} />
              <TextInput style={{ width: "85%", paddingHorizontal: 16, fontSize: 16 }} placeholder="e.g johndoe@gmail.com" onFocus={() => this.setState({ isFormUsernameFocused: true })} onBlur={() => this.setState({ isFormUsernameFocused: false })} />
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableWithoutFeedback>
          <Text style={{ flex: 1, color: "#999" }}>
            Don't have an account? <Text style={{ color: "#004AA4" }}>Sign up.</Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customHeader: {
    width: "80%",
    height: 128,
  },
  customTitle: {
    marginTop: 72,
    fontFamily: "viga-regular",
    fontSize: 24,
  },
  innerContainer: {
    flex: 1,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#999",
  },
  form: {
    width: "100%",
    height: 48,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000",
    marginBottom: 24,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    tintColor: "#999",
  },
  btn: {
    backgroundColor: "#004AA4",
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
