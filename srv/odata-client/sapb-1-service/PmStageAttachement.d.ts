import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmStageAttachement
 */
export interface PmStageAttachement {
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
 * @deprecated Since v1.6.0. Use [[PmStageAttachement.build]] instead.
 */
export declare function createPmStageAttachement(json: any): PmStageAttachement;
/**
 * PmStageAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmStageAttachementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmStageAttachement> {
    /**
     * Representation of the [[PmStageAttachement.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageAttachement.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageAttachement.sourcePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourcePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageAttachement.fileName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageAttachement.fileExtension]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileExtension: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageAttachement.attachementDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachementDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of PmStageAttachementField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmStageAttachement {
    /**
     * Metadata information on all properties of the `PmStageAttachement` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmStageAttachement>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmStageAttachement;
}
//# sourceMappingURL=PmStageAttachement.d.ts.map