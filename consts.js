export const BLOCK_SIZE = 20
export const BOARD_WIDTH = 14
export const BOARD_HEIGHT = 30
export const  COLORS = ["#323232", "yellow", "cyan", "purpule", "red", "green", "orange", "blue"]

export const EVENT_MOVEMENTS = {
  LEFT: 'ArrowLeft',
  DOWN: 'ArrowDown',
  RIGHT: 'ArrowRight'
}

export const PIECES = [
  [ // la pieza amarilla
    [1, 1],
    [1, 1]
  ],
  [ // cyan
    [2, 2, 2, 2]
  ],
  [ // es la pieza morado
    [0, 1, 0],
    [1, 1, 1]
  ],
  [ // la pieza roja
    [1, 1, 0],
    [0, 1, 1]
  ],
  [ // verde
    [0, 1, 1],
    [1, 1, 0]
  ],
  [ // naranja
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [ // azul marino
    [0, 1],
    [0, 1],
    [1, 1]
  ]
]
