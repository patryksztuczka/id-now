import { useFonts } from 'expo-font';
import React, { FC, useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';

import { styles } from './DocumentCard.styles';
import { IDocumentCardProps } from './DocumentCard.types';
import { useAppDispatch } from '../../hooks/useRedux';
import { setDocument } from '../../redux/features/imageSlice';

const DocumentCard: FC<IDocumentCardProps> = ({ document, pickImage, goToCamera }) => {
  const [fontsLoaded] = useFonts({
    'DM Sans 700': require('../../assets/fonts/DMSans-Bold.ttf'),
    'DM Sans 500': require('../../assets/fonts/DMSans-Medium.ttf'),
    'DM Sans 400': require('../../assets/fonts/DMSans-Regular.ttf'),
  });

  const dispatch = useAppDispatch();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { title, subtitle } = document;

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleMakePhoto = () => {
    dispatch(setDocument(document));
    goToCamera();
    togglePopup();
  };

  const handlePickImage = () => {
    dispatch(setDocument(document));
    pickImage();
    togglePopup();
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.documentCardWrapper}>
      <ImageBackground
        source={require('../../assets/images/card-background.png')}
        style={styles.backgroundImage}
        imageStyle={{
          borderRadius: 20,
        }}>
        <Image
          source={require('../../assets/images/poland-emblem.png')}
          style={styles.emblemImage}
        />
        <View style={styles.header}>
          <View style={styles.headerTextSection}>
            <Text
              style={{
                ...styles.title,
                fontFamily: 'DM Sans 700',
              }}>
              {title}
            </Text>
            <Text
              style={{
                ...styles.subtitle,
                fontFamily: 'DM Sans 400',
              }}>
              {subtitle}
            </Text>
          </View>
          <View>
            <Image
              source={require('../../assets/images/poland-flag.png')}
              style={styles.flagImage}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.makePhotoButton} onTouchEnd={togglePopup}>
            <Text style={{ ...styles.buttonText, fontFamily: 'DM Sans 500' }}>Wybierz</Text>
          </View>
          {isPopupVisible ? (
            <View style={styles.popupWrapper}>
              <Pressable onTouchEnd={handleMakePhoto}>
                <Text
                  style={{
                    ...styles.popupOption,
                    fontFamily: 'DM Sans 500',
                  }}>
                  Zrób zdjęcie
                </Text>
              </Pressable>
              <Pressable onTouchEnd={handlePickImage}>
                <Text
                  style={{
                    ...styles.popupOption,
                    fontFamily: 'DM Sans 500',
                  }}>
                  Wybierz z galerii
                </Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

export default DocumentCard;
