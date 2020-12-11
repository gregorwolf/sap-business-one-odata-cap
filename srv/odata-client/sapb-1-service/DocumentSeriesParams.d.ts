import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentSeriesParams
 */
export interface DocumentSeriesParams {
    /**
     * Document.
     * @nullable
     */
    document?: string;
    /**
     * Document Sub Type.
     * @nullable
     */
    documentSubType?: string;
    /**
     * Series.
     * @nullable
     */
    series?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesParams.build]] instead.
 */
export declare function createDocumentSeriesParams(json: any): DocumentSeriesParams;
/**
 * DocumentSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentSeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentSeriesParams> {
    /**
     * Representation of the [[DocumentSeriesParams.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSeriesParams.documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentSubType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSeriesParams.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentSeriesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentSeriesParams {
    /**
     * Metadata information on all properties of the `DocumentSeriesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentSeriesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentSeriesParams;
}
//# sourceMappingURL=DocumentSeriesParams.d.ts.map