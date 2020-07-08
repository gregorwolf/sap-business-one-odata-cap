import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class PaymentTermsTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentTermsTypeParams.groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PaymentTermsTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentTermsTypeParams;
}
//# sourceMappingURL=PaymentTermsTypeParams.d.ts.map