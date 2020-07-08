import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentParams
 */
export interface DocumentParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentParams.build]] instead.
 */
export declare function createDocumentParams(json: any): DocumentParams;
/**
 * DocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DocumentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentParams;
}
//# sourceMappingURL=DocumentParams.d.ts.map