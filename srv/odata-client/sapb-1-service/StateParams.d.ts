import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * StateParams
 */
export interface StateParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[StateParams.build]] instead.
 */
export declare function createStateParams(json: any): StateParams;
/**
 * StateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StateParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StateParams> {
    /**
     * Representation of the [[StateParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StateParams.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StateParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of StateParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace StateParams {
    /**
     * Metadata information on all properties of the `StateParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<StateParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): StateParams;
}
//# sourceMappingURL=StateParams.d.ts.map