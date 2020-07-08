import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BillOfExchangeTransactionParams
 */
export interface BillOfExchangeTransactionParams {
    /**
     * Boe Transactionkey.
     * @nullable
     */
    boeTransactionkey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionParams.build]] instead.
 */
export declare function createBillOfExchangeTransactionParams(json: any): BillOfExchangeTransactionParams;
/**
 * BillOfExchangeTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeTransactionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BillOfExchangeTransactionParams.boeTransactionkey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeTransactionkey: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BillOfExchangeTransactionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransactionParams;
}
//# sourceMappingURL=BillOfExchangeTransactionParams.d.ts.map