import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WeightMeasureParams
 */
export interface WeightMeasureParams {
    /**
     * Unit Code.
     * @nullable
     */
    unitCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WeightMeasureParams.build]] instead.
 */
export declare function createWeightMeasureParams(json: any): WeightMeasureParams;
/**
 * WeightMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WeightMeasureParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WeightMeasureParams.unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace WeightMeasureParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WeightMeasureParams;
}
//# sourceMappingURL=WeightMeasureParams.d.ts.map