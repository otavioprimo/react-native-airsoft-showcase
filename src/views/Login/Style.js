import { StyleSheet } from 'react-native';
import Colors from '../../util/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundApp,
  },
  card: {
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 4,

  },
  input: {
    color: '#222',
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 4,
    marginBottom: 4
  },
  containerButtons: {
    flexDirection: 'row'
  }
});

const images = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
    // marginTop: -32
  }
})

const texts = StyleSheet.create({
  buttons: {
    color: '#222',
    fontWeight: 'bold'
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 16
  }
});

const buttons = StyleSheet.create({
  actions: {
    backgroundColor: '#fff',
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 4
  },
  forgotPassword:{
    marginTop: 24,
    marginBottom: 32
  }
});

export {
  styles,
  texts,
  images,
  buttons
}