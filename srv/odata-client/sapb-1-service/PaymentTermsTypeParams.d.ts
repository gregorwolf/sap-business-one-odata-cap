import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentTermsTypeParams
 */
export interface PaymentTermsTypeParams {
    /**
     * Group Number.
     * @nullable
     */
    groupNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentTermsTypeParams.build]] instead.
 */
export declare function createPaymentTermsTypeParams(json: any): PaymentTermsTypeParams;
/**
 * PaymentTermsTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentTermsTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentTermsTypeParams> {
    /**
     * Representation of the [[PaymentTermsTypeParams.groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentTermsTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentTermsTypeParams {
    /**
     * Metadata information on all properties of the `PaymentTermsTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentTermsTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentTermsTypeParams;
}
//# sourceMappingURL=PaymentTermsTypeParams.d.ts.map