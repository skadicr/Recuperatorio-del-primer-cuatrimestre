import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { fontSize, spacing } from '../styles/theme';
import TaskCard from './TaskCard';

// Muestra la colección de tareas con FlatList. Cada elemento se dibuja con TaskCard.
export default function TaskList({ tareas, onToggle, onEditar, onEliminar }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={tareas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TaskCard
                        tarea={item}
                        onToggle={onToggle}
                        onEditar={onEditar}
                        onEliminar={onEliminar}
                    />
                )}
                ListEmptyComponent={
                    <Text style={styles.vacio}>
                        Todavía no hay tareas. Agregá la primera con el botón de arriba.
                    </Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vacio: {
        textAlign: 'center',
        marginTop: spacing.grande,
        fontSize: fontSize.texto,
        color: colors.textoSecundario,
    },
});
