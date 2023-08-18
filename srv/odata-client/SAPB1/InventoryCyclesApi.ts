/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCycles } from './InventoryCycles';
import { InventoryCyclesRequestBuilder } from './InventoryCyclesRequestBuilder';
import { ItemGroupsApi } from './ItemGroupsApi';
import { ItemsApi } from './ItemsApi';
import { BoFrequency } from './BoFrequency';
import { BoYesNoEnum } from './BoYesNoEnum';
import { RepeatOptionEnum } from './RepeatOptionEnum';
import { RecurrenceSequenceEnum } from './RecurrenceSequenceEnum';
import { RecurrenceDayOfWeekEnum } from './RecurrenceDayOfWeekEnum';
import { EndTypeEnum } from './EndTypeEnum';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryCyclesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventoryCycles<DeSerializersT>, DeSerializersT>
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
  ): InventoryCyclesApi<DeSerializersT> {
    return new InventoryCyclesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      InventoryCycles<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      InventoryCycles<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemGroupsApi<DeSerializersT>, ItemsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEM_GROUPS: new OneToManyLink('ItemGroups', this, linkedApis[0]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = InventoryCycles;

  requestBuilder(): InventoryCyclesRequestBuilder<DeSerializersT> {
    return new InventoryCyclesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryCycles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventoryCycles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InventoryCycles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InventoryCycles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryCycles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CYCLE_CODE: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CYCLE_NAME: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREQUENCY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoFrequency,
      true,
      true
    >;
    DAY: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HOUR: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    NEXT_COUNTING_DATE: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    INTERVAL: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SUNDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MONDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TUESDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WEDNESDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    THURSDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FRIDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SATURDAY: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REPEAT_OPTION: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      RepeatOptionEnum,
      true,
      true
    >;
    RECURRENCE_SEQUENCE_SPECIFIER: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      RecurrenceSequenceEnum,
      true,
      true
    >;
    RECURRENCE_DAY_IN_MONTH: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECURRENCE_MONTH: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECURRENCE_DAY_OF_WEEK: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      RecurrenceDayOfWeekEnum,
      true,
      true
    >;
    END_TYPE: EnumField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      EndTypeEnum,
      true,
      true
    >;
    MAX_OCCURRENCE: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES_END_DATE: OrderableEdmTypeField<
      InventoryCycles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      InventoryCycles<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      InventoryCycles<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryCycles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cycleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_CODE: fieldBuilder.buildEdmTypeField(
          'CycleCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cycleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_NAME: fieldBuilder.buildEdmTypeField(
          'CycleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField('Frequency', BoFrequency, true),
        /**
         * Static representation of the {@link day} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY: fieldBuilder.buildEdmTypeField('Day', 'Edm.Int32', true),
        /**
         * Static representation of the {@link hour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR: fieldBuilder.buildEdmTypeField('Hour', 'Edm.TimeOfDay', true),
        /**
         * Static representation of the {@link nextCountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_COUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'NextCountingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEdmTypeField('Interval', 'Edm.Int32', true),
        /**
         * Static representation of the {@link sunday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY: fieldBuilder.buildEnumField('Sunday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link monday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY: fieldBuilder.buildEnumField('Monday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link tuesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY: fieldBuilder.buildEnumField('Tuesday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link wednesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY: fieldBuilder.buildEnumField('Wednesday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link thursday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY: fieldBuilder.buildEnumField('Thursday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link friday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY: fieldBuilder.buildEnumField('Friday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link saturday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY: fieldBuilder.buildEnumField('Saturday', BoYesNoEnum, true),
        /**
         * Static representation of the {@link repeatOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPEAT_OPTION: fieldBuilder.buildEnumField(
          'RepeatOption',
          RepeatOptionEnum,
          true
        ),
        /**
         * Static representation of the {@link recurrenceSequenceSpecifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_SEQUENCE_SPECIFIER: fieldBuilder.buildEnumField(
          'RecurrenceSequenceSpecifier',
          RecurrenceSequenceEnum,
          true
        ),
        /**
         * Static representation of the {@link recurrenceDayInMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_DAY_IN_MONTH: fieldBuilder.buildEdmTypeField(
          'RecurrenceDayInMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link recurrenceMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_MONTH: fieldBuilder.buildEdmTypeField(
          'RecurrenceMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link recurrenceDayOfWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_DAY_OF_WEEK: fieldBuilder.buildEnumField(
          'RecurrenceDayOfWeek',
          RecurrenceDayOfWeekEnum,
          true
        ),
        /**
         * Static representation of the {@link endType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TYPE: fieldBuilder.buildEnumField('endType', EndTypeEnum, true),
        /**
         * Static representation of the {@link maxOccurrence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_OCCURRENCE: fieldBuilder.buildEdmTypeField(
          'MaxOccurrence',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link seriesEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES_END_DATE: fieldBuilder.buildEdmTypeField(
          'SeriesEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryCycles)
      };
    }

    return this._schema;
  }
}
