import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class TerritoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TerritoryParams.territoryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    territoryId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TerritoryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TerritoryParams;
}
//# sourceMappingURL=TerritoryParams.d.ts.map