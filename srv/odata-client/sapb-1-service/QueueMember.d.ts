import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class QueueMemberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace QueueMember {
    function build(json: {
        [keys: string]: FieldType;
    }): QueueMember;
}
//# sourceMappingURL=QueueMember.d.ts.map