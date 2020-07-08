import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DocumentSeriesUserParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace DocumentSeriesUserParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentSeriesUserParams;
}
//# sourceMappingURL=DocumentSeriesUserParams.d.ts.map