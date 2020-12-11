import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ActivityInstanceParams
 */
export interface ActivityInstanceParams {
    /**
     * Activity Code.
     * @nullable
     */
    activityCode?: number;
    /**
     * Instance Date.
     * @nullable
     */
    instanceDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityInstanceParams.build]] instead.
 */
export declare function createActivityInstanceParams(json: any): ActivityInstanceParams;
/**
 * ActivityInstanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityInstanceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityInstanceParams> {
    /**
     * Representation of the [[ActivityInstanceParams.activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityInstanceParams.instanceDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instanceDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of ActivityInstanceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityInstanceParams {
    /**
     * Metadata information on all properties of the `ActivityInstanceParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityInstanceParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityInstanceParams;
}
//# sourceMappingURL=ActivityInstanceParams.d.ts.map