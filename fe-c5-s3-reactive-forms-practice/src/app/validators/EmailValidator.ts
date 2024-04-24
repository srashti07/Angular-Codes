import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function checkEmail():ValidatorFn{
    function checkIfGuestEmailsAreValid(c: AbstractControl) {
        if (c.value !== '') {
          const emailString = c.value;
          const emails = emailString.split(',').map((e: string) => e.trim());
          const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          const anyInvalidEmail = emails.every((e: string) => e.match(emailRegex) !== null);
          if (!anyInvalidEmail) {
            return { invalidGuestEmails: true }
          }
        } 
        return null;
      }
    return checkIfGuestEmailsAreValid;
}