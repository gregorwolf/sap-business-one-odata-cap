import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CustomerEquipmentCardParams
 */
export interface CustomerEquipmentCardParams {
    /**
     * Equipment Card Num.
     * @nullable
     */
    equipmentCardNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CustomerEquipmentCardParams.build]] instead.
 */
export declare function createCustomerEquipmentCardParams(json: any): CustomerEquipmentCardParams;
/**
 * CustomerEquipmentCardParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CustomerEquipmentCardParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CustomerEquipmentCardParams> {
    /**
     * Representation of the [[CustomerEquipmentCardParams.equipmentCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equipmentCardNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CustomerEquipmentCardParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CustomerEquipmentCardParams {
    /**
     * Metadata information on all properties of the `CustomerEquipmentCardParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CustomerEquipmentCardParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CustomerEquipmentCardParams;
}
//# sourceMappingURL=CustomerEquipmentCardParams.d.ts.map