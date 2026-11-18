import { StyleSheet, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import { guardarTareas, obtenerTareas } from '../services/storage';
import { colors } from '../styles/colors';
import { spacing } from '../styles/theme';

// Pantalla para editar una tarea existente. Recibe la tarea por parámetros de navegación.
export default function EditTaskScreen({ navigation, route }) {
    const { tarea } = route.params || {};

    const guardarCambios = async ({ titulo, descripcion }) => {
        const tareas = await obtenerTareas();
        const tareasActualizadas = tareas.map((t) =>
            t.id === tarea.id ? { ...t, titulo, descripcion } : t
        );
        await guardarTareas(tareasActualizadas);
        navigation.replace('Home');
    };

    if (!tarea) {
        return (
            <View style={styles.container}>
                <Header titulo="Editar tarea" subtitulo="No se encontró la tarea a editar." />
                <CustomButton titulo="Volver" onPress={() => navigation.replace('Home')} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header titulo="Editar tarea" subtitulo="Modificá los datos de la tarea." />
            <TaskForm
                tareaInicial={tarea}
                textoBoton="Guardar cambios"
                onGuardar={guardarCambios}
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
