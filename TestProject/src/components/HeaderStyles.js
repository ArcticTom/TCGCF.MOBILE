import { FONT_NORMAL, WHITE } from '../styles/common';

//create header styling
const styles = {
  textStyle: {
    fontSize: 18,
    fontFamily: FONT_NORMAL,
    textAlign: 'center',
    textShadowColor: '#111',
    textShadowOffset: { width: 0.7, height: 0.7 },
    textShadowRadius: 3,
    color: WHITE,
    fontWeight: '500'
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3,
    position: 'relative',
    backgroundColor: '#eee'
  },
  imageViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 70
  },
  textViewStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 70
  }
};

export default styles;
