import training_m from 'assets/imgs/training_m.png';
import not_training_m from 'assets/imgs/not_training_m.png';
import never_training_m from 'assets/imgs/never_training_m.png';
import sporadically_training_m from 'assets/imgs/sporadically_training_m.png';

import training_f from 'assets/imgs/training_f.png';
import not_training_f from 'assets/imgs/not_training_f.png';
import never_training_f from 'assets/imgs/never_training_f.png';
import sporadically_training_f from 'assets/imgs/sporadically_training_f.png';

export const HEALTH_QUESTIONS = {
  "questions": 
    [
      {
        "id": 1,
        "category": "health",
        "question": "E aí, como anda sua rotina de atividades físicas?",
        "question_legend": "Rotina de atividades físicas",
        "response_type": "unique_check",
        "responses": [
          {
            "id": 1,
            "title": "Estou treinando",
            "icon": "",
            "img": (sex) => (sex === 'sex-m' ? training_m : training_f),
            points: [
              {
                chart: "BODYBUILDING_PROGRAMS",
                values: {
                  f2f: 0.0,
                  slimming: 0.4,
                  hypertrophy: 0.4,
                  cardio: 0.2,
                }
              },
            ],
          },
          {
            "id": 2,
            "title": "Treino esporadicamente",
            "icon": "",
            "img": (sex) => (sex === 'sex-m' ? sporadically_training_m : sporadically_training_f),
            points: [
              {
                chart: "BODYBUILDING_PROGRAMS",
                values: {
                  f2f: 0.35,
                  slimming: 0.15,
                  hypertrophy: 0.15,
                  cardio: 0.35,
                }
              },
            ],
          },
          {
            "id": 3,
            "title": "Não estou treinando",
            "icon": "",
            "img": (sex) => (sex === 'sex-m' ? not_training_m : not_training_f),
            points: [
              {
                chart: "BODYBUILDING_PROGRAMS",
                values: {
                  f2f: 0.5,
                  slimming: 0.1,
                  hypertrophy: 0.1,
                  cardio: 0.3,
                }
              },
            ],
          },
          {
            "id": 4,
            "title": "Nunca treinei",
            "icon": "",
            "img": (sex) => (sex === 'sex-m' ? never_training_m : never_training_f),
            points: [
              {
                chart: "BODYBUILDING_PROGRAMS",
                values: {
                  f2f: 0.8,
                  slimming: 0.0,
                  hypertrophy: 0.0,
                  cardio: 0.2,
                }
              },
            ],
          }
        ]
      },
      {
        "id": 2,
			  "category": "health",
			  "question": "Altura",
			  "response_type": "range",
        "responses": [250, 10],
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

export const POINTS_IMC = {
  pointsMin: {
    points: [
      {
        chart: "BODYBUILDING_PROGRAMS",
        values: {
          f2f: 0.3,
          slimming: 0.0,
          hypertrophy: 0.7,
          cardio: 0.0,
        }
      },
      {
        chart: "MICRO_GYM",
        values: {
          race: 0.15,
          squad: 0.4,
          burn: 0.0,
          torq: 0.0,
          vidya: 0.3,
          skill_mill: 0.15,
        }
      },
    ],
  },
  pointsMed: {
    points: [
      {
        chart: "BODYBUILDING_PROGRAMS",
        values: {
          f2f: 0.25,
          slimming: 0.25,
          hypertrophy: 0.25,
          cardio: 0.25,
        }
      },
      {
        chart: "MICRO_GYM",
        values: {
          race: 0.2,
          squad: 0.2,
          burn: 0.2,
          torq: 0.2,
          vidya: 0.2,
          skill_mill: 0.0,
        }
      },
    ],
  },
  pointsMax: {
    points: [
      {
        chart: "BODYBUILDING_PROGRAMS",
        values: {
          f2f: 0.1,
          slimming: 0.7,
          hypertrophy: 0.0,
          cardio: 0.2,
        }
      },
      {
        chart: "MICRO_GYM",
        values: {
          race: 0.3,
          squad: 0.1,
          burn: 0.4,
          torq: 0.1,
          vidya: 0.0,
          skill_mill: 0.1,
        }
      },
    ],
  },
}