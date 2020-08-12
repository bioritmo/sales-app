import React from 'react';
import bem_estar_m from 'assets/imgs/avatar_bemestar_m.png';
import espiritual_m from 'assets/imgs/avatar_espiritual_m.png';
import estetico_m from 'assets/imgs/avatar_estetico_m.png';
import resistencia_m from 'assets/imgs/avatar_resistencia_m.png';
import sociavel_m from 'assets/imgs/avatar_sociavel_m.png';

import bem_estar_f from 'assets/imgs/avatar_bemestar_f.png';
import espiritual_f from 'assets/imgs/avatar_espiritual_f.png';
import estetico_f from 'assets/imgs/avatar_estetico_f.png';
import resistencia_f from 'assets/imgs/avatar_resistencia_f.png';
import sociavel_f from 'assets/imgs/avatar_sociavel_f.png';

export const AVATAR_QUESTIONS = {
  "questions": 
    [
      {
        "id": 1,
        "category": "profile",
			  "question": <span><strong>Clique abaixo</strong> a imagem que mais te representa.</span>,
        "response_type": "check",
			  "responses": [
          {
            id: 1,
            "title": "bem-estar",
            "img": (sex) => (sex === 'sex-m' ? bem_estar_m : bem_estar_f),
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
            "img": (sex) => (sex === 'sex-m' ? resistencia_m : resistencia_f),
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
            "img": (sex) => (sex === 'sex-m' ? sociavel_m : sociavel_f),
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
            "img": (sex) => (sex === 'sex-m' ? estetico_m : estetico_f),
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
            "img": (sex) => (sex === 'sex-m' ? espiritual_m : espiritual_f),
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