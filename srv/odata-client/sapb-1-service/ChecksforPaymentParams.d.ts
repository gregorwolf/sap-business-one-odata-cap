import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ChecksforPaymentParams
 */
export interface ChecksforPaymentParams {
    /**
     * Check Key.
     * @nullable
     */
    checkKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentParams.build]] instead.
 */
export declare function createChecksforPaymentParams(json: any): ChecksforPaymentParams;
/**
 * ChecksforPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChecksforPaymentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChecksforPaymentParams> {
    /**
     * Representation of the [[ChecksforPaymentParams.checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ChecksforPaymentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ChecksforPaymentParams {
    /**
     * Metadata information on all properties of the `ChecksforPaymentParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ChecksforPaymentParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ChecksforPaymentParams;
}
//# sourceMappingURL=ChecksforPaymentParams.d.ts.map