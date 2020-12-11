import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class QueueParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueueParams> {
    /**
     * Representation of the [[QueueParams.queueId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queueId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of QueueParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace QueueParams {
    /**
     * Metadata information on all properties of the `QueueParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<QueueParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): QueueParams;
}
//# sourceMappingURL=QueueParams.d.ts.map