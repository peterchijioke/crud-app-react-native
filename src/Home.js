import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from './components/atom/Button';
import List from './components/List';
import Header from './components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {MODAL, UPDATE_MODAL} from '../sclice/crudSclice';
import AppModal from './components/AppModal';
import UpdateQuoteModal from './components/UpdateQuoteModal';

const Home = () => {
  const data = useSelector(state => state.quotes.quotes);
  let dispatch = useDispatch();
  let _renderList = ({item, _}) => <List item={item} />;

  let handleShowModal = () => {
    dispatch(MODAL(true));
  };
  let handleCloseModal = () => {
    dispatch(MODAL(false));
  };
  let handleCloseUpdateModal = () => {
    dispatch(UPDATE_MODAL(false));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
      <Header onPress={handleShowModal} />
      <FlatList
        data={data}
        renderItem={_renderList}
        keyExtractor={(_, i) => i.toString()}
      />
      <AppModal handleCloseModal={handleCloseModal} />
      <UpdateQuoteModal handleCloseUpdateModal={handleCloseUpdateModal} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 40,
    backgroundColor: 'tomato',
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginRight: 18,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
