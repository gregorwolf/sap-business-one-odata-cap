import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * Attachments2Line
 */
export interface Attachments2Line {
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
     * Attachment Date.
     * @nullable
     */
    attachmentDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[Attachments2Line.build]] instead.
 */
export declare function createAttachments2Line(json: any): Attachments2Line;
/**
 * Attachments2LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Attachments2LineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Attachments2Line.sourcePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourcePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Attachments2Line.fileName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Attachments2Line.fileExtension]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileExtension: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Attachments2Line.attachmentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachmentDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace Attachments2Line {
    function build(json: {
        [keys: string]: FieldType;
    }): Attachments2Line;
}
//# sourceMappingURL=Attachments2Line.d.ts.map