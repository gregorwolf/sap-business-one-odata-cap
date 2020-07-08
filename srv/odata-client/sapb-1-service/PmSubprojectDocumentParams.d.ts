import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmSubprojectDocumentParams
 */
export interface PmSubprojectDocumentParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectDocumentParams.build]] instead.
 */
export declare function createPmSubprojectDocumentParams(json: any): PmSubprojectDocumentParams;
/**
 * PmSubprojectDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmSubprojectDocumentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmSubprojectDocumentParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmSubprojectDocumentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PmSubprojectDocumentParams;
}
//# sourceMappingURL=PmSubprojectDocumentParams.d.ts.map