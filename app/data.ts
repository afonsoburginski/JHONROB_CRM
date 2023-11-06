export interface Data {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

//opções de produtos
export const productOptions: readonly Data[] = [
  { value: 'el-2015', label: 'EL-2015' },
  { value: 'el-5015', label: 'EL-5015' },
  { value: 'el-6018', label: 'EL-6018' },
  { value: 'el-6023', label: 'EL-6023' },
  { value: 'el-6028', label: 'EL-6028' },
  { value: 'el-6034', label: 'EL-6034' },
  { value: 'el-8040', label: 'EL-8040' },
  { value: 'el-10060', label: 'EL-10060' },
];

//opções de modelo
export const modelOptions: readonly Data[] = [
  { value: 'simple', label: 'Simples', isFixed: true },
  { value: 'duplo', label: 'Duplo', isFixed: true },
  { value: 'convetional', label: 'Convecional', isFixed: true },
  { value: 'closed', label: 'Forçado', isFixed: true },
];

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

//opções de cores
export const colourOptions: readonly Data[] = [
  { value: 'ocean', label: 'Ocean', isFixed: true },
  { value: 'blue', label: 'Blue', isDisabled: true },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];


//ESTADOS DO BRASIL
export interface StateOption {
  readonly value: string;
  readonly label: string;
}

export const stateOptions: readonly StateOption[] = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão ' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Pernambuco' },
  { value: 'PE', label: 'Piauí' },
  { value: 'PI', label: 'Rio de Janeiro' },
  { value: 'RJ', label: 'Rio Grande do Norte' },
  { value: 'RN', label: 'Rio Grande do Sul' },
  { value: 'RS', label: 'Rondônia' },
  { value: 'RO', label: 'Roraima ' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

export const optionLength = [
  { value: 1, label: 'general' },
  {
    value: 2,
    label:
      'Evil is the moment when I lack the strength to be true to the Good that compels me.',
  },
  {
    value: 3,
    label:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
  },
];

export const dogOptions = [
  { id: 1, label: 'Chihuahua' },
  { id: 2, label: 'Bulldog' },
  { id: 3, label: 'Dachshund' },
  { id: 4, label: 'Akita' },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ProductOption[] | readonly FlavourOption[];
  readonly options: readonly ColourOption[] | readonly FlavourOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'Products',
    options: productOptions,
  },
  {
    label: 'Colours',
    options: colourOptions,
  },
];
