import musculacao_m from 'assets/imgs/musculacao_m.png';
import correr_m from 'assets/imgs/correr_m.png';
import pedalar_m from 'assets/imgs/pedalar_m.png';
import nadar_m from 'assets/imgs/nadar_m.png';
import funcional_m from 'assets/imgs/funcional_m.png';
import yoga_m from 'assets/imgs/yoga_m.png';
import dancar_m from 'assets/imgs/dancar_m.png';
import alongar_m from 'assets/imgs/alongar_m.png';

import musculacao_f from 'assets/imgs/musculacao_f.png';
import correr_f from 'assets/imgs/correr_f.png';
import pedalar_f from 'assets/imgs/pedalar_f.png';
import nadar_f from 'assets/imgs/nadar_f.png';
import funcional_f from 'assets/imgs/funcional_f.png';
import yoga_f from 'assets/imgs/yoga_f.png';
import dancar_f from 'assets/imgs/dancar_f.png';
import alongar_f from 'assets/imgs/alongar_f.png';

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
            "img": (sex) => (sex === 'sex-m' ? musculacao_m : musculacao_f),
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
            "img": (sex) => (sex === 'sex-m' ? correr_m : correr_f),
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
            "img": (sex) => (sex === 'sex-m' ? pedalar_m : pedalar_f),
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
            "img": (sex) => (sex === 'sex-m' ? nadar_m : nadar_f),
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
            "img": (sex) => (sex === 'sex-m' ? funcional_m : funcional_f),
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
            "img": (sex) => (sex === 'sex-m' ? yoga_m : yoga_f),
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
            "img": (sex) => (sex === 'sex-m' ? dancar_m : dancar_f),
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
            "img": (sex) => (sex === 'sex-m' ? alongar_m : alongar_f),
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