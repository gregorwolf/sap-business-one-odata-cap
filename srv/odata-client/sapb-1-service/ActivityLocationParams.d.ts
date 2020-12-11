import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ActivityLocationParams
 */
export interface ActivityLocationParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityLocationParams.build]] instead.
 */
export declare function createActivityLocationParams(json: any): ActivityLocationParams;
/**
 * ActivityLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityLocationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityLocationParams> {
    /**
     * Representation of the [[ActivityLocationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ActivityLocationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityLocationParams {
    /**
     * Metadata information on all properties of the `ActivityLocationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityLocationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityLocationParams;
}
//# sourceMappingURL=ActivityLocationParams.d.ts.map