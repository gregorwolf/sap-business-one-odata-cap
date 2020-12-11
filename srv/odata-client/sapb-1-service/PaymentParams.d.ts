import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentParams
 */
export interface PaymentParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentParams.build]] instead.
 */
export declare function createPaymentParams(json: any): PaymentParams;
/**
 * PaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentParams> {
    /**
     * Representation of the [[PaymentParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentParams {
    /**
     * Metadata information on all properties of the `PaymentParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentParams;
}
//# sourceMappingURL=PaymentParams.d.ts.map