import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BillOfExchangeTransactionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransactionParams> {
    /**
     * Representation of the [[BillOfExchangeTransactionParams.boeTransactionkey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeTransactionkey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BillOfExchangeTransactionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BillOfExchangeTransactionParams {
    /**
     * Metadata information on all properties of the `BillOfExchangeTransactionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BillOfExchangeTransactionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransactionParams;
}
//# sourceMappingURL=BillOfExchangeTransactionParams.d.ts.map