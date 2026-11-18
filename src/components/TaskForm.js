import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../styles/colors';
import { fontSize, radius, shadow, spacing } from '../styles/theme';
import CustomButton from './CustomButton';

// Formulario reutilizable para crear y para editar una tarea.
// Si recibe tareaInicial, los campos arrancan con sus datos (modo edición).
export default function TaskForm({ tareaInicial, textoBoton, onGuardar, onCancelar }) {
    const [titulo, setTitulo] = useState(tareaInicial ? tareaInicial.titulo : '');
    const [descripcion, setDescripcion] = useState(tareaInicial ? tareaInicial.descripcion : '');
    const [mensaje, setMensaje] = useState('');

    const validarYGuardar = () => {
        if (titulo.trim().length < 3) {
            setMensaje('El título debe tener al menos 3 caracteres.');
            return;
        }
        if (!descripcion.trim()) {
            setMensaje('La descripción no puede estar vacía.');
            return;
        }
        setMensaje('');
        onGuardar({ titulo: titulo.trim(), descripcion: descripcion.trim() });
    };

    return (
        <View style={styles.card}>
            <Text style={styles.etiqueta}>Título</Text>
            <TextInput
                placeholder="Ej: Comprar leche"
                value={titulo}
                onChangeText={setTitulo}
                style={styles.input}
            />

            <Text style={styles.etiqueta}>Descripción</Text>
            <TextInput
                placeholder="Ej: Pasar por el supermercado"
                value={descripcion}
                onChangeText={setDescripcion}
                style={styles.input}
            />

            {mensaje ? <Text style={styles.error}>{mensaje}</Text> : null}

            <View style={styles.botones}>
                <View style={styles.boton}>
                    <CustomButton titulo="Cancelar" tipo="secundario" onPress={onCancelar} />
                </View>
                <View style={styles.boton}>
                    <CustomButton titulo={textoBoton} onPress={validarYGuardar} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.tarjeta,
        borderRadius: radius.medio,
        padding: spacing.grande,
        ...shadow,
    },
    etiqueta: {
        fontSize: fontSize.texto,
        fontWeight: '600',
        color: colors.texto,
        marginBottom: spacing.chico,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.borde,
        borderRadius: radius.chico,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: fontSize.input,
        backgroundColor: colors.blanco,
        marginBottom: spacing.medio,
    },
    error: {
        color: colors.peligro,
        fontSize: fontSize.texto,
        marginBottom: spacing.medio,
    },
    botones: {
        flexDirection: 'row',
        gap: spacing.chico,
    },
    boton: {
        flex: 1,
    },
});
