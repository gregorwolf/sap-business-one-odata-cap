/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Oamd } from './U_Ba_Oamd';
import { U_Ba_OamdRequestBuilder } from './U_Ba_OamdRequestBuilder';
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
export class U_Ba_OamdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Oamd<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OamdApi<DeSerializersT> {
    return new U_Ba_OamdApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Oamd;

  requestBuilder(): U_Ba_OamdRequestBuilder<DeSerializersT> {
    return new U_Ba_OamdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Oamd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Oamd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Oamd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Oamd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Oamd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ITEM_CODE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_STATUS_ID: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_INV_NUM: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DESC: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DESC_S: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CAP_DATE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_ACQ_DATE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_RET_DATE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_VEND_CODE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VEND_DESC: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SER_NUM: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USER_01: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USER_02: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USER_03: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_USER_04: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_DX_DATE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_DX_FS_YEAR: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DX_PERIOD: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CREA_DATE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_CREA_TIME: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_CREA_USER: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_UPDT_DATE: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_UPDT_TIME: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_UPDT_USER: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TO_BE_DEACT: OrderableEdmTypeField<
      U_Ba_Oamd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Oamd<DeSerializers>>;
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
         * Static representation of the {@link uAsstNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASST_NUM: fieldBuilder.buildEdmTypeField(
          'U_AsstNum',
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
        /**
         * Static representation of the {@link uStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'U_StatusID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uInvNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_INV_NUM: fieldBuilder.buildEdmTypeField(
          'U_InvNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESC: fieldBuilder.buildEdmTypeField('U_Desc', 'Edm.String', true),
        /**
         * Static representation of the {@link uDescS} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESC_S: fieldBuilder.buildEdmTypeField('U_DescS', 'Edm.String', true),
        /**
         * Static representation of the {@link uCapDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CAP_DATE: fieldBuilder.buildEdmTypeField(
          'U_CapDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uAcqDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACQ_DATE: fieldBuilder.buildEdmTypeField(
          'U_AcqDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uRetDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RET_DATE: fieldBuilder.buildEdmTypeField(
          'U_RetDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uVendCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VEND_CODE: fieldBuilder.buildEdmTypeField(
          'U_VendCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uVendDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VEND_DESC: fieldBuilder.buildEdmTypeField(
          'U_VendDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSerNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SER_NUM: fieldBuilder.buildEdmTypeField(
          'U_SerNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUser01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER_01: fieldBuilder.buildEdmTypeField(
          'U_User01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUser02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER_02: fieldBuilder.buildEdmTypeField(
          'U_User02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUser03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER_03: fieldBuilder.buildEdmTypeField(
          'U_User03',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uUser04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER_04: fieldBuilder.buildEdmTypeField(
          'U_User04',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDxDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DX_DATE: fieldBuilder.buildEdmTypeField(
          'U_DxDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uDxFsYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DX_FS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_DxFsYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDxPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DX_PERIOD: fieldBuilder.buildEdmTypeField(
          'U_DxPeriod',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCreaDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_DATE: fieldBuilder.buildEdmTypeField(
          'U_CreaDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uCreaTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_TIME: fieldBuilder.buildEdmTypeField(
          'U_CreaTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uCreaUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_USER: fieldBuilder.buildEdmTypeField(
          'U_CreaUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUpdtDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UPDT_DATE: fieldBuilder.buildEdmTypeField(
          'U_UpdtDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uUpdtTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UPDT_TIME: fieldBuilder.buildEdmTypeField(
          'U_UpdtTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uUpdtUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UPDT_USER: fieldBuilder.buildEdmTypeField(
          'U_UpdtUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uToBeDeact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TO_BE_DEACT: fieldBuilder.buildEdmTypeField(
          'U_ToBeDeact',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Oamd)
      };
    }

    return this._schema;
  }
}
