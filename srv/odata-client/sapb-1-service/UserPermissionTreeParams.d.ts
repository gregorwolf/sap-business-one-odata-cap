import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserPermissionTreeParams
 */
export interface UserPermissionTreeParams {
    /**
     * Permission Id.
     * @nullable
     */
    permissionId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionTreeParams.build]] instead.
 */
export declare function createUserPermissionTreeParams(json: any): UserPermissionTreeParams;
/**
 * UserPermissionTreeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserPermissionTreeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserPermissionTreeParams> {
    /**
     * Representation of the [[UserPermissionTreeParams.permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    permissionId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserPermissionTreeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserPermissionTreeParams {
    /**
     * Metadata information on all properties of the `UserPermissionTreeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserPermissionTreeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserPermissionTreeParams;
}
//# sourceMappingURL=UserPermissionTreeParams.d.ts.map