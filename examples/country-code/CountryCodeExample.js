'use strict';

import Autocomplete from 'react-native-autocomplete-input';
import CountryCodes from './CountryCodes';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class CountryCodeExample extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  _findCountryCode(query) {
    if (query.length < 1) {
      return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return CountryCodes.filter(code => code.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const codes = this._findCountryCode(query);
    return (
      <View style={styles.container}>
        <Autocomplete
          onChangeText={text => this.setState({query: text})}
          data={codes.slice(0, 15)}
          renderItem={code => (
            <View style={styles.row}>
              <Text>{code.name}</Text>
              <Text style={styles.dialCodeText}>{code.dial_code}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    marginTop: 20,
  },
  row: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
  },
  dialCodeText: {
    flex: 1,
    textAlign: 'right',
  },
});

export default CountryCodeExample;
