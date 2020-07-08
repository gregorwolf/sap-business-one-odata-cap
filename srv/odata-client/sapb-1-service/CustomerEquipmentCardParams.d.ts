import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class CustomerEquipmentCardParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CustomerEquipmentCardParams.equipmentCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equipmentCardNum: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CustomerEquipmentCardParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CustomerEquipmentCardParams;
}
//# sourceMappingURL=CustomerEquipmentCardParams.d.ts.map