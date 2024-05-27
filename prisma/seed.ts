const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    const imagesUrl = [
      'https://utfs.io/f/a6e77633-56c8-4c14-9950-dc819ccf801d-17zdl.svg',
      'https://utfs.io/f/48a95837-022a-48bc-94b1-aeb1fbaa4da6-wubmh2.svg',
      'https://utfs.io/f/fa1c81b9-1341-4567-9f8f-f53a6645a875-vee837.svg',
      'https://utfs.io/f/d9ba7101-6db0-4918-b33d-d5c8c0c8f4cf-17km2t.svg',
      'https://utfs.io/f/ba3e76e3-e2da-4ab4-8448-550632f5b37f-1dbhkc.svg',
      'https://utfs.io/f/ecfe86c7-a0b7-46ef-afcb-9f375e6795c1-xicdzd.svg',
    ]

    // Nomes dos modelos
    const model = [
      'RS 5 Coupé',
      'Corvette Z06',
      'Panamera',
      'Huracan',
      'XC40',
      'Lancer Evo X',
    ]

    // Nomes das marcas
    const brands = [
      'Audi',
      'Chevrolet',
      'Porche',
      'Lamborghini',
      'Volvo',
      'Lancer',
    ]

    // Tipos de motor
    const motorTypes = ['Gasolina', 'Elétrico', 'Híbrido']

    // Tipos de cambio
    const Cambiumtype = ['Manual', 'Auto']

    const cars = [
      {
        name: brands[0],
        model: model[0],
        description:
          'Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.',
        price: 640,
        imageUrl: imagesUrl[0],
        speed: 270,
        up: 6,
        type: motorTypes[0],
        typeCambium: Cambiumtype[0],
        capacity: 5,
        strength: '280',
      },
      {
        name: brands[1],
        model: model[1],
        description:
          'Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.',
        price: 1.2,
        imageUrl: imagesUrl[1],
        speed: 290,
        up: 6,
        type: motorTypes[1],
        typeCambium: Cambiumtype[0],
        capacity: 2,
        strength: '300',
      },
      {
        name: brands[2],
        model: model[2],
        description:
          'Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.',
        price: 340,
        imageUrl: imagesUrl[2],
        speed: 350,
        up: 8,
        type: motorTypes[1],
        typeCambium: Cambiumtype[1],
        capacity: 5,
        strength: '320',
      },
      {
        name: brands[3],
        model: model[3],
        description:
          'Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.',
        price: 3.6,
        imageUrl: imagesUrl[3],
        speed: 400,
        up: 8,
        type: motorTypes[0],
        typeCambium: Cambiumtype[0],
        capacity: 2,
        strength: '380',
      },
      {
        name: brands[4],
        model: model[4],
        description:
          'Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.',
        price: 1.2,
        imageUrl: imagesUrl[4],
        speed: 270,
        up: 6,
        type: motorTypes[2],
        typeCambium: Cambiumtype[1],
        capacity: 7,
        strength: '300',
      },
      {
        name: brands[5],
        model: model[5],
        description:
          'Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.',
        price: 820,
        imageUrl: imagesUrl[5],
        speed: 340,
        up: 7,
        type: motorTypes[0],
        typeCambium: Cambiumtype[0],
        capacity: 5,
        strength: '320',
      },
    ]

    // Inserir os carros no banco de dados
    for (const car of cars) {
      await prisma.car.create({
        data: car,
      })
    }

    console.log('Carros inseridos com sucesso!')

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect()
  } catch (error) {
    console.error('Erro ao criar os carros:', error)
  }
}

seedDatabase()
