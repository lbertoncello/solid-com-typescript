/*
 * Fere o ISP!
 * Por ex., um consumidor não precisa de CNPJ uma empresa não precisa de um cpf.
 * O melhor é criar duas interfaces separadas para cada e uma interface que unifique os que ambas devem ter,
 * caso seja necessário.
 */
// export interface CustomerProtocol {
// 	firstName: string;
// 	lastName: string;
// 	cpf: string;
// 	cnpj: string;
// }

export interface CustomerOrder {
	getName(): string;
	getIDN(): string;
}

export interface IndividualCustomerProtocol {
	firstName: string;
	lastName: string;
	cpf: string;
}

export interface EnterpriseCustomerProtocol {
	name: string;
	cnpj: string;
}
