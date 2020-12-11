import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WizardPaymentMethodParams
 */
export interface WizardPaymentMethodParams {
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WizardPaymentMethodParams.build]] instead.
 */
export declare function createWizardPaymentMethodParams(json: any): WizardPaymentMethodParams;
/**
 * WizardPaymentMethodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WizardPaymentMethodParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WizardPaymentMethodParams> {
    /**
     * Representation of the [[WizardPaymentMethodParams.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of WizardPaymentMethodParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WizardPaymentMethodParams {
    /**
     * Metadata information on all properties of the `WizardPaymentMethodParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WizardPaymentMethodParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WizardPaymentMethodParams;
}
//# sourceMappingURL=WizardPaymentMethodParams.d.ts.map