export const HEALTH_QUESTIONS = {
  "questions": 
    [
      {
        "id": 1,
        "category": "health",
        "question": "E aí, como anda sua rotina de atividades físicas?",
        "response_type": "unique_check",
        "responses": [
          {
            "id": 1,
            "title": "Estou treinando",
            "icon": ""
          },
          {
            "id": 2,
            "title": "Treino esporadicamente",
            "icon": ""
          },
          {
            "id": 3,
            "title": "Não estou treinando",
            "icon": ""
          },
          {
            "id": 4,
            "title": "Nunca treinei",
            "icon": ""
          }
        ]
      },
      {
        "id": 2,
			  "category": "health",
			  "question": "Altura",
			  "response_type": "range",
			  "responses": [250, 10]
      },
      {
        "id": 3,
			  "category": "health",
			  "question": "Peso",
			  "response_type": "range",
			  "responses": [250, 10]
      },
		  {
        "id": 4,
			  "category": "health",
			  "question": "NÍVEL DE ENERGIA",
			  "response_type": "range",
			  "responses": [10, 0]
		  },
		  {
        "id": 5,
			  "category": "health",
			  "question": "CONDIÇÃO FISICA",
			  "response_type": "range",
			  "responses": [10, 0]
		  },
    ]
}