import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AlternateCatNumParams
 */
export interface AlternateCatNumParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Substitute.
     * @nullable
     */
    substitute?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AlternateCatNumParams.build]] instead.
 */
export declare function createAlternateCatNumParams(json: any): AlternateCatNumParams;
/**
 * AlternateCatNumParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AlternateCatNumParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlternateCatNumParams> {
    /**
     * Representation of the [[AlternateCatNumParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AlternateCatNumParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AlternateCatNumParams.substitute]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    substitute: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AlternateCatNumParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AlternateCatNumParams {
    /**
     * Metadata information on all properties of the `AlternateCatNumParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AlternateCatNumParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AlternateCatNumParams;
}
//# sourceMappingURL=AlternateCatNumParams.d.ts.map