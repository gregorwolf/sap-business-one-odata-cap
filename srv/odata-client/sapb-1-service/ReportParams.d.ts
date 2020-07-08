import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportParams
 */
export interface ReportParams {
    /**
     * Report Code.
     * @nullable
     */
    reportCode?: string;
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportParams.build]] instead.
 */
export declare function createReportParams(json: any): ReportParams;
/**
 * ReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportParams.reportCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportParams.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ReportParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ReportParams;
}
//# sourceMappingURL=ReportParams.d.ts.map