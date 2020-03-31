import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    async function loadIncidents() {
        const response = await api.get('incidents');

        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();

    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.incidentsList}
                keyExtractor={incidents => String(incidents.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incidents }) => (
                    <View style={styles.incidents}>
                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentsValue}>{incidents.name}</Text>

                        <Text style={styles.incidentsProperty}>CASO:</Text>
                        <Text style={styles.incidentsValue}>{incidents.title}</Text>

                        <Text style={styles.incidentsProperty}>Valor:</Text>
                        <Text style={styles.incidentsValue}>{incidents.value}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>

                    </View>
                )}
            />

        </View>

    );
}