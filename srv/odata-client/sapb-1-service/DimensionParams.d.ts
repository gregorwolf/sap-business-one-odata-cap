import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DimensionParams
 */
export interface DimensionParams {
    /**
     * Dimension Code.
     * @nullable
     */
    dimensionCode?: number;
    /**
     * Dimension Name.
     * @nullable
     */
    dimensionName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DimensionParams.build]] instead.
 */
export declare function createDimensionParams(json: any): DimensionParams;
/**
 * DimensionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DimensionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DimensionParams.dimensionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dimensionCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DimensionParams.dimensionName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dimensionName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DimensionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DimensionParams;
}
//# sourceMappingURL=DimensionParams.d.ts.map