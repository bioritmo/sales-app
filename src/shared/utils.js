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
      const currentValueStorage = parseFloat(itemChartStorage.values[keyPoint]);
      const currentValue = parseFloat(item.values[keyPoint]);
      if (isSum) {
        itemChartStorage.values[keyPoint] = (currentValue * multiplier) + currentValueStorage;
      } else {
        itemChartStorage.values[keyPoint] = currentValueStorage - (currentValue * multiplier);
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
    points: [
      {
        chart: "BODYBUILDING_PROGRAMS",
        values: {
          f2f: 0.0,
          slimming: 0.0,
          hypertrophy: 0.0,
          cardio: 0.0,
        }
      },
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
      {
        chart: "FITNESS",
        values: {
          body_mind: 0.0,
          dance: 0.0,
          cardiovascular: 0.0,
          fortification: 0.0,
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