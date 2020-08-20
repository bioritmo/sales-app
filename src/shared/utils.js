import { nameStorage } from './constants';
import { CardText } from 'material-ui';

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

export const normalizePersonToAPI = (data) => {
  return {
    person: {
			name: data.name,
			gender: data.sex === 'sex-m' ? 'M' : 'F',
			registry_number: data.document,
			birthdate: "1990-01-01",
			email: data.email,
			phone_number: data.mobile,
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

export const translateMuscle = (muscles) => {
  const translate = muscles.map((name) => {
    switch (name.toLowerCase()) {
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