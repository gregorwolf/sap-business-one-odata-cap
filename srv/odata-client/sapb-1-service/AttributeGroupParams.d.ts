import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AttributeGroupParams
 */
export interface AttributeGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AttributeGroupParams.build]] instead.
 */
export declare function createAttributeGroupParams(json: any): AttributeGroupParams;
/**
 * AttributeGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AttributeGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AttributeGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AttributeGroupParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AttributeGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AttributeGroupParams;
}
//# sourceMappingURL=AttributeGroupParams.d.ts.map