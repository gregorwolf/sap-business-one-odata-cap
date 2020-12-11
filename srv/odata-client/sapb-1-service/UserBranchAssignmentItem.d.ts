import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserBranchAssignmentItem
 */
export interface UserBranchAssignmentItem {
    /**
     * User Code.
     * @nullable
     */
    userCode?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserBranchAssignmentItem.build]] instead.
 */
export declare function createUserBranchAssignmentItem(json: any): UserBranchAssignmentItem;
/**
 * UserBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserBranchAssignmentItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserBranchAssignmentItem> {
    /**
     * Representation of the [[UserBranchAssignmentItem.userCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserBranchAssignmentItem.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of UserBranchAssignmentItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserBranchAssignmentItem {
    /**
     * Metadata information on all properties of the `UserBranchAssignmentItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserBranchAssignmentItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserBranchAssignmentItem;
}
//# sourceMappingURL=UserBranchAssignmentItem.d.ts.map