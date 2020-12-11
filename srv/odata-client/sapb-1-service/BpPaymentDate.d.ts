import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BpPaymentDateField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpPaymentDate> {
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
    /**
     * Creates an instance of BpPaymentDateField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpPaymentDate {
    /**
     * Metadata information on all properties of the `BpPaymentDate` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpPaymentDate>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpPaymentDate;
}
//# sourceMappingURL=BpPaymentDate.d.ts.map