import { TaxCodeDeterminationTcdDefaultWtTypeEnum } from './TaxCodeDeterminationTcdDefaultWtTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxCodeDeterminationTcdDefaultWt
 */
export interface TaxCodeDeterminationTcdDefaultWt {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
    /**
     * Type.
     * @nullable
     */
    type?: TaxCodeDeterminationTcdDefaultWtTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdDefaultWt.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdDefaultWt(json: any): TaxCodeDeterminationTcdDefaultWt;
/**
 * TaxCodeDeterminationTcdDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdDefaultWtField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdDefaultWt> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdDefaultWt.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdDefaultWt.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdDefaultWt.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of TaxCodeDeterminationTcdDefaultWtField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdDefaultWt {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdDefaultWt` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdDefaultWt>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdDefaultWt;
}
//# sourceMappingURL=TaxCodeDeterminationTcdDefaultWt.d.ts.map