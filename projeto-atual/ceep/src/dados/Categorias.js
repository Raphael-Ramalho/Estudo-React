export default class Categorias{
    // colocar a fonte de dados em um arquivo separado do arquivo de renderização é uma boa prática. Os componentes que utilizarão a fonte devem ser inscritos e desescritos conforme a necessidade. Dessa forma, podemos renderizar apenas parte da aplicação.
    // Essa classe está sendo chamada no arquivo App.js que criou uma nova instância de categorias em seu constructor
    constructor(){
        this.categorias = []
        this._inscritos = []
    }
    
    inscrever(func){ 
        this._inscritos.push(func)
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter( f => f !== func)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.categorias))
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria)
        this.notificar()
    }
}


