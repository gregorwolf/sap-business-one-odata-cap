import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportLayoutParams
 */
export interface ReportLayoutParams {
    /**
     * Layout Code.
     * @nullable
     */
    layoutCode?: string;
    /**
     * Layout Name.
     * @nullable
     */
    layoutName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutParams.build]] instead.
 */
export declare function createReportLayoutParams(json: any): ReportLayoutParams;
/**
 * ReportLayoutParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportLayoutParams.layoutCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutParams.layoutName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ReportLayoutParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutParams;
}
//# sourceMappingURL=ReportLayoutParams.d.ts.map