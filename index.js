import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './App';
import trackPlayerService from './trackPlayerService';

AppRegistry.registerComponent('main', () => App);
TrackPlayer.registerPlaybackService(() => trackPlayerService);
