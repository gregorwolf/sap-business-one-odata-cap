import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserObjectMdFormColumn
 */
export interface UserObjectMdFormColumn {
    /**
     * Form Column Alias.
     * @nullable
     */
    formColumnAlias?: string;
    /**
     * Form Column Description.
     * @nullable
     */
    formColumnDescription?: string;
    /**
     * Form Column Number.
     * @nullable
     */
    formColumnNumber?: number;
    /**
     * Son Number.
     * @nullable
     */
    sonNumber?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Editable.
     * @nullable
     */
    editable?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFormColumn.build]] instead.
 */
export declare function createUserObjectMdFormColumn(json: any): UserObjectMdFormColumn;
/**
 * UserObjectMdFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectMdFormColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdFormColumn> {
    /**
     * Representation of the [[UserObjectMdFormColumn.formColumnAlias]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formColumnAlias: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.formColumnDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formColumnDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.formColumnNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formColumnNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.sonNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sonNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.editable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    editable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of UserObjectMdFormColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserObjectMdFormColumn {
    /**
     * Metadata information on all properties of the `UserObjectMdFormColumn` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserObjectMdFormColumn>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdFormColumn;
}
//# sourceMappingURL=UserObjectMdFormColumn.d.ts.map