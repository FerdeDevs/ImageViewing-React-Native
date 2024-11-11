import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-viewing';

const MyComponent = () => {
    // Liste des images à afficher dans le visionneur
    const images = [
        {
            uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
        },
        {
            uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
        },
        {
            uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
        },
    ];
    // État pour gérer la visibilité de la visionneuse
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Ouvrir l'image dans la visionneuse
    const openImageViewer = (index) => {
        setCurrentImageIndex(index);
        setIsVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text>Hi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, unde!</Text>
            {/* Affichage des images miniatures */}
            {images.map((image, index) => (
                <TouchableOpacity key={index} onPress={() => openImageViewer(index)}>
                    <Image source={{ uri: image.uri }} style={styles.thumbnail} />
                </TouchableOpacity>
            ))}

            {/* Visionneuse d'images */}
            <ImageViewer
                images={images}
                imageIndex={currentImageIndex}
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: 100,
        height: 100,
        margin: 10,
    },
});

export default MyComponent;
