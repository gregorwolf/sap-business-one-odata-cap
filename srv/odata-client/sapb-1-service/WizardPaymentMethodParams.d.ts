import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class WizardPaymentMethodParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WizardPaymentMethodParams.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WizardPaymentMethodParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WizardPaymentMethodParams;
}
//# sourceMappingURL=WizardPaymentMethodParams.d.ts.map