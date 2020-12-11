import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportParams> {
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
    /**
     * Creates an instance of ReportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReportParams {
    /**
     * Metadata information on all properties of the `ReportParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReportParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReportParams;
}
//# sourceMappingURL=ReportParams.d.ts.map