/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Oamd3 } from './U_Ba_Oamd3';
import { U_Ba_Oamd3RequestBuilder } from './U_Ba_Oamd3RequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Ba_Oamd3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_Oamd3Api<DeSerializersT> {
    return new U_Ba_Oamd3Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Oamd3;

  requestBuilder(): U_Ba_Oamd3RequestBuilder<DeSerializersT> {
    return new U_Ba_Oamd3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Oamd3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Oamd3<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Oamd3, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Oamd3, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_APC: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_APC_HIST: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_APC_ALT: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_OR_DP_ACC: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_UN_DP_ACC: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_KEY_1: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_DP_ACC_1: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_KEY_2: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_DP_ACC_2: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_KEY_3: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_DP_ACC_3: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_QTY: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SALVAGE_V: OrderableEdmTypeField<
      U_Ba_Oamd3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Oamd3<DeSerializers>>;
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
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprArId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_AR_ID: fieldBuilder.buildEdmTypeField(
          'U_DprArID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uApc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APC: fieldBuilder.buildEdmTypeField('U_APC', 'Edm.Double', true),
        /**
         * Static representation of the {@link uApcHist} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APC_HIST: fieldBuilder.buildEdmTypeField(
          'U_APCHist',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uApcAlt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APC_ALT: fieldBuilder.buildEdmTypeField(
          'U_APCAlt',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uOrDpAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OR_DP_ACC: fieldBuilder.buildEdmTypeField(
          'U_OrDpAcc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uUnDpAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UN_DP_ACC: fieldBuilder.buildEdmTypeField(
          'U_UnDpAcc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSpDpKey1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_KEY_1: fieldBuilder.buildEdmTypeField(
          'U_SpDpKey1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpDpAcc1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_ACC_1: fieldBuilder.buildEdmTypeField(
          'U_SpDpAcc1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSpDpKey2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_KEY_2: fieldBuilder.buildEdmTypeField(
          'U_SpDpKey2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpDpAcc2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_ACC_2: fieldBuilder.buildEdmTypeField(
          'U_SpDpAcc2',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSpDpKey3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_KEY_3: fieldBuilder.buildEdmTypeField(
          'U_SpDpKey3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpDpAcc3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_ACC_3: fieldBuilder.buildEdmTypeField(
          'U_SpDpAcc3',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QTY: fieldBuilder.buildEdmTypeField('U_Qty', 'Edm.Double', true),
        /**
         * Static representation of the {@link uSalvageV} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALVAGE_V: fieldBuilder.buildEdmTypeField(
          'U_SalvageV',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Oamd3)
      };
    }

    return this._schema;
  }
}
