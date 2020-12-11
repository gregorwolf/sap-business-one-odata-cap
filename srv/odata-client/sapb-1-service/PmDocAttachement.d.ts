import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmDocAttachement
 */
export interface PmDocAttachement {
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
 * @deprecated Since v1.6.0. Use [[PmDocAttachement.build]] instead.
 */
export declare function createPmDocAttachement(json: any): PmDocAttachement;
/**
 * PmDocAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmDocAttachementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmDocAttachement> {
    /**
     * Representation of the [[PmDocAttachement.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocAttachement.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocAttachement.sourcePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourcePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocAttachement.fileName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocAttachement.fileExtension]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileExtension: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmDocAttachement.attachementDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachementDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of PmDocAttachementField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmDocAttachement {
    /**
     * Metadata information on all properties of the `PmDocAttachement` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmDocAttachement>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmDocAttachement;
}
//# sourceMappingURL=PmDocAttachement.d.ts.map