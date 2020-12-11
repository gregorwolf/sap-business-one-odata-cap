import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ReportLayoutPrintParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutPrintParams> {
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
    /**
     * Creates an instance of ReportLayoutPrintParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReportLayoutPrintParams {
    /**
     * Metadata information on all properties of the `ReportLayoutPrintParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReportLayoutPrintParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutPrintParams;
}
//# sourceMappingURL=ReportLayoutPrintParams.d.ts.map