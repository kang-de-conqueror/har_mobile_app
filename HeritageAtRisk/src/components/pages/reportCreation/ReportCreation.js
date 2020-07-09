import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {COLORS} from '../../common/Global';
import Header from './../../common/Header';
import Footer from './../../common/Footer';
import Camera from './Camera';

export default class ReportCreation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photosList: [],
    };
  }
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    extraData: PropTypes.object.isRequired,
  };

  render() {
    const buttonText = 'Continue';
    return (
      <View style={styles.container}>
        <Header
          navigation={this.props.navigation}
          onUserTokenChange={this.props.extraData.onUserTokenChange}
        />
        <View style={styles.flexContainer}>
          <Camera
            style={styles.frameCamera}
            photosList={this.state.photosList}
          />
          <View style={styles.framePhoto}>
            <FlatList
              // data={}
              // keyExtractor={item => item.report_id}
              horizontal={true}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.photoPlaceholder}>
                    <Icon
                      name={'camera'}
                      type="font-awesome"
                      color="#8F2227"
                      size={40}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.frameMap}></View>
        </View>
        <Footer navigation={this.props.navigation} buttonText={buttonText} />
      </View>
    );
  }
}

// class FlatListItems extends PureComponent {
//   render() {
//     return (
//       <View style={styles.photoPlaceholder}>
//         <Icon name={'camera'} type="font-awesome" color="#8F2227" size={40} />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_RED,
    height: '100%',
    padding: 8,
  },
  flexContainer: {
    flex: 1,
  },

  frameCamera: {
    flex: 4,
  },
  framePhoto: {
    flex: 1,
  },
  frameMap: {
    flex: 1,
    backgroundColor: 'pink',
  },
  photoPlaceholder: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#8F2227',
    borderRadius: 4,
    width: 80,
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 2,
    marginTop: 2,
    backgroundColor: 'green',
  },
});
