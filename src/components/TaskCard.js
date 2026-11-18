import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { fontSize, radius, shadow, spacing } from '../styles/theme';
import CustomButton from './CustomButton';

// Solo muestra una tarea: los datos bajan por props y las acciones suben con callbacks.
export default function TaskCard({ tarea, onToggle, onEditar, onEliminar }) {
    return (
        <View style={[styles.card, tarea.completada && styles.cardCompletada]}>
            <Text style={[styles.badge, tarea.completada && styles.badgeCompletada]}>
                {tarea.completada ? 'Completada' : 'Pendiente'}
            </Text>
            <Text style={styles.titulo}>{tarea.titulo}</Text>
            <Text style={styles.descripcion}>{tarea.descripcion}</Text>

            <View style={styles.acciones}>
                <View style={styles.accion}>
                    <CustomButton
                        titulo={tarea.completada ? 'Reabrir' : 'Completar'}
                        onPress={() => onToggle(tarea.id)}
                    />
                </View>
                <View style={styles.accion}>
                    <CustomButton
                        titulo="Editar"
                        tipo="secundario"
                        onPress={() => onEditar(tarea)}
                    />
                </View>
                <View style={styles.accion}>
                    <CustomButton
                        titulo="Eliminar"
                        tipo="peligro"
                        onPress={() => onEliminar(tarea.id)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.tarjeta,
        borderRadius: radius.medio,
        padding: spacing.medio,
        marginBottom: 12,
        ...shadow,
    },
    cardCompletada: {
        backgroundColor: colors.exitoClaro,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: colors.pendienteClaro,
        color: colors.pendiente,
        fontSize: fontSize.badge,
        fontWeight: '700',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: radius.pastilla,
        marginBottom: 10,
    },
    badgeCompletada: {
        backgroundColor: colors.blanco,
        color: colors.exito,
    },
    titulo: {
        fontSize: fontSize.subtitulo,
        fontWeight: 'bold',
        color: colors.texto,
    },
    descripcion: {
        marginTop: spacing.chico,
        fontSize: fontSize.texto,
        color: colors.textoSecundario,
        lineHeight: 20,
    },
    acciones: {
        marginTop: spacing.medio,
        flexDirection: 'row',
        gap: spacing.chico,
    },
    accion: {
        flex: 1,
    },
});
