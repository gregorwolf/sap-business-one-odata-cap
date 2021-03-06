import { Moment } from 'moment';
import { WtdValueRange } from './WtdValueRange';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WtdEffectiveDate
 */
export interface WtdEffectiveDate {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Effective From.
     * @nullable
     */
    effectiveFrom?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Wtd Value Range Collection.
     * @nullable
     */
    wtdValueRangeCollection?: WtdValueRange[];
}
/**
 * @deprecated Since v1.6.0. Use [[WtdEffectiveDate.build]] instead.
 */
export declare function createWtdEffectiveDate(json: any): WtdEffectiveDate;
/**
 * WtdEffectiveDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdEffectiveDateField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdEffectiveDate> {
    /**
     * Representation of the [[WtdEffectiveDate.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdEffectiveDate.effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[WtdEffectiveDate.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdEffectiveDate.wtdValueRangeCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtdValueRangeCollection: CollectionField<EntityT, WtdValueRange>;
    /**
     * Creates an instance of WtdEffectiveDateField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WtdEffectiveDate {
    /**
     * Metadata information on all properties of the `WtdEffectiveDate` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WtdEffectiveDate>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | WtdValueRange;
    }): WtdEffectiveDate;
}
//# sourceMappingURL=WtdEffectiveDate.d.ts.map