import { AbstractControl, ValidationErrors } from "@angular/forms";

export function referenceValidator(control: AbstractControl):  ValidationErrors | null {
  // Reference :
  // one digit then # then at least one or more alphanumeric car
  const referenceRegex = RegExp('^[0-9]#[0-9A-Z]+$');
  const valid = referenceRegex.test(control.value);

  const errors = {
    validation: {
      rules: "Le format de la reference n'est pas correct. (ex : 8#FD874FD478)"
    }
  };

  return !valid ? errors : null;
 }
