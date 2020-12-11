import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ActivityParams
 */
export interface ActivityParams {
    /**
     * Activity Code.
     * @nullable
     */
    activityCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityParams.build]] instead.
 */
export declare function createActivityParams(json: any): ActivityParams;
/**
 * ActivityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityParams> {
    /**
     * Representation of the [[ActivityParams.activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ActivityParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityParams {
    /**
     * Metadata information on all properties of the `ActivityParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityParams;
}
//# sourceMappingURL=ActivityParams.d.ts.map