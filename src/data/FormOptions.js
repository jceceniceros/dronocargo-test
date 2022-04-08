import DUMMY_DELIVERIES from 'src/data/dummy_deliveries.json';

const DRONES = new Set();
const TECHNICIANS = new Set();
const PLATFORMS = new Set();

for (let delivery of DUMMY_DELIVERIES) {
  DRONES.add(delivery.drone);
  TECHNICIANS.add(delivery.technician);
  PLATFORMS.add(delivery.platform);
}

const FORM_OPTIONS = {
  drone: [...DRONES],
  technician: [...TECHNICIANS],
  platform: [...PLATFORMS]
};

export default FORM_OPTIONS;
