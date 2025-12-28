import {
  Wrench,
  Settings,
  ShieldCheck,
  UserCheck,
  Zap,
  BadgeCheck,
  DollarSign,
} from 'lucide-react'

export const services = [
  {
    id: 'instalacao',
    title: 'Instalação',
    shortDescription:
      'Precisão técnica para garantir o máximo desempenho e vida útil do seu equipamento.',
    fullDescription:
      'Realizamos a instalação de aparelhos de ar-condicionado de todos os modelos (Split, Multi-Split, Cassete, Piso Teto e VRF). Seguimos rigorosamente as normas técnicas dos fabricantes para garantir a validação da garantia. Nossa instalação inclui dimensionamento de carga térmica, infraestrutura elétrica e tubulação, vácuo no sistema e testes de rendimento.',
    icon: Wrench,
    image:
      'https://img.usecurling.com/p/800/600?q=ac%20installation%20technician',
    faqs: [
      {
        question: 'Quanto tempo demora a instalação?',
        answer:
          'Em média, uma instalação padrão leva de 3 a 5 horas, dependendo da complexidade do local.',
      },
      {
        question: 'A instalação inclui os materiais?',
        answer:
          'Sim, fornecemos até 3 metros de tubulação de cobre, isolamento térmico, cabos e suporte para a unidade externa.',
      },
      {
        question: 'Vocês emitem nota fiscal?',
        answer:
          'Sim, emitimos nota fiscal de serviço para todas as instalações, garantindo sua segurança e garantia do fabricante.',
      },
    ],
  },
  {
    id: 'manutencao-corretiva',
    title: 'Manutenção Corretiva',
    shortDescription:
      'Diagnóstico rápido e reparo eficiente para quando seu ar-condicionado para de funcionar.',
    fullDescription:
      'Seu ar-condicionado parou de gelar, está pingando ou fazendo barulho? Nossa equipe de manutenção corretiva está pronta para identificar e resolver o problema. Trabalhamos com troca de peças originais, recarga de gás refrigerante, reparo de placas eletrônicas e correção de vazamentos. Atendimento ágil para minimizar seu desconforto.',
    icon: Settings,
    image: 'https://img.usecurling.com/p/800/600?q=ac%20repair%20technician',
    faqs: [
      {
        question: 'Qual o valor da visita técnica?',
        answer:
          'O valor da visita varia conforme a localização. Entre em contato para um orçamento sem compromisso.',
      },
      {
        question: 'Vocês atendem emergências?',
        answer:
          'Sim, possuímos atendimento prioritário para casos urgentes, especialmente para empresas e servidores.',
      },
      {
        question: 'O conserto tem garantia?',
        answer:
          'Sim, oferecemos 90 dias de garantia sobre o serviço realizado e peças trocadas.',
      },
    ],
  },
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção Preventiva / PMOC',
    shortDescription:
      'Saúde, economia de energia e conformidade legal com o PMOC para empresas.',
    fullDescription:
      'A manutenção preventiva é essencial para garantir a qualidade do ar que você respira e reduzir o consumo de energia em até 30%. Realizamos limpeza química profunda, higienização de filtros e serpentinas, verificação de pressão do gás e componentes elétricos. Para empresas, elaboramos e implementamos o PMOC (Plano de Manutenção, Operação e Controle) conforme exigido pela Lei 13.589/2018.',
    icon: ShieldCheck,
    image: 'https://img.usecurling.com/p/800/600?q=clean%20air%20filter%20ac',
    faqs: [
      {
        question: 'O que é PMOC?',
        answer:
          'PMOC é o Plano de Manutenção, Operação e Controle, obrigatório por lei para todos os edifícios de uso público e coletivo climatizados.',
      },
      {
        question: 'Com que frequência devo fazer a limpeza?',
        answer:
          'Recomendamos a limpeza de filtros mensalmente e a higienização completa a cada 6 meses para residências, e conforme PMOC para empresas.',
      },
      {
        question: 'A limpeza ajuda na alergia?',
        answer:
          'Com certeza! A remoção de fungos e bactérias melhora significativamente a qualidade do ar, reduzindo crises alérgicas e respiratórias.',
      },
    ],
  },
]

export const features = [
  {
    title: 'Técnicos Certificados',
    description:
      'Nossa equipe passa por treinamentos constantes direto com os fabricantes.',
    icon: UserCheck,
  },
  {
    title: 'Atendimento Ágil',
    description: 'Pontualidade e rapidez para não deixar você no calor.',
    icon: Zap,
  },
  {
    title: 'Garantia de Serviço',
    description:
      'Segurança total com garantia de 90 dias a 1 ano em nossos serviços.',
    icon: BadgeCheck,
  },
  {
    title: 'Preço Justo',
    description: 'Orçamentos transparentes, sem surpresas na hora de pagar.',
    icon: DollarSign,
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Contato',
    description: 'Você entra em contato via WhatsApp ou Formulário.',
  },
  {
    step: 2,
    title: 'Orçamento',
    description: 'Avaliamos sua necessidade e enviamos uma proposta detalhada.',
  },
  {
    step: 3,
    title: 'Execução',
    description: 'Agendamos e realizamos o serviço com excelência.',
  },
  {
    step: 4,
    title: 'Suporte',
    description: 'Acompanhamos o pós-venda para garantir sua satisfação.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Ricardo Silva',
    role: 'Gerente de Loja',
    content:
      'Contratamos o PMOC para nossa loja e a diferença na qualidade do ar foi imediata. Equipe muito profissional e organizada.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
  },
  {
    id: 2,
    name: 'Ana Paula',
    role: 'Dona de Casa',
    content:
      'A instalação do meu Split ficou perfeita. Não deixaram sujeira nenhuma e explicaram tudo sobre o controle remoto. Recomendo!',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
  },
  {
    id: 3,
    name: 'Marcos Oliveira',
    role: 'Empresário',
    content:
      'Meu ar parou no verão e eles vieram no mesmo dia. O conserto foi rápido e o preço justo. Salvou meu escritório!',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
  },
  {
    id: 4,
    name: 'Juliana Costa',
    role: 'Arquiteta',
    content:
      'Sempre indico para meus clientes. O acabamento da instalação é impecável, o que é fundamental nos meus projetos.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=4',
  },
]
