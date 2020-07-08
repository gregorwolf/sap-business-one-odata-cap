import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmsDocumentData
 */
export interface PmsDocumentData {
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
 * @deprecated Since v1.6.0. Use [[PmsDocumentData.build]] instead.
 */
export declare function createPmsDocumentData(json: any): PmsDocumentData;
/**
 * PmsDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsDocumentDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmsDocumentData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.docDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsDocumentData.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmsDocumentData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmsDocumentData;
}
//# sourceMappingURL=PmsDocumentData.d.ts.map