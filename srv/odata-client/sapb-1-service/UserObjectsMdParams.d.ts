import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserObjectsMdParams
 */
export interface UserObjectsMdParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectsMdParams.build]] instead.
 */
export declare function createUserObjectsMdParams(json: any): UserObjectsMdParams;
/**
 * UserObjectsMdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectsMdParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectsMdParams> {
    /**
     * Representation of the [[UserObjectsMdParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserObjectsMdParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserObjectsMdParams {
    /**
     * Metadata information on all properties of the `UserObjectsMdParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserObjectsMdParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectsMdParams;
}
//# sourceMappingURL=UserObjectsMdParams.d.ts.map