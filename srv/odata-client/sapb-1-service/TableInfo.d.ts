import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class TableInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TableInfo.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TableInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): TableInfo;
}
//# sourceMappingURL=TableInfo.d.ts.map