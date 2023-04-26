export class User {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public phone: number|null,
        public Sstatus: string,
        public gender: string,
        public agree: boolean
    ) {}
}
