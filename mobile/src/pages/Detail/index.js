import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
// import * as  MailComposer  from  'expo-mail-compositor';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();
    const routes = useRoute();

    const incidents = routes.params.incidents

    const messagem = `Olá ${incidents.name}, estou entrando em contato pois gostaria de ajudar no caso"${incidents.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incidents.value)}`

    function navigationBack() {
        navigation.goBack();
    };

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incidents.title}`,
            recipients: [incidents.email],
            body: messagem,
        })
    };
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incidents.whatsapp}&text=${messagem}`)
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incidents}>

                <Text style={[styles.incidentsProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentsValue}>{incidents.name} de {incidents.city}/{incidents.uf}</Text>

                <Text style={styles.incidentsProperty}>CASO:</Text>
                <Text style={styles.incidentsValue}>{incidents.title}</Text>

                <Text style={styles.incidentsProperty}>VALOR:</Text>
                <Text style={styles.incidentsValue}>
                    {Intl.NumberFormat('pt-BR', {
                    style:'currency',
                        currency:'BRL'
                        }).format(incidents.value)}
                </Text>

            </View>

            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>

                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}