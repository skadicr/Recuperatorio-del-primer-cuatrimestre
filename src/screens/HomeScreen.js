import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import { guardarTareas, obtenerTareas } from '../services/storage';
import { colors } from '../styles/colors';
import { spacing } from '../styles/theme';

// Pantalla principal: posee el estado de las tareas y se encarga de mostrarlas.
export default function HomeScreen({ navigation }) {
    const [tareas, setTareas] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargarTareas = async () => {
        const tareasGuardadas = await obtenerTareas();
        setTareas(tareasGuardadas);
        setCargando(false);
    };

    // Carga las tareas guardadas una sola vez, al iniciar la pantalla.
    // Como las otras pantallas vuelven a Home con replace, Home se crea de nuevo
    // y vuelve a leer de AsyncStorage las tareas creadas o editadas.
    useEffect(() => {
        cargarTareas();
    }, []);

    // Guardado automático: cada vez que cambia el estado se guarda en AsyncStorage.
    // Se espera a terminar de cargar para no pisar los datos guardados con [].
    useEffect(() => {
        if (!cargando) {
            guardarTareas(tareas);
        }
    }, [tareas]);

    const cambiarEstado = (id) => {
        setTareas(
            tareas.map((t) =>
                t.id === id ? { ...t, completada: !t.completada } : t
            )
        );
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter((t) => t.id !== id));
    };

    const editarTarea = (tarea) => {
        navigation.replace('EditarTarea', { tarea });
    };

    if (cargando) {
        return (
            <View style={styles.centrado}>
                <ActivityIndicator />
            </View>
        );
    }

    const pendientes = tareas.filter((t) => !t.completada).length;
    const completadas = tareas.length - pendientes;

    return (
        <View style={styles.container}>
            <Header
                titulo="Mis tareas"
                subtitulo={`${pendientes} pendientes · ${completadas} completadas`}
            />
            <View style={styles.boton}>
                <CustomButton
                    titulo="Nueva tarea"
                    onPress={() => navigation.replace('NuevaTarea')}
                />
            </View>
            <TaskList
                tareas={tareas}
                onToggle={cambiarEstado}
                onEditar={editarTarea}
                onEliminar={eliminarTarea}
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
    centrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.fondo,
    },
    boton: {
        marginBottom: spacing.medio,
    },
});
