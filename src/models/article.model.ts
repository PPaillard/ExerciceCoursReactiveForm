export class Article {
  reference: string = ""
  name: string = ""
  description : string = ""

  constructor(reference: string, name: string, description : string){
    this.reference = reference
    this.name = name
    this.description = description
  }
}
