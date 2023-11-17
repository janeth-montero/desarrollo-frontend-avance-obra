
export enum CasaEstatus {
  Disponible = 'Disponible',
  Vendida = 'Vendida',
  Apartada = 'Apartada',
  Negociacion = 'Negociación',
}

export interface Casa {
  id: number;
  modelo: string;
  imagen: string;
  estatus: CasaEstatus;
  notas: string;
  precioVenta: number;
  ubicacion: string;
  cliente: string;
  vendedor: string;
}



export const listaCasasDummy: Casa[] = [
  {
    id: 1000,
    estatus: CasaEstatus.Disponible,
    modelo: 'Casa Alfa',
    imagen: 'real-estate-1.jpg',
    notas: 'Notas sobre la casa 1',
    precioVenta: 2500000,
    ubicacion: 'Lote 1 Manzana 1',
    cliente: '',
    vendedor: '',
  },

  {
    id: 2000,
    estatus: CasaEstatus.Vendida,
    modelo: 'Casa Teta',
    imagen: 'real-estate-3.jpg',
    notas: 'Notas sobre la casa 2',
    precioVenta: 3500000,
    ubicacion: 'Lote 2 Manzana 1',
    cliente: 'Cliente 2',
    vendedor: 'Vendedor 0002',
  },

  {
    id: 3000,
    estatus: CasaEstatus.Apartada,
    modelo: 'Casa Beta',
    imagen: 'real-estate-2.jpg',
    notas: 'Notas sobre la casa 3',
    precioVenta: 3000000,
    ubicacion: 'Lote 3 Manzana 1',
    cliente: 'Cliente 3',
    vendedor: 'Vendedor 0002',
  },

  {
    id: 4000,
    estatus: CasaEstatus.Vendida,
    modelo: 'Casa Teta',
    imagen: 'real-estate-3.jpg',
    notas: 'Notas sobre la casa 3',
    precioVenta: 3500000,
    ubicacion: 'Lote 1 Manzana 2',
    cliente: 'Cliente 4',
    vendedor: 'Vendedor 0001',
  },

  {
    id: 5000,
    estatus: CasaEstatus.Negociacion,
    modelo: 'Casa Alfa',
    imagen: 'real-estate-1.jpg',
    notas: 'Notas sobre la casa 5',
    precioVenta: 2500000,
    ubicacion: 'Lote 2 Manzana 2',
    cliente: 'Cliente 5',
    vendedor: 'Vendedor 0001',
  },
];
