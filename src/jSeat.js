/**
 * Enum para os tipos de eventos
 */
jSeatTypes = {
    BUS : 'BUS',
    CAR : 'CAR',
    MOVIE_THEATER : 'MOVIE-THEATER',
    THEATER: 'THEATER'
}

/**
 * Inicializa uma posição
 */
class Position {
    constructor(x, y) {
        if(x == undefined || y == undefined)
            throw Exception("Para instanciar a posicao, informe o valor de X e de Y.");
        else {
            this.id = {
                xPosition: x,
                yPosition: y
            };            
            this.value = 0.0;
            this.title = '';
            this.description = 'Posicao X -> ' + x + ' | Posicao Y -> ' + y;
        }
    }
}

/**
 * Classe que representa todas as configuracoes de um evendo de controle de assentos
 */
class JSeat {
    constructor(id, type, xSeats, ySeats, hiddenPositions, selectedPositions, blockedPosition, timeoutOfBlock) {
        if (id !== undefined)
            this.id = id;
        else 
            throw Error("Necessario informar um id para o JSeat")
        if (type !== undefined)
            this.type = type;
        else
            this.type = jSeatTypes.MOVIE_THEATER;
        if (xSeats !== undefined)
            this.xSeats = xSeats;
        else
            this.xSeats = 10;
        if (ySeats !== undefined)
            this.ySeats = ySeats;
        else
            this.ySeats = 10;
        if (hiddenPositions !== undefined)
            this.hiddenPositions = hiddenPositions;
        else
            this. hiddenPositions = [];
        if (selectedPositions !== undefined)
            this.selectedPositions = selectedPositions;
        else
            this.selectedPositions = [];
        if (blockedPosition !== undefined)
            this.blockedPosition = blockedPosition;
        else
            this.blockedPosition = [];
        if (timeoutOfBlock !== undefined)
            this.timeoutOfBlock = timeoutOfBlock;
        else
            this.timeoutOfBlock = 600000;
    }

    log() {
        console.log(this);
    }

    /**
     * 
     * @param {Quantidade de linhas a serem adicionadas ao mapa} qtd 
     */
    addLine(qtd) {
        this.xSeats += qtd !== undefined ? qtd : 1;
    }

    /**
     * 
     * @param {Quantidade de linhas a serem removidas do mapa} qtd 
     */
    removeLine(qtd) {
        if(qtd !== undefined && this.xSeats < qtd) {
            throw Exception('Nao e possivel remover mais linhas que o existente');
        } else {
            this.xSeats -= qtd !== undefined ? qtd : 1;
        }
    }


    /**
     * 
     * @param {Quantidade de colunas a serem adicionadas ao mapa} qtd 
     */
    addColumn(qtd) {
        this.xSeats += qtd !== undefined ? qtd : 1;
    }
    
    /**
     * 
     * @param {Quantidade de colunas a serem removidas do mapa} qtd 
     */
    removeColumn(qtd) {
        if(qtd !== undefined && this.ySeats < qtd) {
            throw Exception('Nao e possivel remover mais linhas que o existente');
        } else {
            this.ySeats -= qtd !== undefined ? qtd : 1;
        }
    }

    /**
     * 
     * Verifica se existe a posicao do assento 
     * 
     * @param {Posição horizontal (Linha)} xPosition 
     * @param {Posição vertical (Coluna)} yPosition 
     */
    verifyIfExistis(xPosition, yPosition) {
        for(selected in this.selectedPositions) {
            let argPositions = id = { xPosition, yPosition }
            if(selected.id === argPositions) {
                console.log('Encontrou');
                return true;
            }
        }
        return false;
    }
    /**
     * 
     * Marca como inutilizado se o assento não estiver sido marcado
     * 
     * @param {Posição horizontal (Linha)} xPosition 
     * @param {Posição vertical (Coluna)} yPosition 
     */
    markHiddenSeat(xPosition, yPosition) {
        if(!this.verifyIfExistis(xPosition, yPosition))
            this.hiddenPositions.push(new Position(xPosition, yPosition));
        else
            throw Exception("Este assento já está marcado como invisível");
    }

}