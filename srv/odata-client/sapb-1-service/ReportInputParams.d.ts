import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ReportInputParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportInputParams> {
    /**
     * Representation of the [[ReportInputParams.reportLayoutMenuId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportLayoutMenuId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ReportInputParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReportInputParams {
    /**
     * Metadata information on all properties of the `ReportInputParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReportInputParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReportInputParams;
}
//# sourceMappingURL=ReportInputParams.d.ts.map