import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
	saveOrder(): void {
		console.log('Pedido salvo com sucesso...');
	}
}
