import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * KpiParams
 */
export interface KpiParams {
    /**
     * Kpi Code.
     * @nullable
     */
    kpiCode?: string;
    /**
     * Kpi Name.
     * @nullable
     */
    kpiName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[KpiParams.build]] instead.
 */
export declare function createKpiParams(json: any): KpiParams;
/**
 * KpiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class KpiParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[KpiParams.kpiCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[KpiParams.kpiName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace KpiParams {
    function build(json: {
        [keys: string]: FieldType;
    }): KpiParams;
}
//# sourceMappingURL=KpiParams.d.ts.map