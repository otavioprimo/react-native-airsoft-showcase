import { StyleSheet } from 'react-native';
import Colors from '../../util/Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundApp,
  },
  input: {
    color: '#222',
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 4,
    marginBottom: 16,
    marginTop: 32
  },
});

const buttons = StyleSheet.create({
  btnEnviar: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 4
  }
})

const texts = StyleSheet.create({
  btnEnviar: {
    fontWeight: 'bold',
    color: '#222'
  }
});

export {
  styles,
  texts,
  buttons
}