import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TableInfo
 */
export interface TableInfo {
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TableInfo.build]] instead.
 */
export declare function createTableInfo(json: any): TableInfo;
/**
 * TableInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TableInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TableInfo> {
    /**
     * Representation of the [[TableInfo.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TableInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TableInfo {
    /**
     * Metadata information on all properties of the `TableInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TableInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TableInfo;
}
//# sourceMappingURL=TableInfo.d.ts.map