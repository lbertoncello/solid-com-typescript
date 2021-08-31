import {
	EnterpriseCustomerProtocol,
	IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
	cpf: string;
	firstName: string;
	lastName: string;
	cnpj: string;

	constructor(cpf: string, firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.cpf = cpf;
		this.cnpj = '';
	}
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
	name: string;
	cnpj: string;

	constructor(cnpj: string, name: string) {
		this.name = name;
		this.cnpj = cnpj;
	}
}
