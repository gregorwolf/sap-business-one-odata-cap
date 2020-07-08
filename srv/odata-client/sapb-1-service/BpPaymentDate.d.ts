import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpPaymentDate
 */
export interface BpPaymentDate {
    /**
     * Payment Date.
     * @nullable
     */
    paymentDate?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpPaymentDate.build]] instead.
 */
export declare function createBpPaymentDate(json: any): BpPaymentDate;
/**
 * BpPaymentDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpPaymentDateField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpPaymentDate.paymentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentDate: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpPaymentDate.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpPaymentDate {
    function build(json: {
        [keys: string]: FieldType;
    }): BpPaymentDate;
}
//# sourceMappingURL=BpPaymentDate.d.ts.map