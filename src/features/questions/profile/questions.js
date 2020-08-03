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
          },
          {
            id: 2,
            "title": "resistencia e energia",
            "img": resistencia_m,
          },
          {
            id: 3,
            "title": "sociavel",
            "img": sociavel_m,
          },
          {
            id: 4,
            "title": "estético",
            "img": estetico_m,
          },
          {
            id: 5,
            "title": "espiritual",
            "img": espiritual_m,
          },
        ]
      }
    ],
}