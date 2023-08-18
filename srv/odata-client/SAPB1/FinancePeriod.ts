/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { PeriodStatusEnum } from './PeriodStatusEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * FinancePeriod
 */
export interface FinancePeriod<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period Code.
   * @nullable
   */
  periodCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Period Name.
   * @nullable
   */
  periodName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Posting Date From.
   * @nullable
   */
  postingDateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Posting Date To.
   * @nullable
   */
  postingDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Value Date From.
   * @nullable
   */
  valueDateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Value Date To.
   * @nullable
   */
  valueDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Tax Date From.
   * @nullable
   */
  taxDateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Tax Date To.
   * @nullable
   */
  taxDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Activefor Feed.
   * @nullable
   */
  activeforFeed?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Locked.
   * @nullable
   */
  locked?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Additional Sub Periods.
   * @nullable
   */
  additionalSubPeriods?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub Num.
   * @nullable
   */
  subNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period Status.
   * @nullable
   */
  periodStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * FinancePeriodField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class FinancePeriodField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  FinancePeriod,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link FinancePeriod.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link FinancePeriod.periodCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PeriodCode', 'Edm.String', true);
  /**
   * Representation of the {@link FinancePeriod.periodName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PeriodName', 'Edm.String', true);
  /**
   * Representation of the {@link FinancePeriod.postingDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PostingDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.postingDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PostingDateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.valueDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ValueDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.valueDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ValueDateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.taxDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.taxDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxDateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.activeforFeed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeforFeed: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ActiveforFeed', BoYesNoEnum, true);
  /**
   * Representation of the {@link FinancePeriod.locked} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locked: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true);
  /**
   * Representation of the {@link FinancePeriod.additionalSubPeriods} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalSubPeriods: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AdditionalSubPeriods',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link FinancePeriod.periodIndicator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PeriodIndicator',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link FinancePeriod.subNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link FinancePeriod.periodStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodStatus: EnumField<
    EntityT,
    DeSerializersT,
    PeriodStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('PeriodStatus', PeriodStatusEnum, true);

  /**
   * Creates an instance of FinancePeriodField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, FinancePeriod, fieldOptions);
  }
}

export namespace FinancePeriod {
  /**
   * Metadata information on all properties of the `FinancePeriod` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FinancePeriod>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PeriodCode',
      name: 'periodCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PeriodName',
      name: 'periodName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PostingDateFrom',
      name: 'postingDateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'PostingDateTo',
      name: 'postingDateTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ValueDateFrom',
      name: 'valueDateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ValueDateTo',
      name: 'valueDateTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'TaxDateFrom',
      name: 'taxDateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'TaxDateTo',
      name: 'taxDateTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ActiveforFeed',
      name: 'activeforFeed',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Locked',
      name: 'locked',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AdditionalSubPeriods',
      name: 'additionalSubPeriods',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PeriodIndicator',
      name: 'periodIndicator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SubNum',
      name: 'subNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PeriodStatus',
      name: 'periodStatus',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
