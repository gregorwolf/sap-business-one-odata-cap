import { AttributeGroupFieldTypeEnum } from './AttributeGroupFieldTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AttributeGroupLine
 */
export interface AttributeGroupLine {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Sort Number.
     * @nullable
     */
    sortNumber?: number;
    /**
     * Attribute Id.
     * @nullable
     */
    attributeId?: number;
    /**
     * Attribute Name.
     * @nullable
     */
    attributeName?: string;
    /**
     * Field Type.
     * @nullable
     */
    fieldType?: AttributeGroupFieldTypeEnum;
    /**
     * Default Value.
     * @nullable
     */
    defaultValue?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AttributeGroupLine.build]] instead.
 */
export declare function createAttributeGroupLine(json: any): AttributeGroupLine;
/**
 * AttributeGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AttributeGroupLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AttributeGroupLine> {
    /**
     * Representation of the [[AttributeGroupLine.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AttributeGroupLine.sortNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AttributeGroupLine.attributeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attributeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AttributeGroupLine.attributeName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attributeName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AttributeGroupLine.fieldType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AttributeGroupLine.defaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AttributeGroupLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AttributeGroupLine {
    /**
     * Metadata information on all properties of the `AttributeGroupLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AttributeGroupLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AttributeGroupLine;
}
//# sourceMappingURL=AttributeGroupLine.d.ts.map