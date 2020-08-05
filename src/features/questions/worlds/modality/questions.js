import musculacao from '../../../../assets/imgs/musculacao.png';
import correr from '../../../../assets/imgs/correr.png';
import pedalar from '../../../../assets/imgs/pedalar.png';
import nadar from '../../../../assets/imgs/nadar.png';
import funcional from '../../../../assets/imgs/funcional.png';
import yoga from '../../../../assets/imgs/yoga.png';
import dancar from '../../../../assets/imgs/dancar.png';
import alongar from '../../../../assets/imgs/alongar.png';

export const MODALITY_QUESTIONS = {
  "questions": 
    [
      {
        "id": 1,
        "category": "modality",
			  "question": "Destas opções, quais as 3 que você mais gosta?",
        "response_type": "multi_check",
        "max_check": 3,
			  "responses": [
          {
            id: 1,
            "title": "musculação",
            "img": musculacao,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.3,
                  squad: 0.3,
                  burn: 0.3,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.1,
                }
              },
            ],
          },
          {
            id: 2,
            "title": "correr",
            "img": correr,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.7,
                  squad: 0.0,
                  burn: 0.0,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.7,
                }
              },
            ],
          },
          {
            id: 3,
            "title": "pedalar",
            "img": pedalar,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.0,
                  squad: 0.0,
                  burn: 0.0,
                  torq: 1.0,
                  vidya: 0.0,
                  skill_mill: 0.0,
                }
              },
            ],
          },
          {
            id: 4,
            "title": "nadar",
            "img": nadar,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.0,
                  squad: 0.0,
                  burn: 0.0,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.0,
                }
              },
            ],
          },
          {
            id: 5,
            "title": "funcional",
            "img": funcional,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.2,
                  squad: 0.6,
                  burn: 0.0,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.2,
                }
              },
            ],
          },
          {
            id: 6,
            "title": "yoga",
            "img": yoga,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.0,
                  squad: 0.0,
                  burn: 0.0,
                  torq: 0.0,
                  vidya: 1.0,
                  skill_mill: 0.0,
                }
              },
            ],
          },
          {
            id: 7,
            "title": "dançar",
            "img": dancar,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.0,
                  squad: 0.0,
                  burn: 0.0,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.0,
                }
              },
            ],
          },
          {
            id: 8,
            "title": "alongar",
            "img": alongar,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.0,
                  squad: 0.0,
                  burn: 0.0,
                  torq: 0.0,
                  vidya: 1.0,
                  skill_mill: 0.0,
                }
              },
            ],
          },
        ]
      }
    ],
}