import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class PaymentBpCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentBpCode> {
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
    /**
     * Creates an instance of PaymentBpCodeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentBpCode {
    /**
     * Metadata information on all properties of the `PaymentBpCode` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentBpCode>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentBpCode;
}
//# sourceMappingURL=PaymentBpCode.d.ts.map