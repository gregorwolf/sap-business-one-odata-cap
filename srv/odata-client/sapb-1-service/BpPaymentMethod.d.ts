import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BpPaymentMethodField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpPaymentMethod> {
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
    /**
     * Creates an instance of BpPaymentMethodField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpPaymentMethod {
    /**
     * Metadata information on all properties of the `BpPaymentMethod` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpPaymentMethod>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpPaymentMethod;
}
//# sourceMappingURL=BpPaymentMethod.d.ts.map