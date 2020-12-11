import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ColumnsPreferencesParams
 */
export interface ColumnsPreferencesParams {
    /**
     * User.
     * @nullable
     */
    user?: number;
    /**
     * Form Id.
     * @nullable
     */
    formId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ColumnsPreferencesParams.build]] instead.
 */
export declare function createColumnsPreferencesParams(json: any): ColumnsPreferencesParams;
/**
 * ColumnsPreferencesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ColumnsPreferencesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ColumnsPreferencesParams> {
    /**
     * Representation of the [[ColumnsPreferencesParams.user]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    user: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ColumnsPreferencesParams.formId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ColumnsPreferencesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ColumnsPreferencesParams {
    /**
     * Metadata information on all properties of the `ColumnsPreferencesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ColumnsPreferencesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ColumnsPreferencesParams;
}
//# sourceMappingURL=ColumnsPreferencesParams.d.ts.map