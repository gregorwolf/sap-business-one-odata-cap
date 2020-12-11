import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * QueueMember
 */
export interface QueueMember {
    /**
     * Queue Id.
     * @nullable
     */
    queueId?: string;
    /**
     * Member User Id.
     * @nullable
     */
    memberUserId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[QueueMember.build]] instead.
 */
export declare function createQueueMember(json: any): QueueMember;
/**
 * QueueMemberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class QueueMemberField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueueMember> {
    /**
     * Representation of the [[QueueMember.queueId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queueId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[QueueMember.memberUserId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    memberUserId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of QueueMemberField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace QueueMember {
    /**
     * Metadata information on all properties of the `QueueMember` complex type.
     */
    const _propertyMetadata: PropertyMetadata<QueueMember>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): QueueMember;
}
//# sourceMappingURL=QueueMember.d.ts.map