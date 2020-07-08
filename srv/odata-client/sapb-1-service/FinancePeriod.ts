/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createFinancePeriod(json: any): FinancePeriod {
  return FinancePeriod.build(json);
}

/**
 * FinancePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FinancePeriodField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FinancePeriod.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[FinancePeriod.periodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodCode', this, 'Edm.String');
  /**
   * Representation of the [[FinancePeriod.periodName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodName', this, 'Edm.String');
  /**
   * Representation of the [[FinancePeriod.postingDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PostingDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[FinancePeriod.postingDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PostingDateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[FinancePeriod.valueDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ValueDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[FinancePeriod.valueDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ValueDateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[FinancePeriod.taxDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TaxDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[FinancePeriod.taxDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TaxDateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[FinancePeriod.periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodIndicator', this, 'Edm.String');
  /**
   * Representation of the [[FinancePeriod.subNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubNum', this, 'Edm.Int32');
}

export namespace FinancePeriod {
  export function build(json: { [keys: string]: FieldType }): FinancePeriod {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') }),
      PeriodCode: (periodCode: string) => ({ periodCode: edmToTs(periodCode, 'Edm.String') }),
      PeriodName: (periodName: string) => ({ periodName: edmToTs(periodName, 'Edm.String') }),
      PostingDateFrom: (postingDateFrom: Moment) => ({ postingDateFrom: edmToTs(postingDateFrom, 'Edm.DateTimeOffset') }),
      PostingDateTo: (postingDateTo: Moment) => ({ postingDateTo: edmToTs(postingDateTo, 'Edm.DateTimeOffset') }),
      ValueDateFrom: (valueDateFrom: Moment) => ({ valueDateFrom: edmToTs(valueDateFrom, 'Edm.DateTimeOffset') }),
      ValueDateTo: (valueDateTo: Moment) => ({ valueDateTo: edmToTs(valueDateTo, 'Edm.DateTimeOffset') }),
      TaxDateFrom: (taxDateFrom: Moment) => ({ taxDateFrom: edmToTs(taxDateFrom, 'Edm.DateTimeOffset') }),
      TaxDateTo: (taxDateTo: Moment) => ({ taxDateTo: edmToTs(taxDateTo, 'Edm.DateTimeOffset') }),
      PeriodIndicator: (periodIndicator: string) => ({ periodIndicator: edmToTs(periodIndicator, 'Edm.String') }),
      SubNum: (subNum: number) => ({ subNum: edmToTs(subNum, 'Edm.Int32') })
    });
  }
}
