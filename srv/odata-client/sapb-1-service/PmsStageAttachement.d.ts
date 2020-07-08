import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmsStageAttachement
 */
export interface PmsStageAttachement {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Source Path.
     * @nullable
     */
    sourcePath?: string;
    /**
     * File Name.
     * @nullable
     */
    fileName?: string;
    /**
     * File Extension.
     * @nullable
     */
    fileExtension?: string;
    /**
     * Attachement Date.
     * @nullable
     */
    attachementDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[PmsStageAttachement.build]] instead.
 */
export declare function createPmsStageAttachement(json: any): PmsStageAttachement;
/**
 * PmsStageAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsStageAttachementField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmsStageAttachement.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageAttachement.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageAttachement.sourcePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourcePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageAttachement.fileName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageAttachement.fileExtension]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileExtension: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageAttachement.attachementDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachementDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace PmsStageAttachement {
    function build(json: {
        [keys: string]: FieldType;
    }): PmsStageAttachement;
}
//# sourceMappingURL=PmsStageAttachement.d.ts.map