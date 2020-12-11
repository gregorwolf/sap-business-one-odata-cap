import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserLanguageParams
 */
export interface UserLanguageParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserLanguageParams.build]] instead.
 */
export declare function createUserLanguageParams(json: any): UserLanguageParams;
/**
 * UserLanguageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserLanguageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserLanguageParams> {
    /**
     * Representation of the [[UserLanguageParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of UserLanguageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserLanguageParams {
    /**
     * Metadata information on all properties of the `UserLanguageParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserLanguageParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserLanguageParams;
}
//# sourceMappingURL=UserLanguageParams.d.ts.map