import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: 50,
    backgroundColor: 'black',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  videoContainer: {
    width: 275,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPreview: {
    width: 275,
    height: 230,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 230,
    resizeMode: 'cover',
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 50,
  },
  right: {
    right: 30,
  },
  left: {
    left: 30,
  },
  fab: {
    backgroundColor: 'transparent',
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
