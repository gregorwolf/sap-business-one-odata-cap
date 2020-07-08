import { ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AlertManagementDocument
 */
export interface AlertManagementDocument {
}
/**
 * @deprecated Since v1.6.0. Use [[AlertManagementDocument.build]] instead.
 */
export declare function createAlertManagementDocument(json: any): AlertManagementDocument;
/**
 * AlertManagementDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlertManagementDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}
export declare namespace AlertManagementDocument {
    function build(json: {
        [keys: string]: FieldType;
    }): AlertManagementDocument;
}
//# sourceMappingURL=AlertManagementDocument.d.ts.map