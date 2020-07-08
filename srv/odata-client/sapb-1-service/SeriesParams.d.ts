import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SeriesParams
 */
export interface SeriesParams {
    /**
     * Series.
     * @nullable
     */
    series?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SeriesParams.build]] instead.
 */
export declare function createSeriesParams(json: any): SeriesParams;
/**
 * SeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SeriesParams.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SeriesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SeriesParams;
}
//# sourceMappingURL=SeriesParams.d.ts.map