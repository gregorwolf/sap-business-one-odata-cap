import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WipMapping
 */
export interface WipMapping {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Account From.
     * @nullable
     */
    accountFrom?: string;
    /**
     * Account To.
     * @nullable
     */
    accountTo?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WipMapping.build]] instead.
 */
export declare function createWipMapping(json: any): WipMapping;
/**
 * WipMappingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WipMappingField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WipMapping> {
    /**
     * Representation of the [[WipMapping.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WipMapping.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WipMapping.accountFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountFrom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WipMapping.accountTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountTo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of WipMappingField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WipMapping {
    /**
     * Metadata information on all properties of the `WipMapping` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WipMapping>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WipMapping;
}
//# sourceMappingURL=WipMapping.d.ts.map