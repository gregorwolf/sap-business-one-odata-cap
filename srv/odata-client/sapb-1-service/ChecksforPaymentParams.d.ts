import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ChecksforPaymentParams
 */
export interface ChecksforPaymentParams {
    /**
     * Check Key.
     * @nullable
     */
    checkKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentParams.build]] instead.
 */
export declare function createChecksforPaymentParams(json: any): ChecksforPaymentParams;
/**
 * ChecksforPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChecksforPaymentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChecksforPaymentParams.checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkKey: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ChecksforPaymentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ChecksforPaymentParams;
}
//# sourceMappingURL=ChecksforPaymentParams.d.ts.map