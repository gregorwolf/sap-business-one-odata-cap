import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentSeriesUserParams
 */
export interface DocumentSeriesUserParams {
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
    /**
     * User.
     * @nullable
     */
    user?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesUserParams.build]] instead.
 */
export declare function createDocumentSeriesUserParams(json: any): DocumentSeriesUserParams;
/**
 * DocumentSeriesUserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentSeriesUserParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentSeriesUserParams> {
    /**
     * Representation of the [[DocumentSeriesUserParams.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSeriesUserParams.documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentSubType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSeriesUserParams.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSeriesUserParams.user]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    user: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentSeriesUserParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentSeriesUserParams {
    /**
     * Metadata information on all properties of the `DocumentSeriesUserParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentSeriesUserParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentSeriesUserParams;
}
//# sourceMappingURL=DocumentSeriesUserParams.d.ts.map