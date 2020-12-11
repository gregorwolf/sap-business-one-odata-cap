import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserGroupParams
 */
export interface UserGroupParams {
    /**
     * User Group Id.
     * @nullable
     */
    userGroupId?: number;
    /**
     * User Group Name.
     * @nullable
     */
    userGroupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserGroupParams.build]] instead.
 */
export declare function createUserGroupParams(json: any): UserGroupParams;
/**
 * UserGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserGroupParams> {
    /**
     * Representation of the [[UserGroupParams.userGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userGroupId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserGroupParams.userGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userGroupName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserGroupParams {
    /**
     * Metadata information on all properties of the `UserGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserGroupParams;
}
//# sourceMappingURL=UserGroupParams.d.ts.map