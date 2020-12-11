import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * IndiaSacCodeParams
 */
export interface IndiaSacCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Service Code.
     * @nullable
     */
    serviceCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[IndiaSacCodeParams.build]] instead.
 */
export declare function createIndiaSacCodeParams(json: any): IndiaSacCodeParams;
/**
 * IndiaSacCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IndiaSacCodeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IndiaSacCodeParams> {
    /**
     * Representation of the [[IndiaSacCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IndiaSacCodeParams.serviceCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of IndiaSacCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace IndiaSacCodeParams {
    /**
     * Metadata information on all properties of the `IndiaSacCodeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<IndiaSacCodeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): IndiaSacCodeParams;
}
//# sourceMappingURL=IndiaSacCodeParams.d.ts.map