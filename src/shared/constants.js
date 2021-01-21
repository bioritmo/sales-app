export const nameStorage = '@bioData';

const questions = {
	"questions": [
        {
            "category": "health",
            "question": "E aí, como anda sua rotina de atividades físicas?",
            "response_type": "unique_check",
            "responses": [
                {
                    "title": "Estou treinando",
                    "img": "img.jpg"
                }
            ]
		},
		{
			"category": "health",
			"question": "DE 0 A 10 COMO VOCÊ CLASSIFICA SEU NÍVEL DE ENERGIA",
			"response_type": "range",
			"responses": []
		},
		{
			"category": "health",
			"question": "DE 0 A 10 COMO VOCÊ CLASSIFICA SUA CONDIÇÃO FISICA",
			"response_type": "range",
			"responses": []
		},
		{
			"category": "health",
			"question": "QUAL O SEU PESO E ALTURA (IMC)?",
			"response_type": "range-calc",
			"responses": []
		},
		{
			"category": "challenge",
			"question": "QUAIS SÃO SEUS PRINCIPAIS DESAFIOS?)?",
			"response_type": "multi_check",
			"responses": [
                {
					"title": "Queimar gordura",
					"img": ""
				},
				{
					"title": "Ganhar musculo",
					"img": ""
				},
				{
					"title": "Entrar em forma",
					"img": ""
				},
				{
					"title": "Definir corpo",
					"img": ""
				},
				{
					"title": "Recuperar lesão",
					"img": ""
				},
				{
					"title": "Melhorar postura e flexibilidade",
					"img": ""
				},
				{
					"title": "Melhorar auto-estima e confiança",
					"img": ""
				},
				{
					"title": "desestressar",
					"img": ""
				}
			]
		},
		{
			"category": "modality",
			"question": "QUAIS SÃO AS 3 MODALIDADES QUE VOCÊ MAIS GOSTA DE FAZER ?",
			"response_type": "multi_check",
			"responses": [
                {
					"title": "Fazer musculação",
					"img": ""
				},
				{
					"title": "correr",
					"img": ""
				},
				{
					"title": "Pedalar",
					"img": ""
				},
				{
					"title": "Nadar",
					"img": ""
				},
				{
					"title": "Fazer yoga",
					"img": ""
				},
				{
					"title": "Fazer funcional",
					"img": ""
				},
				{
					"title": "Dançar",
					"img": ""
				},
				{
					"title": "Alongar",
					"img": ""
				}
			]
		},
		{
			"category": "muscle",
			"question": "Selecione os três grupos musculares que você mais quer desenvolver, em ordem de importância",
			"response_type": "multi_check",
			"responses": []
		}
	]
}

export const listUnity = [
	{
		acronym: 'PTA',
		description: 'Paulista',
	},
	{
		acronym: 'MOR',
		description: 'Morumbi',
	},
	{
		acronym: 'CON',
		description: 'Continental',
	},
	{
		acronym: 'WPZ',
		description: 'West Plaza',
	},
	{
		acronym: 'TAM',
		description: 'Tamboré',
	},
	{
		acronym: 'CEI',
		description: 'Itaú CE',
	},
	{
		acronym: 'CTO',
		description: 'Itaú CT',
	},
	{
		acronym: 'HIG',
		description: 'Higienópolis',
	},
	{
		acronym: 'CBE',
		description: 'Campo Belo',
	},
	{
		acronym: 'CCO',
		description: 'Cerro Corá',
	},
	{
		acronym: 'SAD',
		description: 'Santo André',
	},
	{
		acronym: 'SAN',
		description: 'Santana',
	},
	{
		acronym: 'CAT',
		description: 'Itaú CAT',
	},
	{
		acronym: 'STD',
		description: 'Santander',
	},
	{
		acronym: 'CHA',
		description: 'Chácara',
	},
	{
		acronym: 'SNU',
		description: 'Nações Unidas',
	},
	{
		acronym: 'MOE',
		description: 'Moema',
	},
	{
		acronym: 'ITA',
		description: 'Itaim',
	},
	{
		acronym: 'POR',
		description: 'Porto Seguro',
	},
	{
		acronym: 'ST3',
		description: 'Santander Radar',
	},
	{
		acronym: 'BAR',
		description: 'Shopping Metropolitano',
	},
	{
		acronym: 'MLV',
		description: 'Mercado Livre',
	},
	{
		acronym: 'MTW',
		description: 'Morumbi Town',
	},
	{
		acronym: 'PEP',
		description: 'Pepê',
	},
	{
		acronym: 'CDD',
		description: 'Bradesco',
	},
	{
		acronym: 'SCS',
		description: 'São Caetano',
	},
	{
		acronym: 'BEL',
		description: 'Belém',
	},
	{
		acronym: 'LIM',
		description: 'Limeira',
	},
	{
		acronym: 'PIR',
		description: 'Piracicaba',
	},
	{
		acronym: 'STS',
		description: 'Santos',
	},
];

export const LIST_UNITY_SORTED = listUnity.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0));