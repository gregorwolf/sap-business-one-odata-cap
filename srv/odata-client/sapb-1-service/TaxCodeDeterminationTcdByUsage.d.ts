import { TaxCodeDeterminationTcdByUsageTypeEnum } from './TaxCodeDeterminationTcdByUsageTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxCodeDeterminationTcdByUsage
 */
export interface TaxCodeDeterminationTcdByUsage {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Usage Code.
     * @nullable
     */
    usageCode?: number;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Exp Tax Code.
     * @nullable
     */
    expTaxCode?: string;
    /**
     * Type.
     * @nullable
     */
    type?: TaxCodeDeterminationTcdByUsageTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdByUsage.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdByUsage(json: any): TaxCodeDeterminationTcdByUsage;
/**
 * TaxCodeDeterminationTcdByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdByUsageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdByUsage> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.usageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    usageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.expTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdByUsage.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of TaxCodeDeterminationTcdByUsageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdByUsage {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdByUsage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdByUsage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdByUsage;
}
//# sourceMappingURL=TaxCodeDeterminationTcdByUsage.d.ts.map