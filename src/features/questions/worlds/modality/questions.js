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
          },
          {
            id: 2,
            "title": "correr",
            "img": correr,
          },
          {
            id: 3,
            "title": "pedalar",
            "img": pedalar,
          },
          {
            id: 4,
            "title": "nadar",
            "img": nadar,
          },
          {
            id: 5,
            "title": "funcional",
            "img": funcional,
          },
          {
            id: 6,
            "title": "yoga",
            "img": yoga,
          },
          {
            id: 7,
            "title": "dançar",
            "img": dancar,
          },
          {
            id: 8,
            "title": "alongar",
            "img": alongar,
          },
        ]
      }
    ],
}