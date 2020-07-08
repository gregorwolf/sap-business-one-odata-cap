import { Moment } from 'moment';
import { WtdValueRange, WtdValueRangeField } from './WtdValueRange';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
    wtdValueRangeCollection?: WtdValueRange;
}
/**
 * @deprecated Since v1.6.0. Use [[WtdEffectiveDate.build]] instead.
 */
export declare function createWtdEffectiveDate(json: any): WtdEffectiveDate;
/**
 * WtdEffectiveDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdEffectiveDateField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
    wtdValueRangeCollection: WtdValueRangeField<EntityT>;
}
export declare namespace WtdEffectiveDate {
    function build(json: {
        [keys: string]: FieldType | WtdValueRange;
    }): WtdEffectiveDate;
}
//# sourceMappingURL=WtdEffectiveDate.d.ts.map