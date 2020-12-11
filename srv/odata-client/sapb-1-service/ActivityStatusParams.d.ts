import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ActivityStatusParams
 */
export interface ActivityStatusParams {
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityStatusParams.build]] instead.
 */
export declare function createActivityStatusParams(json: any): ActivityStatusParams;
/**
 * ActivityStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityStatusParams> {
    /**
     * Representation of the [[ActivityStatusParams.statusId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ActivityStatusParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityStatusParams {
    /**
     * Metadata information on all properties of the `ActivityStatusParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityStatusParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityStatusParams;
}
//# sourceMappingURL=ActivityStatusParams.d.ts.map