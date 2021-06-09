import {TypeNameType} from "../ValueObject/TypeName";

export class Type {
    constructor(
        private readonly name: TypeNameType,
    ) {
    }

    getName(): string {
        return this.name;
    }
}
