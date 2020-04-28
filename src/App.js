/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import {Container} from 'native-base';
import {AdMobBanner} from 'react-native-admob';

import PdfView from './pages/PdfView';
import ListView from './pages/ListView';

import Header from './components/Header';

const App = () => {
  const [uri, setUri] = useState();
  const [displayAd, setDisplayAd] = useState(true);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    return () =>
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
  });

  const handleBackButtonClick = () => {
    if (uri) {
      setUri('');
      return true;
    } else {
      BackHandler.exitApp();
    }
  };

  const handleAdFail = (error) => {
    console.log(error);
    setDisplayAd(false);
  };

  return (
    <Container>
      <Header uri={uri} setUri={setUri} />
      {uri ? <PdfView uri={uri} /> : <ListView setUri={setUri} />}
      <View style={{display: displayAd ? 'flex' : 'none'}} />
      <KeepAwake />
      <AdMobBanner
        adUnitID="ca-app-pub-6276165008934154/9035580599"
        style={{height: 70}}
        didFailToReceiveAdWithError={handleAdFail}
        onAdFailedToLoad={handleAdFail}
        adViewDidReceiveAd={() => setDisplayAd(true)}
      />
    </Container>
  );
};

export default App;
