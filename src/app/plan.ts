import { Details } from './details';

export class Plan {
    constructor(
        public selectedDay: string,
        public events: Details[],
    ) {this.events = new Details['']}
}
