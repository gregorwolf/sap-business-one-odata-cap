import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SerialNumberDetailParams
 */
export interface SerialNumberDetailParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SerialNumberDetailParams.build]] instead.
 */
export declare function createSerialNumberDetailParams(json: any): SerialNumberDetailParams;
/**
 * SerialNumberDetailParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SerialNumberDetailParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SerialNumberDetailParams> {
    /**
     * Representation of the [[SerialNumberDetailParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SerialNumberDetailParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SerialNumberDetailParams {
    /**
     * Metadata information on all properties of the `SerialNumberDetailParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SerialNumberDetailParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SerialNumberDetailParams;
}
//# sourceMappingURL=SerialNumberDetailParams.d.ts.map