/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Masterartikel } from './Masterartikel';
import { MasterartikelRequestBuilder } from './MasterartikelRequestBuilder';
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
export class MasterartikelApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Masterartikel<DeSerializersT>, DeSerializersT>
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
  ): MasterartikelApi<DeSerializersT> {
    return new MasterartikelApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Masterartikel;

  requestBuilder(): MasterartikelRequestBuilder<DeSerializersT> {
    return new MasterartikelRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Masterartikel<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Masterartikel<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Masterartikel<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Masterartikel, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Masterartikel, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CANCELED: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_INST: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_SIGN: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSFERED: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_SOURCE: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ITEM_CODE: OrderableEdmTypeField<
      Masterartikel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Masterartikel<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          true
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
         * Static representation of the {@link uItemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'U_ItemCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Masterartikel)
      };
    }

    return this._schema;
  }
}
