import bem_estar_m from '../../../assets/imgs/avatar_bemestar_m.png';
import espiritual_m from '../../../assets/imgs/avatar_espiritual_m.png';
import estetico_m from '../../../assets/imgs/avatar_estetico_m.png';
import resistencia_m from '../../../assets/imgs/avatar_resistencia_m.png';
import sociavel_m from '../../../assets/imgs/avatar_sociavel_m.png';

export const AVATAR_QUESTIONS = {
  "questions": 
    [
      {
        "id": 1,
        "category": "profile",
			  "question": "para você aproveitar o máximo da BioRitmo, nos conte mais sobre seus hábitos.",
        "response_type": "check",
			  "responses": [
          {
            id: 1,
            "title": "bem-estar",
            "img": bem_estar_m,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.04,
                  squad: 0.04,
                  burn: 0.04,
                  torq: 0.04,
                  vidya: 0.8,
                  skill_mill: 0.04,
                }
              },
              {
                chart: "FITNESS",
                values: {
                  body_mind: 0.6,
                  dance: 0.13,
                  cardiovascular: 0.13,
                  fortification: 0.13,
                }
              },
            ],
          },
          {
            id: 2,
            "title": "resistencia e energia",
            "img": resistencia_m,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.30,
                  squad: 0.13,
                  burn: 0.30,
                  torq: 0.13,
                  vidya: 0.0,
                  skill_mill: 0.13,
                }
              },
              {
                chart: "FITNESS",
                values: {
                  body_mind: 0.0,
                  dance: 0.1,
                  cardiovascular: 0.8,
                  fortification: 0.1,
                }
              },
            ],
          },
          {
            id: 3,
            "title": "sociavel",
            "img": sociavel_m,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.20,
                  squad: 0.27,
                  burn: 0.27,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.27,
                }
              },
              {
                chart: "FITNESS",
                values: {
                  body_mind: 0.0,
                  dance: 0.7,
                  cardiovascular: 0.15,
                  fortification: 0.15,
                }
              },
            ],
          },
          {
            id: 4,
            "title": "estético",
            "img": estetico_m,
            points: [
              {
                chart: "MICRO_GYM",
                values: {
                  race: 0.33,
                  squad: 0.33,
                  burn: 0.33,
                  torq: 0.0,
                  vidya: 0.0,
                  skill_mill: 0.0,
                }
              },
              {
                chart: "FITNESS",
                values: {
                  body_mind: 0.0,
                  dance: 0.0,
                  cardiovascular: 0.5,
                  fortification: 0.5,
                }
              },
            ],
          },
          {
            id: 5,
            "title": "espiritual",
            "img": espiritual_m,
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
              {
                chart: "FITNESS",
                values: {
                  body_mind: 0.8,
                  dance: 0.07,
                  cardiovascular: 0.1,
                  fortification: 0.1,
                }
              },
            ],
          },
        ]
      }
    ],
}