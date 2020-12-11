import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ApprovalTemplateUser
 */
export interface ApprovalTemplateUser {
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateUser.build]] instead.
 */
export declare function createApprovalTemplateUser(json: any): ApprovalTemplateUser;
/**
 * ApprovalTemplateUserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateUserField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateUser> {
    /**
     * Representation of the [[ApprovalTemplateUser.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalTemplateUserField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalTemplateUser {
    /**
     * Metadata information on all properties of the `ApprovalTemplateUser` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalTemplateUser>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateUser;
}
//# sourceMappingURL=ApprovalTemplateUser.d.ts.map