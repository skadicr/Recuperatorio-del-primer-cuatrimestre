import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import { fontSize, radius, spacing } from '../styles/theme';

// Botón reutilizable. El tipo cambia su aspecto: 'primario', 'secundario' o 'peligro'.
export default function CustomButton({ titulo, onPress, tipo = 'primario' }) {
    return (
        <TouchableOpacity
            style={[
                styles.boton,
                tipo === 'secundario' && styles.secundario,
                tipo === 'peligro' && styles.peligro,
            ]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={[styles.texto, tipo === 'secundario' && styles.textoSecundario]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: colors.primario,
        paddingVertical: spacing.chico + 2,
        paddingHorizontal: spacing.medio,
        borderRadius: radius.chico,
        alignItems: 'center',
    },
    secundario: {
        backgroundColor: colors.tarjeta,
        borderWidth: 1,
        borderColor: colors.primario,
    },
    peligro: {
        backgroundColor: colors.peligro,
    },
    texto: {
        color: colors.blanco,
        fontWeight: '600',
        fontSize: fontSize.texto,
    },
    textoSecundario: {
        color: colors.primario,
    },
});
