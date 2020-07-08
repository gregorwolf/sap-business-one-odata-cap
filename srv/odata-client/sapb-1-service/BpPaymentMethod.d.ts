import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpPaymentMethod
 */
export interface BpPaymentMethod {
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: string;
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpPaymentMethod.build]] instead.
 */
export declare function createBpPaymentMethod(json: any): BpPaymentMethod;
/**
 * BpPaymentMethodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpPaymentMethodField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpPaymentMethod.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpPaymentMethod.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpPaymentMethod.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpPaymentMethod {
    function build(json: {
        [keys: string]: FieldType;
    }): BpPaymentMethod;
}
//# sourceMappingURL=BpPaymentMethod.d.ts.map