import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

// custom
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta catch the all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" fantasy', rating: 3, body: 'lorem ipsum', key: '3' }
    ]);


    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='fade'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        // multiple styles
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                    />
                    <ReviewForm />
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },

    modalContent: {
        flex: 1
    }
});