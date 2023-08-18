/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlertManagements } from './AlertManagements';
import { AlertManagementsRequestBuilder } from './AlertManagementsRequestBuilder';
import { AlertManagementRecipient } from './AlertManagementRecipient';
import { AlertManagementDocument } from './AlertManagementDocument';
import { AlertManagementTypeEnum } from './AlertManagementTypeEnum';
import { AlertManagementPriorityEnum } from './AlertManagementPriorityEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AlertManagementFrequencyType } from './AlertManagementFrequencyType';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class AlertManagementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AlertManagements<DeSerializersT>, DeSerializersT>
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
  ): AlertManagementsApi<DeSerializersT> {
    return new AlertManagementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AlertManagements;

  requestBuilder(): AlertManagementsRequestBuilder<DeSerializersT> {
    return new AlertManagementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AlertManagements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AlertManagements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AlertManagements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AlertManagements, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AlertManagements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      AlertManagementTypeEnum,
      true,
      true
    >;
    PRIORITY: EnumField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      AlertManagementPriorityEnum,
      true,
      true
    >;
    ACTIVE: EnumField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PARAM: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY_ID: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FREQUENCY_TYPE: EnumField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      AlertManagementFrequencyType,
      true,
      true
    >;
    DAY_OF_EXECUTION: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXECUTION_TIME: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    LAST_EXECUTION_DATE: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_EXECUTION_TIME: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NEXT_EXECUTION_DATE: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    NEXT_EXECUTION_TIME: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SAVE_HISTORY: EnumField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FREQUENCY_INTERVAL: OrderableEdmTypeField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALERT_MANAGEMENT_RECIPIENTS: CollectionField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      AlertManagementRecipient,
      true,
      true
    >;
    ALERT_MANAGEMENT_DOCUMENTS: CollectionField<
      AlertManagements<DeSerializers>,
      DeSerializersT,
      AlertManagementDocument,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AlertManagements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          AlertManagementTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          AlertManagementPriorityEnum,
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link param} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAM: fieldBuilder.buildEdmTypeField('Param', 'Edm.String', true),
        /**
         * Static representation of the {@link queryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_ID: fieldBuilder.buildEdmTypeField('QueryID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link frequencyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY_TYPE: fieldBuilder.buildEnumField(
          'FrequencyType',
          AlertManagementFrequencyType,
          true
        ),
        /**
         * Static representation of the {@link dayOfExecution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAY_OF_EXECUTION: fieldBuilder.buildEdmTypeField(
          'DayOfExecution',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link executionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_TIME: fieldBuilder.buildEdmTypeField(
          'ExecutionTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link lastExecutionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXECUTION_DATE: fieldBuilder.buildEdmTypeField(
          'LastExecutionDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastExecutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_EXECUTION_TIME: fieldBuilder.buildEdmTypeField(
          'LastExecutionTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link nextExecutionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_EXECUTION_DATE: fieldBuilder.buildEdmTypeField(
          'NextExecutionDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link nextExecutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_EXECUTION_TIME: fieldBuilder.buildEdmTypeField(
          'NextExecutionTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link saveHistory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAVE_HISTORY: fieldBuilder.buildEnumField(
          'SaveHistory',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link frequencyInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY_INTERVAL: fieldBuilder.buildEdmTypeField(
          'FrequencyInterval',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link alertManagementRecipients} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALERT_MANAGEMENT_RECIPIENTS: fieldBuilder.buildCollectionField(
          'AlertManagementRecipients',
          AlertManagementRecipient,
          true
        ),
        /**
         * Static representation of the {@link alertManagementDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALERT_MANAGEMENT_DOCUMENTS: fieldBuilder.buildCollectionField(
          'AlertManagementDocuments',
          AlertManagementDocument,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AlertManagements)
      };
    }

    return this._schema;
  }
}
