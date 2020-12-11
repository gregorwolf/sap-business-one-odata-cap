import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class PaymentRunExportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentRunExportParams> {
    /**
     * Representation of the [[PaymentRunExportParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentRunExportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentRunExportParams {
    /**
     * Metadata information on all properties of the `PaymentRunExportParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentRunExportParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentRunExportParams;
}
//# sourceMappingURL=PaymentRunExportParams.d.ts.map