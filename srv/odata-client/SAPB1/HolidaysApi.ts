/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Holidays } from './Holidays';
import { HolidaysRequestBuilder } from './HolidaysRequestBuilder';
import { HolidayDate } from './HolidayDate';
import { BoWeekEnum } from './BoWeekEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoWeekNoRuleEnum } from './BoWeekNoRuleEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class HolidaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Holidays<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): HolidaysApi<DeSerializersT> {
    return new HolidaysApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Holidays;

  requestBuilder(): HolidaysRequestBuilder<DeSerializersT> {
    return new HolidaysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Holidays<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Holidays<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Holidays<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Holidays, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Holidays, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HOLIDAY_CODE: OrderableEdmTypeField<
      Holidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEEKEND_FROM: EnumField<
      Holidays<DeSerializers>,
      DeSerializersT,
      BoWeekEnum,
      true,
      true
    >;
    WEEKEND_TO: EnumField<
      Holidays<DeSerializers>,
      DeSerializersT,
      BoWeekEnum,
      true,
      true
    >;
    VALID_FOR_ONE_YEAR_ONLY: EnumField<
      Holidays<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SET_WEEKENDS_AS_WORK_DAYS: OrderableEdmTypeField<
      Holidays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEEK_NO_RULE: EnumField<
      Holidays<DeSerializers>,
      DeSerializersT,
      BoWeekNoRuleEnum,
      true,
      true
    >;
    HOLIDAY_DATES: CollectionField<
      Holidays<DeSerializers>,
      DeSerializersT,
      HolidayDate,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Holidays<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link holidayCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLIDAY_CODE: fieldBuilder.buildEdmTypeField(
          'HolidayCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weekendFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEKEND_FROM: fieldBuilder.buildEnumField(
          'WeekendFrom',
          BoWeekEnum,
          true
        ),
        /**
         * Static representation of the {@link weekendTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEKEND_TO: fieldBuilder.buildEnumField('WeekendTO', BoWeekEnum, true),
        /**
         * Static representation of the {@link validForOneYearOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR_ONE_YEAR_ONLY: fieldBuilder.buildEnumField(
          'ValidForOneYearOnly',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link setWeekendsAsWorkDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_WEEKENDS_AS_WORK_DAYS: fieldBuilder.buildEdmTypeField(
          'SetWeekendsAsWorkDays',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link weekNoRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEK_NO_RULE: fieldBuilder.buildEnumField(
          'WeekNoRule',
          BoWeekNoRuleEnum,
          true
        ),
        /**
         * Static representation of the {@link holidayDates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLIDAY_DATES: fieldBuilder.buildCollectionField(
          'HolidayDates',
          HolidayDate,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Holidays)
      };
    }

    return this._schema;
  }
}
