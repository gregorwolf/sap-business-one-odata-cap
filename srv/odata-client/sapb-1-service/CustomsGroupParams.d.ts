import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CustomsGroupParams
 */
export interface CustomsGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Port Address.
     * @nullable
     */
    portAddress?: string;
    /**
     * Port State.
     * @nullable
     */
    portState?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CustomsGroupParams.build]] instead.
 */
export declare function createCustomsGroupParams(json: any): CustomsGroupParams;
/**
 * CustomsGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CustomsGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CustomsGroupParams> {
    /**
     * Representation of the [[CustomsGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CustomsGroupParams.portAddress]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portAddress: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CustomsGroupParams.portState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CustomsGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CustomsGroupParams {
    /**
     * Metadata information on all properties of the `CustomsGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CustomsGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CustomsGroupParams;
}
//# sourceMappingURL=CustomsGroupParams.d.ts.map