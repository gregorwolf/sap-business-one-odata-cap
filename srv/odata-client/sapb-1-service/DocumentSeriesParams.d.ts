import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DocumentSeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace DocumentSeriesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentSeriesParams;
}
//# sourceMappingURL=DocumentSeriesParams.d.ts.map