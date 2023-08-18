/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueMappingCommunication } from './ValueMappingCommunication';
import { ValueMappingCommunicationRequestBuilder } from './ValueMappingCommunicationRequestBuilder';
import { VmCommunicationTypeEnum } from './VmCommunicationTypeEnum';
import { VmCommunicationStatusEnum } from './VmCommunicationStatusEnum';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ValueMappingCommunicationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ValueMappingCommunication<DeSerializersT>, DeSerializersT>
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
  ): ValueMappingCommunicationApi<DeSerializersT> {
    return new ValueMappingCommunicationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ValueMappingCommunication;

  requestBuilder(): ValueMappingCommunicationRequestBuilder<DeSerializersT> {
    return new ValueMappingCommunicationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValueMappingCommunication<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ValueMappingCommunication<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValueMappingCommunication<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ValueMappingCommunication,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValueMappingCommunication,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THIRD_PARTY_SYSTEM_ID: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OBJECT_ID: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COMMUNICATION_TYPE: EnumField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      VmCommunicationTypeEnum,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MESSAGE: OrderableEdmTypeField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      ValueMappingCommunication<DeSerializers>,
      DeSerializersT,
      VmCommunicationStatusEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ValueMappingCommunication<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thirdPartySystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'ThirdPartySystemId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link objectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ObjectId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link communicationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMUNICATION_TYPE: fieldBuilder.buildEnumField(
          'CommunicationType',
          VmCommunicationTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('EndTime', 'Edm.Int32', true),
        /**
         * Static representation of the {@link message} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE: fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          VmCommunicationStatusEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValueMappingCommunication)
      };
    }

    return this._schema;
  }
}
