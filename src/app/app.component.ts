import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/models/article.model';
import { referenceValidator } from 'src/validators/reference-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  articles : Article[] = [];

  articleForm: FormGroup

  constructor(private formBuilder : FormBuilder){
    this.articleForm = formBuilder.group({
      reference : ['',  referenceValidator],
      name : ['', Validators.required],
      description : ['', Validators.required]
    })
  }

  onSubmit(){
    const reference = this.articleForm.get('reference')?.value
    const name = this.articleForm.get('name')?.value
    const description = this.articleForm.get('description')?.value

    const article = new Article(reference, name, description)
    this.articles.push(article)

    this.articleForm.reset()
  }
}
