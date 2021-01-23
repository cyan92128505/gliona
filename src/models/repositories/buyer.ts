import PetsIcon from '@material-ui/icons/Pets';

export const BuyerIcon = PetsIcon;

export class Buyer {
  id: number;

  name = '';

  description = '';

  interview = 0;

  visit = 0;

  vet = 0;

  diabetic = 0;

  ointment = 0;

  passenger = 0;

  environmental = 0;

  total = 0;

  datetime = '';

  locationX = 0;

  locationY = 0;

  constructor(
    id: number,
    name: string,
    interview: number,
    visit: number,
    vet: number,
    diabetic: number,
    ointment: number,
    passenger: number,
    environmental: number,
    total: number,
    description: string,
    datetime: string,
    locationX: number,
    locationY: number
  ) {
    this.id = id;
    this.name = name;
    this.interview = interview;
    this.visit = visit;
    this.vet = vet;
    this.diabetic = diabetic;
    this.ointment = ointment;
    this.passenger = passenger;
    this.environmental = environmental;
    this.total = total;
    this.description = description;
    this.datetime = datetime;
    this.locationX = locationX;
    this.locationY = locationY;
  }

  static resourceName = 'buyer';

  static propId = 'id';

  static propName = 'name';

  static propInterview = 'interview';

  static propVisit = 'visit';

  static propVet = 'vet';

  static propDiabetic = 'diabetic';

  static propOintment = 'ointment';

  static propPassenger = 'passenger';

  static propEnvironmental = 'environmental';

  static propTotal = 'total';

  static propDescription = 'description';

  static propDatetime = 'datetime';

  static propLocationX = 'locationX';

  static propLocationY = 'locationY';

  static maxNumber = 5;

  static statistics() {}

  static Icon = BuyerIcon;
}

export default Buyer;
