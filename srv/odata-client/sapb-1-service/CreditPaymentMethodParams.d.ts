import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CreditPaymentMethodParams
 */
export interface CreditPaymentMethodParams {
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditPaymentMethodParams.build]] instead.
 */
export declare function createCreditPaymentMethodParams(json: any): CreditPaymentMethodParams;
/**
 * CreditPaymentMethodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditPaymentMethodParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditPaymentMethodParams> {
    /**
     * Representation of the [[CreditPaymentMethodParams.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CreditPaymentMethodParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CreditPaymentMethodParams {
    /**
     * Metadata information on all properties of the `CreditPaymentMethodParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CreditPaymentMethodParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CreditPaymentMethodParams;
}
//# sourceMappingURL=CreditPaymentMethodParams.d.ts.map