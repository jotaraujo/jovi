export const FIRST_DATE = new Date('2026-04-26')

export const names = {
  him: 'Xuão',
  her: 'Vivian',
}

export const siteTitle = 'Jovi'

export const timeline = [
  {
    id: 'ilha-1',
    title: 'ILHA 1 — "O Ponto de Partida"',
    subtitle: 'Primeiro encontro',
    date: '26 de Abril de 2026',
    description:
      'Um fliperama. Fichas. Muita competitividade. E o início de algo que nenhum dos dois estava esperando exatamente naquele formato.',
    icon: '⚓',
    placeholder: false,
  },
  {
    id: 'ilha-2',
    title: 'ILHA 2 — "Mamma Jamma"',
    subtitle: 'Mesma noite',
    date: '26 de Abril de 2026',
    description:
      'Depois das máquinas, comida de verdade. A conversa que confirmou que aquilo não era só uma noite aleatória.',
    icon: '⚓',
    placeholder: false,
  },
  {
    id: 'ilha-3',
    title: 'ILHA 3 — "A Noite de Música"',
    subtitle: 'Seu aniversário',
    date: '09 de Maio de 2026',
    description: 'O dia que eu pude perceber que estava entrando de fato na sua vida. Onde eu jamais quero sair.',
    icon: '⚓',
    placeholder: false,
  },
]

export const postcards = [
  {
    id: 'fliperama',
    place: 'Fliperama',
    visited: true,
    note: 'Onde tudo começou. E onde provavelmente um dos dois perdeu vergonha primeiro.',
    imageSrc: '/flip.jpg',
  },
  {
    id: 'mamma-jamma',
    place: 'Mamma Jamma',
    visited: true,
    note: 'Jantar depois do fliperama. O momento em que ficou claro que daria pra fazer isso de novo.',
    imageSrc: '/mamma-jamma.jpg',
  },
  {
    id: 'karaoke',
    place: 'Karaokê - Aniversário dela',
    visited: true,
    note: 'O dia em que ela trouxe a família, os amigos, e por algum motivo também me trouxe. Eu cantei mal, me senti em casa, e entendi que a gente estava indo em alguma direção. Provavelmente a certa.',
    imageSrc: '/us.jpeg',
    imagePosition: 'center 20%', 
  },
  {
    id: 'japan',
    place: 'Japão',
    visited: false,
    note: 'A gente ainda não foi. Mas já decidimos que vamos juntos — e às vezes saber o destino importa mais do que a passagem.',
    imageSrc: '/japan.jpg',
  },
]

export const playlist = [
  { 
    id: 'track-1',
    track: "Don't Stop Believin'", 
    artist: 'Journey', 
    featured: true, 
    note: 'FAVORITA DELA — "Obviamente vai ser a primeira."',
    audioSrc: '/dont-stop-belivin.mp3'
  },
  { 
    id: 'track-2',
    track: "I Wanna Be Yours", 
    artist: 'Artic Monkeys', 
    featured: true, 
    note: 'Pega a indireta aí (ou direta)',
    audioSrc: '/i-wanna-be-yours.mp3'
  },
  { 
    id: 'track-3',
    track: "Get You", 
    artist: 'Daniel Caesar', 
    featured: true, 
    note: 'Sempre me lembra você.',
    audioSrc: '/get-you.mp3'
  },
  { 
    id: 'track-4',
    track: "Lonely Day", 
    artist: 'System of a Down', 
    featured: true, 
    note: 'Qualquer dia sem você é um dia solitário.',
    audioSrc: '/lonely-day.mp3'
  },
  { 
    id: 'track-5',
    track: "Seize The Day", 
    artist: 'Avenged Sevenfold', 
    featured: true, 
    note: 'Empty and cold without you here. Mas Você está aqui, e quero aproveitar cada momento.',
    audioSrc: '/seize-the-day.mp3'
  },
]

export const letter = {
  city: 'Rio de Janeiro',
  date: '26/05/2026',
  to: names.her,
  from: 'O capitão mais grudento desta rota',
  body: `Você claramente não leu os termos e condições antes de aceitar aquele encontro no fliperama.

Não tem como saber se foi a melhor ou pior decisão da sua vida — provavelmente os próximos meses vão responder isso. Mas um mês depois, com esse contador aí em cima ainda rodando, eu achei que valia registrar que aquela noite importou.

Importou o fliperama. Importou o Mamma Jamma. Importou a conversa que não precisou preencher silêncio nenhum.

Você é estranha do jeito certo. E eu sou grudento do jeito que você já sabe.

Que venham as próximas ilhas.`,
}

export const wanted = {
  him: {
    alias: 'The Clingy',
    name: names.him,
    bounty: '320.000.000',
    crime:
      'Ser romanticamente inconveniente em tempo recorde. Incapaz de não mandar bom dia.',
    photo: './him.jpg',
  },
  her: {
    alias: 'The Ironic',
    name: names.her,
    bounty: '480.000.000',
    crime:
      'Usar senso de humor como escudo emocional com eficiência perturbadora. Perigosa.',
    photo: './her.jpeg',
  },
}

export const footer = {
  quote: '"Ninguém nasce neste mundo para ficar sozinho."',
  quoteAuthor: '— Saul',
  tagline: 'Feito com muito sentimento e pouca objetividade.',
}
