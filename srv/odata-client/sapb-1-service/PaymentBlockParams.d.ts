import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentBlockParams
 */
export interface PaymentBlockParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Payment Block Code.
     * @nullable
     */
    paymentBlockCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentBlockParams.build]] instead.
 */
export declare function createPaymentBlockParams(json: any): PaymentBlockParams;
/**
 * PaymentBlockParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentBlockParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentBlockParams> {
    /**
     * Representation of the [[PaymentBlockParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentBlockParams.paymentBlockCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentBlockCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentBlockParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentBlockParams {
    /**
     * Metadata information on all properties of the `PaymentBlockParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentBlockParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentBlockParams;
}
//# sourceMappingURL=PaymentBlockParams.d.ts.map