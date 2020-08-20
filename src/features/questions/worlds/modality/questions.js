import musculacao_m from 'assets/imgs/musculacao_m.png';
import musculacao_animation_m from 'assets/imgs/musculacao_m.gif';
import correr_m from 'assets/imgs/correr_m.png';
import correr_animation_m from 'assets/imgs/correr_m.gif';
import pedalar_m from 'assets/imgs/pedalar_m.png';
import pedalar_animation_m from 'assets/imgs/pedalar_m.gif';
import nadar_m from 'assets/imgs/nadar_m.png';
import nadar_animation_m from 'assets/imgs/nadar_m.gif';
import funcional_m from 'assets/imgs/funcional_m.png';
import funcional_animation_m from 'assets/imgs/funcional_m.gif';
import yoga_m from 'assets/imgs/yoga_m.png';
import yoga_animation_m from 'assets/imgs/yoga_m.gif';
import dancar_m from 'assets/imgs/danca_m.png';
import dancar_animation_m from 'assets/imgs/danca_m.gif';
import alongar_m from 'assets/imgs/alongar_m.png';
import alongar_animation_m from 'assets/imgs/alongar_m.gif';

import musculacao_f from 'assets/imgs/musculacao_f.png';
import musculacao_animation_f from 'assets/imgs/musculacao_f.gif';
import correr_f from 'assets/imgs/correr_f.png';
import correr_animation_f from 'assets/imgs/correr_f.gif';
import pedalar_f from 'assets/imgs/pedalar_f.png';
import pedalar_animation_f from 'assets/imgs/pedalar_f.gif';
import nadar_f from 'assets/imgs/nadar_f.png';
import nadar_animation_f from 'assets/imgs/nadar_f.gif';
import funcional_f from 'assets/imgs/funcional_f.png';
import funcional_animation_f from 'assets/imgs/funcional_f.gif';
import yoga_f from 'assets/imgs/yoga_f.png';
import yoga_animation_f from 'assets/imgs/yoga_f.gif';
import dancar_f from 'assets/imgs/danca_f.png';
import dancar_animation_f from 'assets/imgs/danca_f.gif';
import alongar_f from 'assets/imgs/alongar_f.png';
import alongar_animation_f from 'assets/imgs/alongar_f.gif';

export const MODALITY_QUESTIONS = {
  "questions": 
    [
      {
        "id": 1,
        "category": "modality",
        "question": "Destas opções, quais as 3 que você mais gosta?",
        "question_legend": "Modalidades que mais gosta",
        "response_type": "multi_check",
        "max_check": 3,
			  "responses": [
          {
            id: 1,
            "title": "musculação",
            "img": (sex, isAnimation) => !isAnimation ?
              (sex === 'sex-m' ? musculacao_m : musculacao_f) :
              (sex === 'sex-m' ? musculacao_animation_m : musculacao_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ?
              (sex === 'sex-m' ? correr_m : correr_f) :
              (sex === 'sex-m' ? correr_animation_m : correr_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ?
              (sex === 'sex-m' ? pedalar_m : pedalar_f) :
              (sex === 'sex-m' ? pedalar_animation_m : pedalar_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ? 
              (sex === 'sex-m' ? nadar_m : nadar_f) :
              (sex === 'sex-m' ? nadar_animation_m : nadar_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ?
              (sex === 'sex-m' ? funcional_m : funcional_f) :
              (sex === 'sex-m' ? funcional_animation_m : funcional_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ?
              (sex === 'sex-m' ? yoga_m : yoga_f) :
              (sex === 'sex-m' ? yoga_animation_m : yoga_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ? 
              (sex === 'sex-m' ? dancar_m : dancar_f) :
              (sex === 'sex-m' ? dancar_animation_m : dancar_animation_f),
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
            "img": (sex, isAnimation) => !isAnimation ? 
              (sex === 'sex-m' ? alongar_m : alongar_f) : 
              (sex === 'sex-m' ? alongar_animation_m : alongar_animation_f),
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