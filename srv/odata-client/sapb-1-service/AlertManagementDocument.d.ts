import { AlertManagementDocumentEnum } from './AlertManagementDocumentEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AlertManagementDocument
 */
export interface AlertManagementDocument {
    /**
     * Document.
     * @nullable
     */
    document?: AlertManagementDocumentEnum;
    /**
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementDocument.build]] instead.
 */
export declare function createAlertManagementDocument(json: any): AlertManagementDocument;
/**
 * AlertManagementDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlertManagementDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlertManagementDocument> {
    /**
     * Representation of the [[AlertManagementDocument.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AlertManagementDocument.active]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    active: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of AlertManagementDocumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AlertManagementDocument {
    /**
     * Metadata information on all properties of the `AlertManagementDocument` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AlertManagementDocument>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AlertManagementDocument;
}
//# sourceMappingURL=AlertManagementDocument.d.ts.map