import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserTableParams
 */
export interface UserTableParams {
    /**
     * Table Type.
     * @nullable
     */
    tableType?: string;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Table Description.
     * @nullable
     */
    tableDescription?: string;
    /**
     * Archive Date Field.
     * @nullable
     */
    archiveDateField?: string;
    /**
     * Archivable.
     * @nullable
     */
    archivable?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserTableParams.build]] instead.
 */
export declare function createUserTableParams(json: any): UserTableParams;
/**
 * UserTableParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserTableParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserTableParams.tableType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.tableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.tableDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.archiveDateField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    archiveDateField: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.archivable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    archivable: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserTableParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserTableParams;
}
//# sourceMappingURL=UserTableParams.d.ts.map