/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kalkulation } from './Kalkulation';
import { KalkulationRequestBuilder } from './KalkulationRequestBuilder';
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
export class KalkulationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Kalkulation<DeSerializersT>, DeSerializersT>
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
  ): KalkulationApi<DeSerializersT> {
    return new KalkulationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Kalkulation;

  requestBuilder(): KalkulationRequestBuilder<DeSerializersT> {
    return new KalkulationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Kalkulation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Kalkulation<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Kalkulation<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Kalkulation, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Kalkulation, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CANCELED: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_INST: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_SIGN: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSFERED: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DATA_SOURCE: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ARTIKELGRUPPE: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_WARENGRUPPE: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BESCHREIBUNG: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_L_1: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_L_2: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_L_3: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_L_4: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_L_5: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_1: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_2: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_3: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_4: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_5: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_A_1: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_A_2: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_A_3: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_A_4: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_A_5: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_I_1: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_I_2: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_I_3: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_I_4: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_I_5: OrderableEdmTypeField<
      Kalkulation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Kalkulation<DeSerializers>>;
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
         * Static representation of the {@link uArtikelgruppe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ARTIKELGRUPPE: fieldBuilder.buildEdmTypeField(
          'U_Artikelgruppe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uWarengruppe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_WARENGRUPPE: fieldBuilder.buildEdmTypeField(
          'U_Warengruppe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBeschreibung} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BESCHREIBUNG: fieldBuilder.buildEdmTypeField(
          'U_Beschreibung',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uL1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_1: fieldBuilder.buildEdmTypeField('U_L1', 'Edm.String', true),
        /**
         * Static representation of the {@link uL2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_2: fieldBuilder.buildEdmTypeField('U_L2', 'Edm.String', true),
        /**
         * Static representation of the {@link uL3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_3: fieldBuilder.buildEdmTypeField('U_L3', 'Edm.String', true),
        /**
         * Static representation of the {@link uL4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_4: fieldBuilder.buildEdmTypeField('U_L4', 'Edm.String', true),
        /**
         * Static representation of the {@link uL5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_5: fieldBuilder.buildEdmTypeField('U_L5', 'Edm.String', true),
        /**
         * Static representation of the {@link uS1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_1: fieldBuilder.buildEdmTypeField('U_S1', 'Edm.String', true),
        /**
         * Static representation of the {@link uS2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_2: fieldBuilder.buildEdmTypeField('U_S2', 'Edm.String', true),
        /**
         * Static representation of the {@link uS3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_3: fieldBuilder.buildEdmTypeField('U_S3', 'Edm.String', true),
        /**
         * Static representation of the {@link uS4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_4: fieldBuilder.buildEdmTypeField('U_S4', 'Edm.String', true),
        /**
         * Static representation of the {@link uS5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_5: fieldBuilder.buildEdmTypeField('U_S5', 'Edm.String', true),
        /**
         * Static representation of the {@link uA1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_A_1: fieldBuilder.buildEdmTypeField('U_A1', 'Edm.String', true),
        /**
         * Static representation of the {@link uA2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_A_2: fieldBuilder.buildEdmTypeField('U_A2', 'Edm.String', true),
        /**
         * Static representation of the {@link uA3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_A_3: fieldBuilder.buildEdmTypeField('U_A3', 'Edm.String', true),
        /**
         * Static representation of the {@link uA4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_A_4: fieldBuilder.buildEdmTypeField('U_A4', 'Edm.String', true),
        /**
         * Static representation of the {@link uA5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_A_5: fieldBuilder.buildEdmTypeField('U_A5', 'Edm.String', true),
        /**
         * Static representation of the {@link uI1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_I_1: fieldBuilder.buildEdmTypeField('U_I1', 'Edm.String', true),
        /**
         * Static representation of the {@link uI2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_I_2: fieldBuilder.buildEdmTypeField('U_I2', 'Edm.String', true),
        /**
         * Static representation of the {@link uI3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_I_3: fieldBuilder.buildEdmTypeField('U_I3', 'Edm.String', true),
        /**
         * Static representation of the {@link uI4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_I_4: fieldBuilder.buildEdmTypeField('U_I4', 'Edm.String', true),
        /**
         * Static representation of the {@link uI5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_I_5: fieldBuilder.buildEdmTypeField('U_I5', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kalkulation)
      };
    }

    return this._schema;
  }
}
