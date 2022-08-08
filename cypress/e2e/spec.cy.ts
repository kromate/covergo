describe('insurance page', () => {
	it('Visits the app root url', () => {
		cy.visit('http://localhost:3000/');
	});

	it('should have a h1 tag and a start button', () => {
		cy.get('h1').should('have.text', ' Hello There ! ');
		cy.get('a').should('have.text', ' Get Started ');
	});

	it('navigate to about page when button is clicked', () => {
		cy.get('a').click();
		cy.url().should('include', '/form');
		cy.get('form').should('have.length', 1);
	});

	it('should navigate to summary page after filling form', () => {
		cy.get('input[id="name"]').type('John');
		cy.get('input[id="age"]').type('10');
		cy.get('select[id="location"]').select('Hong Kong');
		cy.get('label[for="Standard"]').click();
		cy.get('h2').should('have.text', ' Your Premium Package is 100 HKD');
		cy.get('button').click();
		cy.url().should('include', '/summary');
	});

	it('show error page for overage', () => {
		cy.visit('http://localhost:3000/form');
		cy.get('input[id="name"]').type('John');
		cy.get('input[id="age"]').type('101');
		cy.get('select[id="location"]').select('Hong Kong');
		cy.get('label[for="Standard"]').click();
		cy.get('button').click();
		cy.url().should('include', '/error');
		cy.get('a').click();
		cy.url().should('include', '/');
	});
});
