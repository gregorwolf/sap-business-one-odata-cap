import { DiscountGroupTypeEnum } from './DiscountGroupTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EnhancedDiscountGroupParams
 */
export interface EnhancedDiscountGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Type.
     * @nullable
     */
    type?: DiscountGroupTypeEnum;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EnhancedDiscountGroupParams.build]] instead.
 */
export declare function createEnhancedDiscountGroupParams(json: any): EnhancedDiscountGroupParams;
/**
 * EnhancedDiscountGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EnhancedDiscountGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EnhancedDiscountGroupParams> {
    /**
     * Representation of the [[EnhancedDiscountGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EnhancedDiscountGroupParams.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[EnhancedDiscountGroupParams.objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EnhancedDiscountGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EnhancedDiscountGroupParams {
    /**
     * Metadata information on all properties of the `EnhancedDiscountGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EnhancedDiscountGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EnhancedDiscountGroupParams;
}
//# sourceMappingURL=EnhancedDiscountGroupParams.d.ts.map