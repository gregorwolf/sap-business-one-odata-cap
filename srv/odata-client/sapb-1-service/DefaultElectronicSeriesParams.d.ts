import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DefaultElectronicSeriesParams
 */
export interface DefaultElectronicSeriesParams {
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Electronic Series.
     * @nullable
     */
    electronicSeries?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DefaultElectronicSeriesParams.build]] instead.
 */
export declare function createDefaultElectronicSeriesParams(json: any): DefaultElectronicSeriesParams;
/**
 * DefaultElectronicSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DefaultElectronicSeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DefaultElectronicSeriesParams.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DefaultElectronicSeriesParams.electronicSeries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    electronicSeries: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DefaultElectronicSeriesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DefaultElectronicSeriesParams;
}
//# sourceMappingURL=DefaultElectronicSeriesParams.d.ts.map