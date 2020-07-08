import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserObjectMdChildTable
 */
export interface UserObjectMdChildTable {
    /**
     * Son Number.
     * @nullable
     */
    sonNumber?: number;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Log Table Name.
     * @nullable
     */
    logTableName?: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Object Name.
     * @nullable
     */
    objectName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdChildTable.build]] instead.
 */
export declare function createUserObjectMdChildTable(json: any): UserObjectMdChildTable;
/**
 * UserObjectMdChildTableField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectMdChildTableField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserObjectMdChildTable.sonNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sonNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdChildTable.tableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdChildTable.logTableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logTableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdChildTable.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdChildTable.objectName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserObjectMdChildTable {
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdChildTable;
}
//# sourceMappingURL=UserObjectMdChildTable.d.ts.map