import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import { guardarTareas, obtenerTareas } from '../services/storage';
import { colors } from '../styles/colors';
import { spacing } from '../styles/theme';

// Pantalla para crear una tarea nueva.
export default function AddTaskScreen({ navigation }) {
    const crearTarea = async ({ titulo, descripcion }) => {
        const tareas = await obtenerTareas();
        const nuevaTarea = {
            id: Date.now(),
            titulo,
            descripcion,
            completada: false,
        };
        await guardarTareas([...tareas, nuevaTarea]);
        navigation.replace('Home');
    };

    return (
        <View style={styles.container}>
            <Header titulo="Nueva tarea" subtitulo="Completá los datos de la tarea." />
            <TaskForm
                textoBoton="Guardar tarea"
                onGuardar={crearTarea}
                onCancelar={() => navigation.replace('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fondo,
        padding: spacing.medio,
    },
});
