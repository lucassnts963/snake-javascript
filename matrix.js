class Matrix {
    constructor(rows, cols){
        this.rows = rows
        this.cols = cols

        this.data = []

        for(let i = 0; i < rows; i++){
            let arr = []
            for(let j = 0; j < cols; j++){
                arr.push(0)
            }
            this.data.push(arr)
        }
    }

    //Funções Diversas
    static arrayToMatrix(arr){
        let matrix = new Matrix(arr.length, 1)
        matrix.map((elm, i, j) => {
            return arr[i]
        })

        return matrix
    }

    static MatrixToArray(obj){
        let arr = []
        obj.map((elm, i, j) => {
            arr.push(elm)
        })
        return arr
    }

    randomize(){
        this.map((elm, i, j) => {
            return Math.floor(Math.random() * (5-1)) + 1    
        })
    }

    print(){
        console.table(this.data)
    }

    map(func){
        this.data = this.data.map((arr, i) =>{
            return arr.map((num, j) => {
                return func(num, i, j)
            })
        })
        return this
    }

    //OPERAÇÕES MATRICIAIS

    //SOMA ENTRE DUAS MATRIZES
    static add(A, B){
        var matrix =  new Matrix(A.rows, A.cols)

        matrix.map((num, i, j) => {
            return A.data[i][j] + B.data[i][j]
        })

        return matrix
    }
    
    //SUBTRAÇÃO ENTRE DUAS MATRIZES
    static subtract(A, B){
        var matrix = new Matrix(A.rows, A.cols)

        matrix.map((num, i, j) => {
            return A.data[i][j] - B.data[i][j]
        })

        return matrix
    }

    //PRODUTO HADAMARD DE MATRIZES
    static subtract(A, B){
        var matrix = new Matrix(A.rows, A.cols)

        matrix.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j]
        })

        return matrix
    }

    //PRODUTO DE MATRIZES
    static multiply(A, B){
        if(A.cols !== B.rows){
            alert('O numero de colunas da Matriz A é diferente do numero de linhas da matriz B, portanto a operação não é possivel!')
            return
        }
        let matrix = new Matrix(A.rows, B.cols)

        matrix.map((num, i, j) => {
            let sum = 0
            for(let k = 0; k < A.cols; k++){
                let elm1 = A.data[i][k]
                let elm2 = B.data[k][j]
                sum += elm1 * elm2
            }

            return sum
        })

        return matrix
    }

    //MULTIPLICAÇÃO DE UMA MATRIZ POR UM ESCALAR
    static escalar_multiply(A, escalar){
        let matrix = new Matrix(A.rows, A.cols)
        
        matrix.map((num, i, j) => {
            return A.data[i][j] * escalar
        })

        return matrix
    }

    //MATRIZ TRANSPOSTA
    static transpose(A){
        let matrix = new Matrix(A.cols, A.rows)

        matrix.map((num, i, j) => {
            return A.data[j][i]
        })

        return matrix
    }
}