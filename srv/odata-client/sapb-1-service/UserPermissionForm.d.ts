import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserPermissionForm
 */
export interface UserPermissionForm {
    /**
     * Form Type.
     * @nullable
     */
    formType?: string;
    /**
     * Display Order.
     * @nullable
     */
    displayOrder?: number;
    /**
     * Permission Id.
     * @nullable
     */
    permissionId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionForm.build]] instead.
 */
export declare function createUserPermissionForm(json: any): UserPermissionForm;
/**
 * UserPermissionFormField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserPermissionFormField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserPermissionForm.formType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserPermissionForm.displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserPermissionForm.permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    permissionId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserPermissionForm {
    function build(json: {
        [keys: string]: FieldType;
    }): UserPermissionForm;
}
//# sourceMappingURL=UserPermissionForm.d.ts.map