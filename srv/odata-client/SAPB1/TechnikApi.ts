/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Technik } from './Technik';
import { TechnikRequestBuilder } from './TechnikRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class TechnikApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Technik<DeSerializersT>, DeSerializersT>
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
  ): TechnikApi<DeSerializersT> {
    return new TechnikApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Technik;

  requestBuilder(): TechnikRequestBuilder<DeSerializersT> {
    return new TechnikRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Technik<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Technik<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Technik<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Technik, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Technik, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_NUM: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INSTANCE: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HANDWRTTEN: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_STATUS: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATOR: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARK: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CANCELED: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_INST: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_SIGN: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSFERED: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_SOURCE: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CARD_CODE: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TYP: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_TIME: OrderableEdmTypeField<
      Technik<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Technik<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.Int32', true),
        /**
         * Static representation of the {@link instance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE: fieldBuilder.buildEdmTypeField('Instance', 'Edm.Int32', true),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link handwrtten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDWRTTEN: fieldBuilder.buildEdmTypeField(
          'Handwrtten',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEdmTypeField(
          'RequestStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATOR: fieldBuilder.buildEdmTypeField('Creator', 'Edm.String', true),
        /**
         * Static representation of the {@link remark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARK: fieldBuilder.buildEdmTypeField('Remark', 'Edm.String', true),
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link canceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELED: fieldBuilder.buildEdmTypeField(
          'Canceled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link object} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT: fieldBuilder.buildEdmTypeField('Object', 'Edm.String', true),
        /**
         * Static representation of the {@link logInst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_INST: fieldBuilder.buildEdmTypeField('LogInst', 'Edm.Int32', true),
        /**
         * Static representation of the {@link userSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGN: fieldBuilder.buildEdmTypeField(
          'UserSign',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transfered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERED: fieldBuilder.buildEdmTypeField(
          'Transfered',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_TIME: fieldBuilder.buildEdmTypeField(
          'UpdateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link dataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE: fieldBuilder.buildEdmTypeField(
          'DataSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CARD_CODE: fieldBuilder.buildEdmTypeField(
          'U_CardCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TYP: fieldBuilder.buildEdmTypeField('U_Typ', 'Edm.String', false),
        /**
         * Static representation of the {@link uTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TIME: fieldBuilder.buildEdmTypeField('U_Time', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Technik)
      };
    }

    return this._schema;
  }
}
