export interface productOptions {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const productOptions = [
  {
    "label": "EL-2015",
    "value": "1",
    "model": [
      { "label": "Simples", "value": "1" },
      { "label": "Duplo", "value": "2" }
    ],
    "capacity": [
      { "label": "9 (T/H)", "value": "1" },
      { "label": "2x 9 (T/H)", "value": "2" },
    ],
    "dimension": [
      { "label": "10,0 M", "value": "1" },
      { "label": "18,0 M", "value": "2" },
    ]
  },
  {
    "label": "EL-5015",
    "value": "2",
    "model": [
      { "label": "Simples", "value": "1" },
      { "label": "Duplo", "value": "2" }
    ],
    "capacity": [
      { "label": "30 (T/H)", "value": "1", "dimension": [
        //parei aqui, dá para condicionar outra opção, um array dentro de um array que fica dentro de outro array
      ] },
      { "label": "40 (T/H)", "value": "2" },
      { "label": "60 (T/H)", "value": "3" },
      { "label": "2x 30 (T/H)", "value": "4" },
      { "label": "2x 40 (T/H)", "value": "5" },
      { "label": "2x 60 (T/H)", "value": "6" },
    ],
    "dimension": [
      { "label": "12,0 M", "value": "1" },
      { "label": "21,0 M", "value": "2" },
      { "label": "28,0 M", "value": "3" },
      { "label": "36,0 M", "value": "4" },
      { "label": "47,0 M", "value": "5" },
      { "label": "18,0 M", "value": "6" },
    ]
  },
  {
    "label": "EL-6018",
    "value": "3",
    "model": [
      { "label": "Convencional", "value": "3" },
      { "label": "Forçado", "value": "4" }
    ],
    "capacity": [
      { "label": "40 (T/H)", "value": "1" },
      { "label": "60 (T/H)", "value": "2" },
      { "label": "120 (T/H)", "value": "3" },
    ]
  },
  {
    "label": "EL-6023",
    "value": "4",
    "model": [
      { "label": "Convencional", "value": "3" },
      { "label": "Forçado", "value": "4" }
    ],
    "capacity": [
      { "label": "80 (T/H)", "value": "1" },
      { "label": "90 (T/H)", "value": "2" },
      { "label": "150 (T/H)", "value": "3" },
    ]
  },
  {
    "label": "EL-6028",
    "value": "5",
    "model": [
      { "label": "Convencional", "value": "3" },
      { "label": "Forçado", "value": "4" }
    ],
    "capacity": [
      { "label": "100 (T/H)", "value": "1" },
      { "label": "120 (T/H)", "value": "2" },
      { "label": "220 (T/H)", "value": "3" },
    ]
  },
  {
    "label": "EL-6034",
    "value": "6",
    "model": [
      { "label": "Convencional", "value": "3" },
      { "label": "Forçado", "value": "4" }
    ],
    "capacity": [
      { "label": "180 (T/H)", "value": "1" },
      { "label": "220 (T/H)", "value": "2" },
      { "label": "300 (T/H)", "value": "3" },
      { "label": "350 (T/H)", "value": "4" },
    ]
  },
  {
    "label": "EL-6040",
    "value": "7",
    "model": [
      { "label": "Convencional", "value": "3" },
      { "label": "Forçado", "value": "4" }
    ],
  },
  {
    "label": "EL-10060",
    "value": "8",
    "model": [
      { "label": "Convencional", "value": "3" },
      { "label": "Forçado", "value": "4" }
    ]
  }
]


export interface Data {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

//opções de produtos
// export const productOptions = [
//   { 
//     id: '1',
//     value: '1',
//     label: 'EL-2015',
//     model: [
//       { id: '1', value: '1', label: 'Simples', },
//       { id: '2', value: '2', label: 'Duplo', }
//     ]
//   },
//   { id: '1', value: '1', label: 'EL-5015' },
//   { id: '2', value: '2', label: 'EL-6018' },
//   { id: '2', value: '2', label: 'EL-6023' },
//   { id: '2', value: '2', label: 'EL-6028' },
//   { id: '2', value: '2', label: 'EL-6034' },
//   { id: '2', value: '2', label: 'EL-8040' },
//   { id: '2', value: '2', label: 'EL-10060' },
// ];


//opções de capacidade
export const capacityOptions: readonly Data[] = [
  { value: '180', label: '180 (T/H)' },
  { value: '220', label: '220 (T/H)' },
  { value: '300', label: '300 (T/H)' },
  { value: '350', label: '350 (T/H)' },
];

//opções de tamanho/altura/dimensão
export const dimensionOptions: readonly Data[] = [
  { value: '12,7xL15', label: '12,7 M' },
  { value: '18,7', label: '18,7 M' },
  { value: '24,2', label: '24,2 M' },
  { value: '31,7', label: '31,7 M' },
];

//opções de potência
export const potencyOptions: readonly Data[] = [
  { value: '15,0cv', label: '15,0cv' },
  { value: '20,0cv', label: '20,0cv' },
  { value: '25,0cv', label: '25,0cv' },
  { value: '30,0cv', label: '30,0cv' },
];



//ESTADOS DO BRASIL
// export interface StateOption {
//   readonly value: string;
//   readonly label: string;
// }

// export const stateOptions: readonly StateOption[] = [
//   { value: 'AC', label: 'Acre' },
//   { value: 'AL', label: 'Alagoas' },
//   { value: 'AP', label: 'Amapá' },
//   { value: 'AM', label: 'Amazonas' },
//   { value: 'BA', label: 'Bahia' },
//   { value: 'CE', label: 'Ceará' },
//   { value: 'DF', label: 'Distrito Federal' },
//   { value: 'ES', label: 'Espírito Santo' },
//   { value: 'GO', label: 'Goiás' },
//   { value: 'MA', label: 'Maranhão ' },
//   { value: 'MT', label: 'Mato Grosso' },
//   { value: 'MS', label: 'Mato Grosso do Sul' },
//   { value: 'MG', label: 'Minas Gerais' },
//   { value: 'PA', label: 'Pará' },
//   { value: 'PB', label: 'Paraíba' },
//   { value: 'PR', label: 'Pernambuco' },
//   { value: 'PE', label: 'Piauí' },
//   { value: 'PI', label: 'Rio de Janeiro' },
//   { value: 'RJ', label: 'Rio Grande do Norte' },
//   { value: 'RN', label: 'Rio Grande do Sul' },
//   { value: 'RS', label: 'Rondônia' },
//   { value: 'RO', label: 'Roraima ' },
//   { value: 'SC', label: 'Santa Catarina' },
//   { value: 'SP', label: 'São Paulo' },
//   { value: 'SE', label: 'Sergipe' },
//   { value: 'TO', label: 'Tocantins' },
// ];

// export const optionLength = [
//   { value: 1, label: 'general' },
//   {
//     value: 2,
//     label:
//       'Evil is the moment when I lack the strength to be true to the Good that compels me.',
//   },
//   {
//     value: 3,
//     label:
//       "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
//   },
// ];

// export const dogOptions = [
//   { id: 1, label: 'Chihuahua' },
//   { id: 2, label: 'Bulldog' },
//   { id: 3, label: 'Dachshund' },
//   { id: 4, label: 'Akita' },
// ];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }