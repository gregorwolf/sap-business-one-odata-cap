import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserDefaultGroupParams
 */
export interface UserDefaultGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserDefaultGroupParams.build]] instead.
 */
export declare function createUserDefaultGroupParams(json: any): UserDefaultGroupParams;
/**
 * UserDefaultGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserDefaultGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserDefaultGroupParams> {
    /**
     * Representation of the [[UserDefaultGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserDefaultGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserDefaultGroupParams {
    /**
     * Metadata information on all properties of the `UserDefaultGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserDefaultGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserDefaultGroupParams;
}
//# sourceMappingURL=UserDefaultGroupParams.d.ts.map