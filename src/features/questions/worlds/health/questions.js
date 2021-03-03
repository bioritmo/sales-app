import training_m from 'assets/imgs/training_m.png';
import training_animation_m from 'assets/imgs/training_m.gif';
import not_training_m from 'assets/imgs/not_training_m.png';
import not_training_animation_m from 'assets/imgs/not_training_m.gif';
import never_training_m from 'assets/imgs/never_training_m.png';
import sporadically_training_m from 'assets/imgs/sporadically_training_m.png';
import sporadically_training_animation_m from 'assets/imgs/sporadically_training_m.gif';

import training_f from 'assets/imgs/training_f.png';
import training_animation_f from 'assets/imgs/training_f.gif';
import not_training_f from 'assets/imgs/not_training_f.png';
import not_training_animation_f from 'assets/imgs/not_training_f.gif';
import never_training_f from 'assets/imgs/never_training_f.png';
import sporadically_training_f from 'assets/imgs/sporadically_training_f.png';
import sporadically_training_animation_f from 'assets/imgs/sporadically_training_f.gif';

export const HEALTH_QUESTIONS = {
  "questions":
    [
      {
        "id": 401,
        "category": "health",
        "question": "E aí, como anda sua rotina de atividades físicas?",
        "question_legend": "Rotina de atividades físicas",
        "response_type": "unique_check",
        "responses": [
          {
            "id": 1518,
            "title": "Estou treinando",
            "icon": "",
            "img": (sex, isAnimation) => !isAnimation ? (sex === 'sex-m' ? training_m : training_f) : (sex === 'sex-m' ? training_animation_m : training_animation_f),
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
            "id": 1519,
            "title": "Treino esporadicamente",
            "icon": "",
            "img": (sex, isAnimation) => !isAnimation ? (sex === 'sex-m' ? sporadically_training_m : sporadically_training_f) : (sex === 'sex-m' ? sporadically_training_animation_m : sporadically_training_animation_f),
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
            "id": 1520,
            "title": "Não estou treinando",
            "icon": "",
            "img": (sex, isAnimation) => !isAnimation ? (sex === 'sex-m' ? not_training_m : not_training_f) : (sex === 'sex-m' ? not_training_animation_m : not_training_animation_f),
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
            "id": 1521,
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
        "id": 404,
			  "category": "health",
			  "question": "Altura",
			  "response_type": "range",
        "responses": [250, 10],
      },
      {
        "id": 405,
			  "category": "health",
			  "question": "Peso",
			  "response_type": "range",
			  "responses": [250, 10]
      },
		  {
        "id": 402,
			  "category": "health",
			  "question": "NÍVEL DE ENERGIA",
			  "response_type": "range",
			  "responses": [10, 0]
		  },
		  {
        "id": 403,
			  "category": "health",
			  "question": "CONDIÇÃO FISICA",
			  "response_type": "range",
			  "responses": [10, 0]
		  },
      {
        "id": 431,
        "category": "health",
        "question": "Digite o seu IMC",
        "responses": [
          {
            id: 1571,
            text: 'menor que 19 kg/m2',
          },
          {
            id: 1572,
            text: 'entre 19 kg/m2 até 25 kg/m2',
          },
          {
            id: 1573,
            text: 'maior que 25 kg/m2',
          },
        ]
      }
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
