import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent {

  dataFromBackend: any = JSON.parse('{"ops":[{"insert":"dsadasfsdfsd"},{"attributes":{"header":1},"insert":"\\n"},{"insert":"HOVNOLOG "},{"attributes":{"bold":true},"insert":"sadasd  dsadada dasda"},{"insert":"d "},{"attributes":{"underline":true},"insert":"asdasda "},{"attributes":{"strike":true},"insert":"dsa "},{"insert":"dsdsds"},{"attributes":{"script":"super"},"insert":"2"},{"insert":"\\n"}]}');
  finalExamQuestionForm = this.formBuilder.group({
    category: [''],
    question: [this.dataFromBackend],
    answer: [''],
  });


  public categories: any[] = [
    {
      value: 'Etologie',
      viewValue: 'Etologie'
    }

  ]

  public quillEditorAnswerStyle: any = {
    width: '1149px',
    height: '600px'
  };

  public quillEditorQuestionStyle: any = {
    width: '1149px',
    height: '200px'
  };

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.warn(this.finalExamQuestionForm.value);
    console.log(this.finalExamQuestionForm.get('question').value);
  }
}
