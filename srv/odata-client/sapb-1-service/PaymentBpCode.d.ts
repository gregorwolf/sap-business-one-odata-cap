import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PaymentBpCode
 */
export interface PaymentBpCode {
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentBpCode.build]] instead.
 */
export declare function createPaymentBpCode(json: any): PaymentBpCode;
/**
 * PaymentBpCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentBpCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentBpCode.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentBpCode.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace PaymentBpCode {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentBpCode;
}
//# sourceMappingURL=PaymentBpCode.d.ts.map