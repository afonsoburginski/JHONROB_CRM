export interface productOptions {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

export const products = [
  {
    id: 1,
    title: 'Produto A',
    models: [
      {
        id: 1,
        title: 'Simples',
        capacities: [
          {
            id: 1,
            title: 'Capacidade 1',
            heights: [
              {
                id: 1,
                title: 'Altura 1',
                power: '15,0cv',
              },
            ],
          },
          {
            id: 2,
            title: 'Capacidade 2',
            heights: [
              {
                id: 2,
                title: 'Altura 2',
                power: '15,0cv',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Duplo',
        capacities: [
          {
            id: 3,
            title: 'Capacidade 3',
            heights: [
              {
                id: 3,
                title: 'Altura 3',
                power: '15,0cv',
              },
            ],
          },
          {
            id: 4,
            title: 'Capacidade 4',
            heights: [
              {
                id: 4,
                title: 'Altura 4',
                power: '15,0cv',
              },
            ],
          },
        ],
      },
    ],
  },
  // Adicione mais produtos conforme necessário
];

export const inputsAndOutputs = [
  {
    id: 1,
    title: 'Entrada 1',
    type: 'input',
  },
  {
    id: 2,
    title: 'Entrada 2',
    type: 'input',
  },
  {
    id: 3,
    title: 'Saída 1',
    type: 'output',
  },
  {
    id: 4,
    title: 'Saída 2',
    type: 'output',
  },
  // Adicione mais entradas e saídas conforme necessário
];

  

  
  // export const productOptions = [
  //   {
  //     "label": "EL-2015",
  //     "value": "1",
  //     "model": [
  //       { "label": "Simples", "value": "1" },
  //       { "label": "Duplo", "value": "2" }
  //     ],
  //     "capacity": [
  //       { "label": "9 (T/H)", "value": "1" },
  //       { "label": "2x 9 (T/H)", "value": "2" },
  //     ],
  //     "dimension": [
  //       { "label": "10,0 M", "value": "1" },
  //       { "label": "18,0 M", "value": "2" },
  //     ]
  //   },
  //   {
  //     "label": "EL-5015",
  //     "value": "2",
  //     "model": [
  //       { "label": "Simples", "value": "1" },
  //       { "label": "Duplo", "value": "2" }
  //     ],
  //     "capacity": [
  //       { "label": "30 (T/H)", "value": "1", },
  //       { "label": "40 (T/H)", "value": "2" },
  //       { "label": "60 (T/H)", "value": "3" },
  //       { "label": "2x 30 (T/H)", "value": "4" },
  //       { "label": "2x 40 (T/H)", "value": "5" },
  //       { "label": "2x 60 (T/H)", "value": "6" },
  //     ],
  //     "dimension": [
  //       { "label": "12,0 M", "value": "1" },
  //       { "label": "21,0 M", "value": "2" },
  //       { "label": "28,0 M", "value": "3" },
  //       { "label": "36,0 M", "value": "4" },
  //       { "label": "47,0 M", "value": "5" },
  //       { "label": "18,0 M", "value": "6" },
  //     ]
  //   },
  //   {
  //     "label": "EL-6018",
  //     "value": "3",
  //     "model": [
  //       { "label": "Convencional", "value": "3" },
  //       { "label": "Forçado", "value": "4" }
  //     ],
  //     "capacity": [
  //       { "label": "40 (T/H)", "value": "1" },
  //       { "label": "60 (T/H)", "value": "2" },
  //       { "label": "120 (T/H)", "value": "3" },
  //     ]
  //   },
  //   {
  //     "label": "EL-6023",
  //     "value": "4",
  //     "model": [
  //       { "label": "Convencional", "value": "3" },
  //       { "label": "Forçado", "value": "4" }
  //     ],
  //     "capacity": [
  //       { "label": "80 (T/H)", "value": "1" },
  //       { "label": "90 (T/H)", "value": "2" },
  //       { "label": "150 (T/H)", "value": "3" },
  //     ]
  //   },
  //   {
  //     "label": "EL-6028",
  //     "value": "5",
  //     "model": [
  //       { "label": "Convencional", "value": "3" },
  //       { "label": "Forçado", "value": "4" }
  //     ],
  //     "capacity": [
  //       { "label": "100 (T/H)", "value": "1" },
  //       { "label": "120 (T/H)", "value": "2" },
  //       { "label": "220 (T/H)", "value": "3" },
  //     ]
  //   },
  //   {
  //     "label": "EL-6034",
  //     "value": "6",
  //     "model": [
  //       { "label": "Convencional", "value": "3" },
  //       { "label": "Forçado", "value": "4" }
  //     ],
  //     "capacity": [
  //       { "label": "180 (T/H)", "value": "1" },
  //       { "label": "220 (T/H)", "value": "2" },
  //       { "label": "300 (T/H)", "value": "3" },
  //       { "label": "350 (T/H)", "value": "4" },
  //     ]
  //   },
  //   {
  //     "label": "EL-6040",
  //     "value": "7",
  //     "model": [
  //       { "label": "Convencional", "value": "3" },
  //       { "label": "Forçado", "value": "4" }
  //     ],
  //   },
  //   {
  //     "label": "EL-10060",
  //     "value": "8",
  //     "model": [
  //       { "label": "Convencional", "value": "3" },
  //       { "label": "Forçado", "value": "4" }
  //     ]
  //   }
  // ]
  
  