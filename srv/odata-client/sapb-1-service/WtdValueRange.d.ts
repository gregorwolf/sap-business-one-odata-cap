import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WtdValueRange
 */
export interface WtdValueRange {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Seq Num.
     * @nullable
     */
    seqNum?: number;
    /**
     * Effective From.
     * @nullable
     */
    effectiveFrom?: Moment;
    /**
     * Value From.
     * @nullable
     */
    valueFrom?: number;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WtdValueRange.build]] instead.
 */
export declare function createWtdValueRange(json: any): WtdValueRange;
/**
 * WtdValueRangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdValueRangeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WtdValueRange> {
    /**
     * Representation of the [[WtdValueRange.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdValueRange.seqNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    seqNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdValueRange.effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[WtdValueRange.valueFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    valueFrom: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WtdValueRange.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of WtdValueRangeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WtdValueRange {
    /**
     * Metadata information on all properties of the `WtdValueRange` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WtdValueRange>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WtdValueRange;
}
//# sourceMappingURL=WtdValueRange.d.ts.map