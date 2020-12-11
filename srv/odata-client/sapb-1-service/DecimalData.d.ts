import { RoundingContextEnum } from './RoundingContextEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DecimalData
 */
export interface DecimalData {
    /**
     * Value.
     * @nullable
     */
    value?: number;
    /**
     * Context.
     * @nullable
     */
    context?: RoundingContextEnum;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DecimalData.build]] instead.
 */
export declare function createDecimalData(json: any): DecimalData;
/**
 * DecimalDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DecimalDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DecimalData> {
    /**
     * Representation of the [[DecimalData.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DecimalData.context]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    context: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DecimalData.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DecimalDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DecimalData {
    /**
     * Metadata information on all properties of the `DecimalData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DecimalData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DecimalData;
}
//# sourceMappingURL=DecimalData.d.ts.map