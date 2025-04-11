import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: '1',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'Test Song',
        artist: 'SoundHelix',
      });
    };
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Play" onPress={() => TrackPlayer.play()} />
      <Button title="Pause" onPress={() => TrackPlayer.pause()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
});
