import DUMMY_DELIVERIES from 'src/data/dummy_deliveries.json';

const toOption = (value) => ({ value: value, label: value });

const DRONES = new Set();
const TECHNICIANS = new Set();
const PLATFORMS = new Set();

for (let delivery of DUMMY_DELIVERIES) {
  DRONES.add(delivery.drone);
  TECHNICIANS.add(delivery.technician);
  PLATFORMS.add(delivery.platform);
}

const FORM_OPTIONS = {
  drone: [...DRONES].map(toOption),
  technician: [...TECHNICIANS].map(toOption),
  platform: [...PLATFORMS].map(toOption)
};


export default FORM_OPTIONS;
