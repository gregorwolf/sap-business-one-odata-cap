import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TerritoryParams
 */
export interface TerritoryParams {
    /**
     * Territory Id.
     * @nullable
     */
    territoryId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TerritoryParams.build]] instead.
 */
export declare function createTerritoryParams(json: any): TerritoryParams;
/**
 * TerritoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TerritoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TerritoryParams> {
    /**
     * Representation of the [[TerritoryParams.territoryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    territoryId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TerritoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TerritoryParams {
    /**
     * Metadata information on all properties of the `TerritoryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TerritoryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TerritoryParams;
}
//# sourceMappingURL=TerritoryParams.d.ts.map