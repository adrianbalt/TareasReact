
class TareasModel {

    constructor(key){
        this.key = key;
        this.tareas = this.store(key);
    }

    listarTareas(){
        return this.store(this.key).reverse();
    }

    agregarTarea(tarea){
        console.log("t:"+tarea);
        let tareas = this.store(this.key);
        this.tareas = tareas.concat({
			id: this.uuid(),
			tarea: tarea,
			completado: false
        });
        this.store(this.key, this.tareas);
    }

    actualizaTarea(id, nuevaTarea){
        let tareas = this.store(this.key);
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            if(tarea.id === id){
                tareas[i].tarea = nuevaTarea;
                this.store(this.key, tareas);
                break;
            }
        }
    }

    borrarTarea(id){
        let tareas = this.store(this.key);
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            if(tarea.id === id){
                tareas.splice(i,1);
                this.store(this.key, tareas);
                break;
            }
        }
    }

    borrarCompletados(){
        let tareas = this.store(this.key).filter((tarea)=>!tarea.completado);
        this.store(this.key, tareas);
    }

    toggleCompletarTarea(id){
        let tareas = this.store(this.key);
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            if(tarea.id === id){
                tareas[i].completado = !tareas[i].completado ;
                this.store(this.key, tareas);
                break;
            }
        }
    }

    uuid(){
        /*jshint bitwise:false */
        var i, random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                .toString(16);
        }

        return uuid;
    }

    store(namespace, data) {
        if (data) {
            return localStorage.setItem(namespace, JSON.stringify(data));
        }

        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
    }

    extend() {
        var newObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] = obj[key];
                }
            }
        }
        return newObj;
    }
    
} 

export default TareasModel;