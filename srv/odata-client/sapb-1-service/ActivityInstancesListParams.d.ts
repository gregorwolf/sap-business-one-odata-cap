import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ActivityInstancesListParams
 */
export interface ActivityInstancesListParams {
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Instance Count.
     * @nullable
     */
    instanceCount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstancesListParams.build]] instead.
 */
export declare function createActivityInstancesListParams(json: any): ActivityInstancesListParams;
/**
 * ActivityInstancesListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityInstancesListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityInstancesListParams> {
    /**
     * Representation of the [[ActivityInstancesListParams.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ActivityInstancesListParams.instanceCount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instanceCount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ActivityInstancesListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityInstancesListParams {
    /**
     * Metadata information on all properties of the `ActivityInstancesListParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityInstancesListParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityInstancesListParams;
}
//# sourceMappingURL=ActivityInstancesListParams.d.ts.map