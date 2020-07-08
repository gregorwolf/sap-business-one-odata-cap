import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class UserPermissionTreeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserPermissionTreeParams.permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    permissionId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserPermissionTreeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserPermissionTreeParams;
}
//# sourceMappingURL=UserPermissionTreeParams.d.ts.map