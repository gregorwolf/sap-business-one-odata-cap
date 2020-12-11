import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PeriodStatusEnum } from './PeriodStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Activefor Feed.
     * @nullable
     */
    activeforFeed?: BoYesNoEnum;
    /**
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
    /**
     * Additional Sub Periods.
     * @nullable
     */
    additionalSubPeriods?: BoYesNoEnum;
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
    /**
     * Period Status.
     * @nullable
     */
    periodStatus?: PeriodStatusEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[FinancePeriod.build]] instead.
 */
export declare function createFinancePeriod(json: any): FinancePeriod;
/**
 * FinancePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FinancePeriodField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FinancePeriod> {
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
     * Representation of the [[FinancePeriod.activeforFeed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeforFeed: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.locked]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locked: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[FinancePeriod.additionalSubPeriods]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalSubPeriods: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Representation of the [[FinancePeriod.periodStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of FinancePeriodField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FinancePeriod {
    /**
     * Metadata information on all properties of the `FinancePeriod` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FinancePeriod>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FinancePeriod;
}
//# sourceMappingURL=FinancePeriod.d.ts.map