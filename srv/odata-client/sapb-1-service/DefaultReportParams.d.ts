import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class DefaultReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DefaultReportParams> {
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
    /**
     * Creates an instance of DefaultReportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DefaultReportParams {
    /**
     * Metadata information on all properties of the `DefaultReportParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DefaultReportParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DefaultReportParams;
}
//# sourceMappingURL=DefaultReportParams.d.ts.map