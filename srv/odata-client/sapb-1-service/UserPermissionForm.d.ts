import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class UserPermissionFormField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserPermissionForm> {
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
    /**
     * Creates an instance of UserPermissionFormField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserPermissionForm {
    /**
     * Metadata information on all properties of the `UserPermissionForm` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserPermissionForm>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserPermissionForm;
}
//# sourceMappingURL=UserPermissionForm.d.ts.map