import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PaymentRunExportParams
 */
export interface PaymentRunExportParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentRunExportParams.build]] instead.
 */
export declare function createPaymentRunExportParams(json: any): PaymentRunExportParams;
/**
 * PaymentRunExportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentRunExportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentRunExportParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PaymentRunExportParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentRunExportParams;
}
//# sourceMappingURL=PaymentRunExportParams.d.ts.map