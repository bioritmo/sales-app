import { toast } from 'react-toastify';
import _ from 'lodash';

import { nameStorage } from './constants';
import { MUSCLE_QUESTIONS } from '../features/questions/worlds/muscle/questions';

export const getStorage = () => {
  const storage = localStorage.getItem(nameStorage);
  return JSON.parse(storage);
};

export const getStorageItem = (item) => {
  const storage = getStorage(nameStorage);
  return storage[item];
};

export const calculatePoints = (itemPoints, isSum = false, multiplier = 1) => {
  const storagePoints = getStorageItem('points');

  itemPoints.map((item) => {
    const keysPoints = Object.keys(item.values);
    const itemChartStorage = storagePoints.find(chart => chart.chart === item.chart);

    keysPoints.map(keyPoint => {
      const currentValueStorage = parseFloat(itemChartStorage.values[keyPoint]['value']);
      const currentValue = parseFloat(item.values[keyPoint]);
      if (isSum) {
        itemChartStorage.values[keyPoint]['value'] = (currentValue * multiplier) + currentValueStorage;
      } else {
        itemChartStorage.values[keyPoint]['value'] = currentValueStorage - (currentValue * multiplier);
      }
    })
  })

  const storage = getStorage();
  storage['points'] = storagePoints;
  updateStorage(storage);
}

export const setDefaultStorage = () => {
  const data = {
    persona: {},
    profile: [],
    health: [],
    modality: [],
    challenge: [],
    muscle: [],
    consultant: [],
    points: [
      {
        chart: "BODYBUILDING_PROGRAMS",
        values: {
          f2f: {
            value: 0.0,
            legend: 'Face to face'
          },
          slimming: {
            value: 0.0,
            legend: 'Emagrecimento'
          },
          hypertrophy: {
            value: 0.0,
            legend: 'Hipertrofia'
          },
          cardio: {
            value: 0.0,
            legend: 'Cardio'
          },
        }
      },
      {
        chart: "MICRO_GYM",
        values: {
          race: {
            value: 0.0,
            legend: 'Race'
          },
          squad: {
            value: 0.0,
            legend: 'Squad'
          },
          burn: {
            value: 0.0,
            legend: 'Burn'
          },
          torq: {
            value: 0.0,
            legend: 'Torq'
          },
          vidya: {
            value: 0.0,
            legend: 'Vidya'
          },
          skill_mill: {
            value: 0.0,
            legend: 'Skill Mill'
          },
        }
      },
      {
        chart: "FITNESS",
        values: {
          body_mind: {
            value: 0.0,
            legend: 'Body Mind',
            description: 'Body Mind (Flow, Postural Flex, Pilates, Body Balance, Bio Master)'
          },
          dance: {
            value: 0.0,
            legend: 'Dança',
            description: 'Dança (Fit dance, Zumba, ShBam, Body Jam, Ritmos)'
          },
          cardiovascular: {
            value: 0.0,
            legend: 'Cardiovascular',
            description: 'Cardiovascular (Body combat, Power jump, Body step, Bio boxe, Body attack)'
          },
          fortification: {
            value: 0.0,
            legend: 'Fortalecimento',
            description: 'Fortalecimento (Bode pump, Strong, Core, CX Works, Les Milss grit)'
          },
        }
      },
    ]
  };

  updateStorage(data);
};

export const updateStorage = (data) => {
  localStorage.setItem(nameStorage, JSON.stringify(data));
};

export const savePersona = (person) => {
  const storage = getStorage();

  const persona = {
    ...storage.persona,
    ...person
  }

  const newData = {
    ...storage,
    persona
  };
  updateStorage(newData);
};

export const saveResponseWorld = (world, response) => {
  const storage = getStorage();

  storage[world].push(response);
  updateStorage(storage);
}


export const saveResponseConsultant = (data) => {
  const storage = getStorage();

  storage['consultant'] = data;
  updateStorage(storage);
}

export const splitPhone = (strPhone) => {
  const phone = strPhone.replace(/\D/g, '');
  let areaCode, number, kind;
  if (phone.length === 10) {
    kind = 'home';
    areaCode = phone.substr(0, 2);
    number = phone.substr(2, 8);
  } else if (phone.length === 11) {
    kind = 'mobile';
    areaCode = phone.substr(0, 2);
    number = phone.substr(2, 9);
  } else {
    // Formato não suportado
    console.log('erro formato telefone.');
  }

  return { areaCode, number, kind };
}

