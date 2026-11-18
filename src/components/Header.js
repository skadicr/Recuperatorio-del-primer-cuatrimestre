import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { fontSize, spacing } from '../styles/theme';

// Encabezado reutilizable de cada pantalla: título y subtítulo opcional.
export default function Header({ titulo, subtitulo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.medio,
    },
    titulo: {
        fontSize: fontSize.titulo,
        fontWeight: '700',
        color: colors.texto,
    },
    subtitulo: {
        marginTop: 4,
        fontSize: fontSize.texto,
        color: colors.textoSecundario,
    },
});
