import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserParams
 */
export interface UserParams {
    /**
     * Internal Key.
     * @nullable
     */
    internalKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserParams.build]] instead.
 */
export declare function createUserParams(json: any): UserParams;
/**
 * UserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserParams> {
    /**
     * Representation of the [[UserParams.internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of UserParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserParams {
    /**
     * Metadata information on all properties of the `UserParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserParams;
}
//# sourceMappingURL=UserParams.d.ts.map