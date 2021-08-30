export default class Categorias{
    // colocar o "banco de dados" em um arquivo separado do componente é uma boa prática. Os componentes que utilizarão o BD devem ser inscritos e desescritos conforme a necessidade. Dessa forma, podemos renderizar apenas parte da aplicação.
    // Essa classe está sendo chamada no arquivo App.js que criou uma nova instância de categorias em seu constructor
    constructor(){
        this.categorias = []
        this._inscritos = []
    }
    
    inscrever(func){ 
        this._inscritos.push(func)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.categorias))
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}


