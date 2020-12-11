import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserObjectMdEnhancedFormColumn
 */
export interface UserObjectMdEnhancedFormColumn {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Column Number.
     * @nullable
     */
    columnNumber?: number;
    /**
     * Child Number.
     * @nullable
     */
    childNumber?: number;
    /**
     * Column Alias.
     * @nullable
     */
    columnAlias?: string;
    /**
     * Column Description.
     * @nullable
     */
    columnDescription?: string;
    /**
     * Column Is Used.
     * @nullable
     */
    columnIsUsed?: BoYesNoEnum;
    /**
     * Editable.
     * @nullable
     */
    editable?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdEnhancedFormColumn.build]] instead.
 */
export declare function createUserObjectMdEnhancedFormColumn(json: any): UserObjectMdEnhancedFormColumn;
/**
 * UserObjectMdEnhancedFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectMdEnhancedFormColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdEnhancedFormColumn> {
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.childNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    childNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnAlias]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnAlias: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnIsUsed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnIsUsed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.editable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    editable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of UserObjectMdEnhancedFormColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserObjectMdEnhancedFormColumn {
    /**
     * Metadata information on all properties of the `UserObjectMdEnhancedFormColumn` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserObjectMdEnhancedFormColumn>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdEnhancedFormColumn;
}
//# sourceMappingURL=UserObjectMdEnhancedFormColumn.d.ts.map