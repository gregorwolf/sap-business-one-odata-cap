import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceCallActivity
 */
export interface ServiceCallActivity {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Activity Code.
     * @nullable
     */
    activityCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallActivity.build]] instead.
 */
export declare function createServiceCallActivity(json: any): ServiceCallActivity;
/**
 * ServiceCallActivityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallActivityField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallActivity> {
    /**
     * Representation of the [[ServiceCallActivity.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallActivity.activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceCallActivityField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallActivity {
    /**
     * Metadata information on all properties of the `ServiceCallActivity` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallActivity>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallActivity;
}
//# sourceMappingURL=ServiceCallActivity.d.ts.map