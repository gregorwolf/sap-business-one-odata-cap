import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportLayoutPrintParams
 */
export interface ReportLayoutPrintParams {
    /**
     * Layout Code.
     * @nullable
     */
    layoutCode?: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutPrintParams.build]] instead.
 */
export declare function createReportLayoutPrintParams(json: any): ReportLayoutPrintParams;
/**
 * ReportLayoutPrintParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutPrintParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportLayoutPrintParams.layoutCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutPrintParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ReportLayoutPrintParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutPrintParams;
}
//# sourceMappingURL=ReportLayoutPrintParams.d.ts.map