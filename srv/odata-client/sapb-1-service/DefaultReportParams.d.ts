import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DefaultReportParams
 */
export interface DefaultReportParams {
    /**
     * Report Code.
     * @nullable
     */
    reportCode?: string;
    /**
     * Layout Code.
     * @nullable
     */
    layoutCode?: string;
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
 * @deprecated Since v1.6.0. Use [[DefaultReportParams.build]] instead.
 */
export declare function createDefaultReportParams(json: any): DefaultReportParams;
/**
 * DefaultReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DefaultReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DefaultReportParams.reportCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DefaultReportParams.layoutCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DefaultReportParams.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DefaultReportParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DefaultReportParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DefaultReportParams;
}
//# sourceMappingURL=DefaultReportParams.d.ts.map