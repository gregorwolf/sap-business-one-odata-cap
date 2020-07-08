import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BillOfExchangeTransactionLine
 */
export interface BillOfExchangeTransactionLine {
    /**
     * Bill Of Exchange No.
     * @nullable
     */
    billOfExchangeNo?: number;
    /**
     * Bill Of Exchange Due Date.
     * @nullable
     */
    billOfExchangeDueDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionLine.build]] instead.
 */
export declare function createBillOfExchangeTransactionLine(json: any): BillOfExchangeTransactionLine;
/**
 * BillOfExchangeTransactionLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeTransactionLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeDueDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace BillOfExchangeTransactionLine {
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransactionLine;
}
//# sourceMappingURL=BillOfExchangeTransactionLine.d.ts.map