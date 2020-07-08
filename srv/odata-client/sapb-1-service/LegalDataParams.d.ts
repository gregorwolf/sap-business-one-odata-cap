import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LegalDataParams
 */
export interface LegalDataParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Source Object Type.
     * @nullable
     */
    sourceObjectType?: string;
    /**
     * Source Object Entry.
     * @nullable
     */
    sourceObjectEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LegalDataParams.build]] instead.
 */
export declare function createLegalDataParams(json: any): LegalDataParams;
/**
 * LegalDataParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LegalDataParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LegalDataParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataParams.sourceObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObjectType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LegalDataParams.sourceObjectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObjectEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace LegalDataParams {
    function build(json: {
        [keys: string]: FieldType;
    }): LegalDataParams;
}
//# sourceMappingURL=LegalDataParams.d.ts.map