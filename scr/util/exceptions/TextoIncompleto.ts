export class TextoIncompleto extends Error
{
    constructor(message: string)
    {
    super();
    this.name = 'Texto Incompleto'
    this.message = message;
    }
}