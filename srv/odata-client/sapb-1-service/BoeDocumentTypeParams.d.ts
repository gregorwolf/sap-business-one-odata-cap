import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BoeDocumentTypeParams
 */
export interface BoeDocumentTypeParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Doc Type.
     * @nullable
     */
    docType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BoeDocumentTypeParams.build]] instead.
 */
export declare function createBoeDocumentTypeParams(json: any): BoeDocumentTypeParams;
/**
 * BoeDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeDocumentTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BoeDocumentTypeParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeDocumentTypeParams.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BoeDocumentTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BoeDocumentTypeParams;
}
//# sourceMappingURL=BoeDocumentTypeParams.d.ts.map