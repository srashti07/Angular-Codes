
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../models/contacts';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css'],
})
export class ContactContainerComponent implements OnInit {
  contacts: Contact[] = CONTACTS;

  constructor() {}

  ngOnInit(): void {}

  onContactAdded(contact: Contact) {
    this.contacts.push(contact);
    alert(`Contact Added`);
  }
}
