import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ElectronicSeriesParams
 */
export interface ElectronicSeriesParams {
    /**
     * Electronic Series.
     * @nullable
     */
    electronicSeries?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ElectronicSeriesParams.build]] instead.
 */
export declare function createElectronicSeriesParams(json: any): ElectronicSeriesParams;
/**
 * ElectronicSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ElectronicSeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ElectronicSeriesParams.electronicSeries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    electronicSeries: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ElectronicSeriesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ElectronicSeriesParams;
}
//# sourceMappingURL=ElectronicSeriesParams.d.ts.map