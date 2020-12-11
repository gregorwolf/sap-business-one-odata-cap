import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class KpiParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, KpiParams> {
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
    /**
     * Creates an instance of KpiParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace KpiParams {
    /**
     * Metadata information on all properties of the `KpiParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<KpiParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): KpiParams;
}
//# sourceMappingURL=KpiParams.d.ts.map