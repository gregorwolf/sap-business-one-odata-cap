import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ResourceWarehouse
 */
export interface ResourceWarehouse {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceWarehouse.build]] instead.
 */
export declare function createResourceWarehouse(json: any): ResourceWarehouse;
/**
 * ResourceWarehouseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceWarehouseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceWarehouse> {
    /**
     * Representation of the [[ResourceWarehouse.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceWarehouse.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceWarehouse.locked]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locked: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ResourceWarehouseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourceWarehouse {
    /**
     * Metadata information on all properties of the `ResourceWarehouse` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourceWarehouse>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceWarehouse;
}
//# sourceMappingURL=ResourceWarehouse.d.ts.map