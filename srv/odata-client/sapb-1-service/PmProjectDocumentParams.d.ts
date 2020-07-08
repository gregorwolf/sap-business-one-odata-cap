import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmProjectDocumentParams
 */
export interface PmProjectDocumentParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmProjectDocumentParams.build]] instead.
 */
export declare function createPmProjectDocumentParams(json: any): PmProjectDocumentParams;
/**
 * PmProjectDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmProjectDocumentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmProjectDocumentParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmProjectDocumentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PmProjectDocumentParams;
}
//# sourceMappingURL=PmProjectDocumentParams.d.ts.map