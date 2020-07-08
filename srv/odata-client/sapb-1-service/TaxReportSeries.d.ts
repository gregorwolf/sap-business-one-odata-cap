import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxReportSeries
 */
export interface TaxReportSeries {
    /**
     * Series Code.
     * @nullable
     */
    seriesCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxReportSeries.build]] instead.
 */
export declare function createTaxReportSeries(json: any): TaxReportSeries;
/**
 * TaxReportSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxReportSeriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxReportSeries.seriesCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    seriesCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TaxReportSeries {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxReportSeries;
}
//# sourceMappingURL=TaxReportSeries.d.ts.map