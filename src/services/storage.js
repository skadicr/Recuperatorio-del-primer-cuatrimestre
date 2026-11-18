import AsyncStorage from '@react-native-async-storage/async-storage';

const CLAVE_TAREAS = 'tareas';

// AsyncStorage solo guarda texto, por eso el array se convierte con JSON.stringify
export const guardarTareas = async (tareas) => {
    try {
        await AsyncStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
    } catch (error) {
        console.log(error);
    }
};

// Si hay tareas guardadas se convierten de nuevo a array con JSON.parse;
// si no hay nada (null) se devuelve un array vacío para no romper la app.
export const obtenerTareas = async () => {
    try {
        const tareas = await AsyncStorage.getItem(CLAVE_TAREAS);
        return tareas ? JSON.parse(tareas) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
};
