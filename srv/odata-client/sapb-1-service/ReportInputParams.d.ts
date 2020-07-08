import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportInputParams
 */
export interface ReportInputParams {
    /**
     * Report Layout Menu Id.
     * @nullable
     */
    reportLayoutMenuId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportInputParams.build]] instead.
 */
export declare function createReportInputParams(json: any): ReportInputParams;
/**
 * ReportInputParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportInputParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportInputParams.reportLayoutMenuId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportLayoutMenuId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ReportInputParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ReportInputParams;
}
//# sourceMappingURL=ReportInputParams.d.ts.map