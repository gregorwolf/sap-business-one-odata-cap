import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WarehouseLocationParams
 */
export interface WarehouseLocationParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WarehouseLocationParams.build]] instead.
 */
export declare function createWarehouseLocationParams(json: any): WarehouseLocationParams;
/**
 * WarehouseLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WarehouseLocationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WarehouseLocationParams> {
    /**
     * Representation of the [[WarehouseLocationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of WarehouseLocationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WarehouseLocationParams {
    /**
     * Metadata information on all properties of the `WarehouseLocationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WarehouseLocationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WarehouseLocationParams;
}
//# sourceMappingURL=WarehouseLocationParams.d.ts.map