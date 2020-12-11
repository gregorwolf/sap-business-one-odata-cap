import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Boxes1099
 */
export interface Boxes1099 {
    /**
     * Form Code.
     * @nullable
     */
    formCode?: number;
    /**
     * Box 1099.
     * @nullable
     */
    box1099?: string;
    /**
     * Box Description.
     * @nullable
     */
    boxDescription?: string;
    /**
     * Minimum 1099 Amount.
     * @nullable
     */
    minimum1099Amount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[Boxes1099.build]] instead.
 */
export declare function createBoxes1099(json: any): Boxes1099;
/**
 * Boxes1099Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Boxes1099Field<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Boxes1099> {
    /**
     * Representation of the [[Boxes1099.formCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Boxes1099.box1099]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    box1099: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Boxes1099.boxDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boxDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Boxes1099.minimum1099Amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimum1099Amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of Boxes1099Field.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Boxes1099 {
    /**
     * Metadata information on all properties of the `Boxes1099` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Boxes1099>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Boxes1099;
}
//# sourceMappingURL=Boxes1099.d.ts.map