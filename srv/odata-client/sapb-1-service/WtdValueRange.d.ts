import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class WtdValueRangeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace WtdValueRange {
    function build(json: {
        [keys: string]: FieldType;
    }): WtdValueRange;
}
//# sourceMappingURL=WtdValueRange.d.ts.map