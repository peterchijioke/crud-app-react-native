import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from './atom/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CreateQuote, UpdateQuote} from '../../util/Helpers';
import {useDispatch, useSelector} from 'react-redux';
import {UPDATE_MODAL} from '../../sclice/crudSclice';

const UpdateQuoteModal = ({handleCloseUpdateModal}) => {
  const showModal = useSelector(state => state.quotes.updateModalOpen);
  const loading = useSelector(state => state.quotes.loading);
  const placehoderData = useSelector(state => state.quotes.PlaceHolder);
  const [author, setAuthor] = useState();
  const [text, setText] = useState();
  const dispatch = useDispatch();
  let handleUpdateQuote = () => {
    let data = {
      text,
      author,
      id: placehoderData.id,
    };

    if (text && author) {
      UpdateQuote(dispatch, data);
    }
  };
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <Pressable
        onPress={handleCloseUpdateModal}
        style={{
          ...StyleSheet.absoluteFill,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />

      <View style={styles.modalCard}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginTop: 4,
            alignSelf: 'center',
            borderWidth: 1,
            padding: 5,
          }}>
          Update Quote
        </Text>
        <KeyboardAwareScrollView>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Author
              </Text>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#f1f1f1',
                  borderRadius: 5,
                }}>
                <TextInput
                  defaultValue={`${placehoderData?.author}`}
                  onChangeText={setAuthor}
                  style={{padding: 5, height: 50, color: 'black'}}
                />
              </View>
            </View>
          </View>

          {/*  AREA */}
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '100%',
              }}>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Quote
              </Text>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#f1f1f1',
                  borderRadius: 5,
                }}>
                <TextInput
                  onChangeText={setText}
                  multiline
                  defaultValue={`${placehoderData?.text}`}
                  numberOfLines={10}
                  style={{
                    textAlignVertical: 'top',
                    padding: 10,
                    color: 'black',
                  }}
                />
              </View>
            </View>
          </View>
          {!loading ? (
            <Button
              onPress={handleUpdateQuote}
              text={'Save'}
              textStyle={styles.btnText}
              style={styles.btn}
            />
          ) : (
            <ActivityIndicator
              style={{alignSelf: 'flex-end', marginRight: 20, marginTop: 20}}
              size={30}
              color={'tomato'}
            />
          )}
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default UpdateQuoteModal;

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
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalCard: {
    width: '90%',
    height: '60%',
    zIndex: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '30%',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
