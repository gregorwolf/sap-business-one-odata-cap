import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class AttributeGroupLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
     * Representation of the [[AttributeGroupLine.defaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultValue: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AttributeGroupLine {
    function build(json: {
        [keys: string]: FieldType;
    }): AttributeGroupLine;
}
//# sourceMappingURL=AttributeGroupLine.d.ts.map