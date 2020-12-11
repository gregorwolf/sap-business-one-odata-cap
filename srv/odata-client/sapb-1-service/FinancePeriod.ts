/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PeriodStatusEnum } from './PeriodStatusEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createFinancePeriod(json: any): FinancePeriod {
  return FinancePeriod.build(json);
}

/**
 * FinancePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FinancePeriodField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FinancePeriod> {
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
   * Representation of the [[FinancePeriod.activeforFeed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeforFeed: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ActiveforFeed', this);
  /**
   * Representation of the [[FinancePeriod.locked]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locked: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Locked', this);
  /**
   * Representation of the [[FinancePeriod.additionalSubPeriods]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalSubPeriods: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AdditionalSubPeriods', this);
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
  /**
   * Representation of the [[FinancePeriod.periodStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PeriodStatus', this);

  /**
   * Creates an instance of FinancePeriodField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FinancePeriod);
  }
}

export namespace FinancePeriod {
  /**
   * Metadata information on all properties of the `FinancePeriod` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FinancePeriod>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PeriodCode',
    name: 'periodCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PeriodName',
    name: 'periodName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PostingDateFrom',
    name: 'postingDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'PostingDateTo',
    name: 'postingDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ValueDateFrom',
    name: 'valueDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ValueDateTo',
    name: 'valueDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TaxDateFrom',
    name: 'taxDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'TaxDateTo',
    name: 'taxDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ActiveforFeed',
    name: 'activeforFeed',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Locked',
    name: 'locked',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AdditionalSubPeriods',
    name: 'additionalSubPeriods',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PeriodIndicator',
    name: 'periodIndicator',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SubNum',
    name: 'subNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PeriodStatus',
    name: 'periodStatus',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FinancePeriod {
    return deserializeComplexTypeV4(json, FinancePeriod);
  }
}
