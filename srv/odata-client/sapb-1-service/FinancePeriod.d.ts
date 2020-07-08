import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FinancePeriod
 */
export interface FinancePeriod {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Period Code.
     * @nullable
     */
    periodCode?: string;
    /**
     * Period Name.
     * @nullable
     */
    periodName?: string;
    /**
     * Posting Date From.
     * @nullable
     */
    postingDateFrom?: Moment;
    /**
     * Posting Date To.
     * @nullable
     */
    postingDateTo?: Moment;
    /**
     * Value Date From.
     * @nullable
     */
    valueDateFrom?: Moment;
    /**
     * Value Date To.
     * @nullable
     */
    valueDateTo?: Moment;
    /**
     * Tax Date From.
     * @nullable
     */
    taxDateFrom?: Moment;
    /**
     * Tax Date To.
     * @nullable
     */
    taxDateTo?: Moment;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Sub Num.
     * @nullable
     */
    subNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[FinancePeriod.build]] instead.
 */
export declare function createFinancePeriod(json: any): FinancePeriod;
/**
 * FinancePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FinancePeriodField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FinancePeriod.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.periodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.periodName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.postingDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.postingDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.valueDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    valueDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.valueDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    valueDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.taxDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.taxDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodIndicator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.subNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subNum: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace FinancePeriod {
    function build(json: {
        [keys: string]: FieldType;
    }): FinancePeriod;
}
//# sourceMappingURL=FinancePeriod.d.ts.map