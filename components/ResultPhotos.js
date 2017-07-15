import React from 'react';
import {ListView, View, Image} from 'react-native';
import styles from '../assets/styles'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default ({img})=> {
  return (
    <ListView
      horizontal={true}
      dataSource={ds.cloneWithRows(img)}
      renderRow={(img) =>
        <View style={styles.imageSmallContainer}>
          <Image
            style={styles.imageSmall}
            source = {{uri: img}}
          />
        </View>
      }
    />
  )
}
