import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CreditCardPaymentParams
 */
export interface CreditCardPaymentParams {
    /**
     * Due Date Code.
     * @nullable
     */
    dueDateCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditCardPaymentParams.build]] instead.
 */
export declare function createCreditCardPaymentParams(json: any): CreditCardPaymentParams;
/**
 * CreditCardPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditCardPaymentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditCardPaymentParams> {
    /**
     * Representation of the [[CreditCardPaymentParams.dueDateCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDateCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CreditCardPaymentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CreditCardPaymentParams {
    /**
     * Metadata information on all properties of the `CreditCardPaymentParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CreditCardPaymentParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CreditCardPaymentParams;
}
//# sourceMappingURL=CreditCardPaymentParams.d.ts.map