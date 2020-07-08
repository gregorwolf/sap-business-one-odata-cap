import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * QueueParams
 */
export interface QueueParams {
    /**
     * Queue Id.
     * @nullable
     */
    queueId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[QueueParams.build]] instead.
 */
export declare function createQueueParams(json: any): QueueParams;
/**
 * QueueParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class QueueParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[QueueParams.queueId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queueId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace QueueParams {
    function build(json: {
        [keys: string]: FieldType;
    }): QueueParams;
}
//# sourceMappingURL=QueueParams.d.ts.map