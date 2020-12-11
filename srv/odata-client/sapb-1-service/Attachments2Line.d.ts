import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * User Id.
     * @nullable
     */
    userId?: BoYesNoEnum;
    /**
     * Override.
     * @nullable
     */
    override?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[Attachments2Line.build]] instead.
 */
export declare function createAttachments2Line(json: any): Attachments2Line;
/**
 * Attachments2LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Attachments2LineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Attachments2Line> {
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
    /**
     * Representation of the [[Attachments2Line.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Attachments2Line.override]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    override: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of Attachments2LineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Attachments2Line {
    /**
     * Metadata information on all properties of the `Attachments2Line` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Attachments2Line>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Attachments2Line;
}
//# sourceMappingURL=Attachments2Line.d.ts.map