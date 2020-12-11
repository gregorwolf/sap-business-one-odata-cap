import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ElectronicFileFormatParams
 */
export interface ElectronicFileFormatParams {
    /**
     * Format Id.
     * @nullable
     */
    formatId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ElectronicFileFormatParams.build]] instead.
 */
export declare function createElectronicFileFormatParams(json: any): ElectronicFileFormatParams;
/**
 * ElectronicFileFormatParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ElectronicFileFormatParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ElectronicFileFormatParams> {
    /**
     * Representation of the [[ElectronicFileFormatParams.formatId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formatId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ElectronicFileFormatParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ElectronicFileFormatParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ElectronicFileFormatParams {
    /**
     * Metadata information on all properties of the `ElectronicFileFormatParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ElectronicFileFormatParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ElectronicFileFormatParams;
}
//# sourceMappingURL=ElectronicFileFormatParams.d.ts.map