// <reference types="Cypress" />

const url = 'http://localhost:3000/';
const testBook = { title: 'Banany w na drzewach', author: 'Ł. I. Wiśniewski', date: 2001 };
const alertTxt = "Uzupełnij wszystkie pola, lub książka jest już w bazie"

const clearInput = (element) => cy.get(element).type('{selectall}{del}');


describe('site is open?', () => {
  it('should open our site', () => {
    cy.visit(url);
  });
});

describe('add new book', () => {
  it('shoudl add new book', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .sc-AxjAm').type(testBook.title);
    cy.get(':nth-child(1) > :nth-child(2) > .sc-AxjAm').type(testBook.author);
    cy.get(':nth-child(2) > :nth-child(1) > .sc-AxjAm').type(testBook.date);
    cy.get(':nth-child(2) > :nth-child(2) > .sc-AxjAm').click();
  });
});

describe('check addButton', () => {
  it('should have same name as input book name', () => {
    cy.get(':nth-child(2) > :nth-child(2) > .sc-AxjAm');
    cy.should('contain', testBook.title);
  });
});

describe('check new book is added?', () => {
  it('library shoudl contain added book', () => {
    cy.get(':nth-child(7) > .row');
    cy.should('contain', testBook.title);
    cy.should('contain', testBook.author);
    cy.should('contain', testBook.date);
  });
});

describe('check delete a book after click', () => {
  it('shoudl delete book afterk click on book tab', () => {
    cy.get(':nth-child(2) > .card-body').click();
    cy.get(':nth-child(7) > .row');
    cy.should('not.contain', 'Kamienie na szaniec');
  });
});

describe('check serch input', () => {
  it('should find Dzieci z bullerbyn', () => {
    cy.get(':nth-child(5) > .sc-AxjAm').type('dz');
    clearInput(':nth-child(5) > .sc-AxjAm');
  }); 
});

describe('alert: book exist', () => {
  it('display alert after add same bok witch exist in lib', () => {
    cy.get(':nth-child(2) > :nth-child(2) > .sc-AxjAm').click();
    cy.get('.fade');
    cy.should('contain', alertTxt);
  });

  it('should clear alert after type something in inputs', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .sc-AxjAm').type('s');
    cy.should('not.contain', alertTxt);
  });
});