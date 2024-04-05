import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GetNetworkStatus } from '../../util/network-status';
import { createTable, insertIntoTable, getTableValue } from '../../util/sqlite';
import { getApiData } from '../../util/network-call';
import { API_URL } from "../../util/constant";
import { registerBackgroundFetchTask, registerBackgroundFetchTask2 } from '../../util/background-call/BackgroundTasks';

export default function HomePage({ navigation }) {

  const [status, setStatus] = useState(true);
  const [records, setRecords] = useState([]);



  useEffect(() => {
    registerBackgroundFetchTask();
    registerBackgroundFetchTask2();
  }, []);


  useEffect(() => {
    GetNetworkStatus().then((status) => {
      if (typeof (status) === "object") {
        setStatus(status.isConnected);
      }
    }).catch(() => { })
  }, [status]);


  useEffect(() => {
    // console.log(status)
    if (status) {

      getApiData(API_URL).then((response) => {
        setRecords(response.products);
        insertNewRecord(JSON.stringify(response.products), 1);
      }).catch((error) => {
        console.log(error);
        getLocalRecord().then((result) => {
          // console.log(result)
          result.products ? setRecords(result.products) : setRecords(result);
        }).catch((error) => {
          console.log(error)
        });
      });
    } else {
      getLocalRecord().then((result) => {
        // console.log(result)
        result.products ? setRecords(result.products) : setRecords(result);
      }).catch((error) => {
        console.log(error)
      });
    }
  }, [status])

  const navigate = (item) => {
    navigation.navigate('setting', item);
  }

  const renderItems = (item) => {
    return (<Pressable onPress={() => navigate(item)}
      key={item.id + '' + new Date().getTime()} style={{ width: "93%", margin: 10, padding: 10, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, color: "#000", fontWeight: "700" }}>{item.title}</Text>
        <Text style={{ fontSize: 11, color: "#000" }}>{item.description}</Text>
      </View>
    </Pressable>)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        data={records}
        renderItem={({ item }) => {
          return renderItems(item)
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttonStyle: { backgroundColor: "black", borderRadius: 16, width: "90%", marginTop: 20 },
  textStyle: { color: "#FFF", padding: 10 }
});

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};


const insertNewRecord = (inName, value, result = []) => {
  createTable().then(() => {
    insertIntoTable(inName, value).then((result) => result);
  });
  return result;
}

const getLocalRecord = () => {
  return new Promise((resolve, _) => {
    createTable().then(() => {
      getTableValue().then((res) => {
        if (res && res.length > 0) {
          resolve(JSON.parse(res[0].name));
        }
      });
    });
  });
}
