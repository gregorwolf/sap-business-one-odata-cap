import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmDocumentData
 */
export interface PmDocumentData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Doc Date.
     * @nullable
     */
    docDate?: Moment;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmDocumentData.build]] instead.
 */
export declare function createPmDocumentData(json: any): PmDocumentData;
/**
 * PmDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmDocumentDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmDocumentData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.docDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocumentData.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmDocumentData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmDocumentData;
}
//# sourceMappingURL=PmDocumentData.d.ts.map