export const isCPF = (strCPF) => {
  let Sum;
  var Rest;
  Sum = 0;
  if (strCPF == "00000000000") return false;
  if (strCPF.length < 11) return false;

  for (let i=1; i<=9; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Rest = (Sum * 10) % 11;

  if ((Rest == 10) || (Rest == 11))  Rest = 0;
  if (Rest != parseInt(strCPF.substring(9, 10)) ) return false;

  Sum = 0;
  for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Rest = (Sum * 10) % 11;

  if ((Rest == 10) || (Rest == 11))  Rest = 0;
  if (Rest != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}

export const extractIdUrl = (url) => url.substring(url.lastIndexOf('/') + 1);

export const normalizePersonToAPI = (data) => {
  return {
    person: {
			name: data.name,
			gender: data.sex === 'sex-m' ? 'M' : 'F',
			registry_number: data.document,
			birthdate: normalizeDate(data.birthday),
			email: data.email && data.email.toLowerCase(),
			mobile: data.mobile,
			address_attributes: {
				zip: data.address.cep,
				street: data.address.logradouro,
				number: data.address_number,
				neighborhhod: "",
				state: data.address.uf,
				city: data.address.cidade,
				region: "",
				complement: ""
			},
		  acronym: data.unity
    }
  }
}

export const normalizePayloadPersonWorkout = (data) => {
  const { areaCode, number, kind } = splitPhone(data.mobile);
  return {
    person: {
      name: data.name,
      email: data.email && data.email.toLowerCase(),
      registry_number: data.registry_number,
      integration_id: data.integration_id,
      birthday: data.birthdate,
      origin: 'biosystem',
      location_acronym: data.location_acronym,
      phones_attributes: [
        {
          area: areaCode,
          number: number,
          kind: kind
        }
      ]
    }
  }
}

export const normalizePayloadQuestionnaireWorkout = (data) => {
  return {
    questionnaire_response: {
      answers_attributes: [
        {
          questionnaire_question_id: data.profile[0].question.id,
          questionnaire_question_alternative_id: data.profile[0].response.id
        },
        {
          questionnaire_question_id: data.health[0].question.id,
          questionnaire_question_alternative_id: data.health[0].response.id
        },
        {
          questionnaire_question_id: data.health[1].question.id,
          text_response: data.health[1].response[0]
        },
        {
          questionnaire_question_id: data.health[2].question.id,
          text_response: data.health[2].response[0]
        },
        {
          questionnaire_question_id: data.health[3].question.id,
          text_response: data.health[3].response[0]
        },
        {
          questionnaire_question_id: data.health[4].question.id,
          text_response: data.health[4].response[0]
        },
        {
          questionnaire_question_id: data.modality[0].question.id,
          questionnaire_question_alternative_ids: data.modality[0].response
        },
        {
          questionnaire_question_id: data.challenge[0].question.id,
          questionnaire_question_alternative_ids: data.challenge[0].response
        },
        {
          questionnaire_question_id: data.muscle[0].question.id,
          questionnaire_question_alternative_ids: data.muscle[0].response
        },
        ...data.consultant.responsesList.map((question) => {
          return {
            questionnaire_question_id: question.id,
            text_response: question.response
          }
        })
      ]
    },
    questionnaire_id: "159",
    person_id: data.persona.workout_person_id
  }
}

export const translateMuscle = (muscles) => {
  const responses = _.invert(MUSCLE_QUESTIONS.questions[0].responses);

  const translate = muscles.map((id) => {
    switch (responses[id].toLowerCase()) {
      case 'tummy':
        return 'Abdomen'
      case 'legs':
        return 'Pernas e glúteos';
      case 'breast':
        return 'Peitoral'
      case 'arms':
        return 'Braços'
      case 'back':
        return 'Costas';
      default:
        return '';
    }
  });

  return translate;
}

export const maskDate = (value) => {
  value = value.replace(/\D/g,"")
  value = value.replace(/(\d{2})(\d)/,"$1/$2")
  value = value.replace(/(\d{2})(\d)/,"$1/$2")

  return value
}

export const maskMobile = (value) => {
  value = value.replace(/\D/g,"")
  value = value.replace(/^(\d\d)(\d)/g,"($1) $2")
  value = value.replace(/(\d{5})(\d)/,"$1-$2")

  return value;
}


export const normalizeDate = (date) => {
  const dateSplit = date.split('/');
  const year = dateSplit[2];
  const month = dateSplit[1].length === 1 ? `0${dateSplit[1]}` : dateSplit[1];
  const day = dateSplit[0].length === 1 ? `0${dateSplit[0]}` : dateSplit[0];
  return `${year}-${month}-${day}`;
}

export const onlyNumbers = (value) => {
  return value.replace(/([^\d])+/gim, '');
}

export const messageErrorSaga = (error) => {
  const messageErrorInternet = 'Sem conexão com a internet! Favor realizar a conexão para continuar o Game';
  const messageErrorGeneric = 'Erro ao cadastrar, tente novamente.';
  const messageError = !error.status ? messageErrorInternet : messageErrorGeneric;

  toast.error(
    messageError,
    {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
}
